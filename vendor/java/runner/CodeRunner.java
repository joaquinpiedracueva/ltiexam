import javax.tools.Diagnostic;
import javax.tools.DiagnosticCollector;
import javax.tools.JavaCompiler;
import javax.tools.JavaFileObject;
import javax.tools.StandardJavaFileManager;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.PrintStream;
import java.lang.reflect.InvocationTargetException;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

/**
 * Motor de las preguntas CodeRunner de ltiexam. Corre dentro de CheerpJ (Java 8 en el navegador).
 *
 * Uso: CodeRunner <dirSalida> <timeoutMs> <codigo.java> [__Prueba0.java __Prueba1.java ...]
 *
 * Compila todo junto con javac (tools.jar) y, si compila, ejecuta el main de cada __PruebaN en un
 * class loader propio: cada prueba ve las clases del alumno recién cargadas, sin el estado estático
 * que dejó la anterior (importa para los Singleton). La salida va a stdout con marcadores @@ que
 * lee js/coderunner.js.
 *
 * Compilar (desde esta carpeta, con cualquier JDK >= 9):
 *   javac --release 8 -d build CodeRunner.java && jar cf ../ltiexam-runner.jar -C build .
 */
public class CodeRunner {
    private static final Charset UTF8 = Charset.forName("UTF-8");

    public static void main(String[] args) throws Exception {
        File out = new File(args[0]);
        out.mkdirs();
        long timeoutMs = Long.parseLong(args[1]);
        List<File> sources = new ArrayList<File>();
        List<String> tests = new ArrayList<String>();
        for (int i = 2; i < args.length; i++) {
            File f = new File(args[i]);
            sources.add(f);
            String name = f.getName().replaceAll("\\.java$", "");
            if (name.startsWith("__Prueba")) tests.add(name);
        }

        PrintStream stdout = System.out;
        if (!compile(sources, out, stdout)) {
            stdout.println("@@DONE");
            return;
        }
        stdout.println("@@COMPILED");
        URL[] classpath = { out.toURI().toURL() };
        ClassLoader parent = CodeRunner.class.getClassLoader().getParent();
        for (int i = 0; i < tests.size(); i++) runTest(i, tests.get(i), classpath, parent, timeoutMs, stdout);
        stdout.println("@@DONE");
    }

    private static boolean compile(List<File> sources, File out, PrintStream stdout) throws Exception {
        // tools.jar va en el classpath; JavacTool.create() evita depender de ToolProvider y de java.home
        JavaCompiler javac = (JavaCompiler) Class.forName("com.sun.tools.javac.api.JavacTool")
                .getMethod("create").invoke(null);
        DiagnosticCollector<JavaFileObject> diags = new DiagnosticCollector<JavaFileObject>();
        StandardJavaFileManager files = javac.getStandardFileManager(diags, Locale.getDefault(), UTF8);
        List<String> options = Arrays.asList("-d", out.getPath(), "-encoding", "UTF-8", "-nowarn", "-proc:none");
        boolean ok = javac.getTask(null, files, diags, options, null,
                files.getJavaFileObjectsFromFiles(sources)).call();
        if (!ok) {
            stdout.println("@@COMPILE_ERROR");
            for (Diagnostic<? extends JavaFileObject> d : diags.getDiagnostics()) {
                if (d.getKind() != Diagnostic.Kind.ERROR) continue;
                String src = d.getSource() == null ? "" : new File(d.getSource().getName()).getName();
                stdout.println("@@ERR " + src + " " + d.getLineNumber());
                stdout.println(d.getMessage(Locale.getDefault()));
            }
        }
        files.close();
        return ok;
    }

    private static void runTest(int index, final String className, URL[] classpath, ClassLoader parent,
                                long timeoutMs, PrintStream stdout) throws Exception {
        ByteArrayOutputStream buffer = new ByteArrayOutputStream();
        PrintStream capture = new PrintStream(buffer, true, "UTF-8");
        final URLClassLoader loader = new URLClassLoader(classpath, parent);
        final Throwable[] failure = new Throwable[1];
        Thread worker = new Thread(new Runnable() {
            public void run() {
                try {
                    loader.loadClass(className).getMethod("main", String[].class)
                            .invoke(null, (Object) new String[0]);
                } catch (InvocationTargetException e) {
                    failure[0] = e.getCause();
                } catch (Throwable e) {
                    failure[0] = e;
                }
            }
        });
        worker.setDaemon(true);
        System.setOut(capture);
        System.setErr(capture);
        try {
            worker.start();
            worker.join(timeoutMs);
        } finally {
            System.setOut(stdout);
            System.setErr(stdout);
        }
        String status = worker.isAlive() ? "timeout" : failure[0] != null ? "error" : "ok";
        if (failure[0] != null) capture.println(failure[0]);
        capture.flush();
        stdout.println("@@TEST " + index + " " + status);
        stdout.println(new String(buffer.toByteArray(), UTF8));
        stdout.println("@@END");
    }
}
