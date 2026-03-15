const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(
  path.join(__dirname, "..", "maniteja-portfolio.html"),
  "utf8"
);
const lines = html.split("\n");

// Cricket: lines 977-1562 (1-indexed) => slice(976, 1562)
const cricket = lines.slice(976, 1562).join("\n");
// Books: lines 1583-1692
const books = lines.slice(1582, 1692).join("\n");
// Sitcoms: lines 1712-1809
const sitcoms = lines.slice(1711, 1809).join("\n");

function escapeTemplateLiteral(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const out = `// Auto-generated from maniteja-portfolio.html — animated hobby illustrations

export const CRICKET_ILLUSTRATION = \`${escapeTemplateLiteral(cricket)}\`;

export const BOOKS_ILLUSTRATION = \`${escapeTemplateLiteral(books)}\`;

export const SITCOMS_ILLUSTRATION = \`${escapeTemplateLiteral(sitcoms)}\`;
`;

fs.writeFileSync(
  path.join(__dirname, "..", "src", "data", "hobby-illustrations.ts"),
  out
);
console.log("Wrote src/data/hobby-illustrations.ts");
