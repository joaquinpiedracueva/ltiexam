"use strict";

/* ------------------------- markdown -> html -------------------------- */
function esc(s){
  return String(s).replace(/[&<>"]/g, function(c){
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}

var SENT = "\u0001"; // marcador interno para los tramos `code`

var ESC = "\u0002"; // marcador interno para los caracteres escapados con \

function mdInline(s){
  var codes = [];
  s = String(s).replace(/`([^`]+)`/g, function(m, c){ codes.push(c); return SENT + (codes.length - 1) + SENT; });
  // escapes de Markdown (\* \_ …): el carácter se muestra tal cual y no cuenta como formato
  s = s.replace(/\\([\\`*_{}\[\]()#+\-.!|>~])/g, function(m, c){ return ESC + c.charCodeAt(0) + ESC; });
  s = esc(s);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  s = s.replace(new RegExp(ESC + "(\\d+)" + ESC, "g"), function(m, n){ return esc(String.fromCharCode(Number(n))); });
  return s.replace(new RegExp(SENT + "(\\d+)" + SENT, "g"), function(m, i){
    return "<code>" + esc(codes[Number(i)]) + "</code>";
  });
}

function mdBlock(lines){
  var L = lines || [], out = [], i = 0;
  while (i < L.length){
    var line = L[i];
    if (/^\s*```/.test(line)){
      var buf = [];
      i++;
      while (i < L.length && !/^\s*```/.test(L[i])) buf.push(L[i++]);
      i++;
      out.push("<pre><code>" + esc(buf.join("\n")) + "</code></pre>");
      continue;
    }
    if (/^\s*\|/.test(line)){
      var rows = [];
      while (i < L.length && /^\s*\|/.test(L[i])) rows.push(L[i++]);
      var cells = function(r){ return r.trim().replace(/^\||\|$/g, "").split("|").map(function(c){ return c.trim(); }); };
      var head = null, body = rows;
      if (rows.length > 1 && /^[\s|:-]+$/.test(rows[1])){ head = cells(rows[0]); body = rows.slice(2); }
      var t = '<div class="scroll-x"><table>';
      if (head) t += "<thead><tr>" + head.map(function(c){ return "<th>" + mdInline(c) + "</th>"; }).join("") + "</tr></thead>";
      t += "<tbody>" + body.map(function(r){
        return "<tr>" + cells(r).map(function(c){ return "<td>" + mdInline(c) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
      out.push(t);
      continue;
    }
    if (/^\s*>/.test(line)){
      var qb = [];
      while (i < L.length && /^\s*>/.test(L[i])) qb.push(L[i++].replace(/^\s*>\s?/, ""));
      out.push('<div class="note">' + mdBlock(qb) + "</div>");
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)){
      var items = [];
      while (i < L.length && /^\s*[-*]\s+/.test(L[i])) items.push(L[i++].replace(/^\s*[-*]\s+/, ""));
      out.push("<ul>" + items.map(function(x){ return "<li>" + mdInline(x) + "</li>"; }).join("") + "</ul>");
      continue;
    }
    if (line.trim() === ""){ i++; continue; }
    var para = [];
    while (i < L.length && L[i].trim() !== "" && !/^\s*(```|\||>|[-*]\s)/.test(L[i])){
      var hard = /\S {2,}$/.test(L[i]);
      para.push(mdInline(L[i].replace(/\s+$/, "")) + (hard ? "<br>" : ""));
      i++;
    }
    out.push("<p>" + para.join(" ") + "</p>");
  }
  return out.join("");
}

var SQLISH = /^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|GRANT|REVOKE|WITH|BEGIN|COMMIT|ROLLBACK|SAVEPOINT|CALL|DECLARE|SET|TRUNCATE|COPY|EXPLAIN|VACUUM|REINDEX|ANALYZE|PREPARE|EXECUTE|CLUSTER|COMMENT|REASSIGN|SHOW)\b/i;
function looksSql(t){ return !!t && (SQLISH.test(t) || /;\s*$/.test(t.trim())); }
