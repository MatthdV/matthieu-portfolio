#!/usr/bin/env node
// Liste les valeurs TODO_ restantes. Échoue (code 1) en production ou avec --strict.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const roots = ["src", "messages", "public"];
const skipDirs = new Set(["node_modules", ".next", ".git"]);
const exts = new Set([".ts", ".tsx", ".json", ".mjs", ".md", ".txt", ".xml"]);
const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (skipDirs.has(name)) continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if ([...exts].some((e) => name.endsWith(e))) scan(p);
  }
}

function scan(file) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      for (const m of line.matchAll(/TODO_[A-Z0-9_]+/g)) {
        hits.push({ file: relative(root, file), line: i + 1, token: m[0] });
      }
    });
}

for (const r of roots) {
  try {
    walk(join(root, r));
  } catch {}
}

const isProd = process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production" && process.env.CI === "true";
const strict = process.argv.includes("--strict") || isProd;
const tokens = [...new Set(hits.map((h) => h.token))];

if (!hits.length) {
  console.log("check-todos : aucune valeur TODO_ restante.");
  process.exit(0);
}
console.log(`check-todos : ${tokens.length} valeur(s) TODO_ à remplacer.`);
for (const t of tokens) {
  const where = hits.filter((h) => h.token === t).map((h) => `${h.file}:${h.line}`);
  console.log(`  ${t}  (${where.length} usage${where.length > 1 ? "s" : ""}) ${where[0]}`);
}
if (strict) {
  console.error("check-todos : build de production refusé tant que des TODO_ restent.");
  process.exit(1);
}
console.log("check-todos : mode développement, build autorisé.");
