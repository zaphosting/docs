const fs = require("fs");
const path = require("path");

// Hauptordner
const rootDir = "./docs";

// Sprachverzeichnisse laut deiner Docusaurus-Konfiguration
const locales = ["en", "de", "es", "fr", "ar", "pt", "th", "pl", "ja"];

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDir(full, callback);
    else if (file.endsWith(".md") || file.endsWith(".mdx")) callback(full);
  }
}

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;

  // 1. Entfernt Anker in Links auf Markdown-Dateien
  //    z. B. (guide.md#anchor) → (guide.md)
  content = content.replace(/\(([\w./-]+\.mdx?(#[^)]+))\)/gi, match =>
    match.replace(/#.*(?=\))/, "")
  );

  // 2. Entfernt reine lokale Anker-Links
  //    z. B. [section](#section) → section
  content = content.replace(/\[([^\]]+)\]\(#([\w.-]+)\)/gi, "$1");

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Bereinigt:", filePath);
  }
}

function processDir(baseDir) {
  if (!fs.existsSync(baseDir)) return;
  console.log("Starte:", baseDir);
  walkDir(baseDir, cleanFile);
}

// Standard-Dokumentation
processDir(rootDir);

// i18n-Sprachen
for (const locale of locales) {
  const localeDocs = path.join("i18n", locale, "docusaurus-plugin-content-docs", "current");
  processDir(localeDocs);
}

console.log("Fertig.");
