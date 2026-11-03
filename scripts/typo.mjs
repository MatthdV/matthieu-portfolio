#!/usr/bin/env node
// Typographie des fichiers messages/*.json (idempotent) : apostrophe courbe,
// espaces insécables françaises. Appliqué aux valeurs, jamais aux clés.
import { readFileSync, writeFileSync } from "node:fs";

const NB = " ";
const fr = (s) =>
  s
    .replace(/'/g, "’")
    .replace(/ ([:;!?»€])/g, `${NB}$1`)
    .replace(/« /g, `«${NB}`)
    .replace(/(\d) (\d{3})(?!\d)/g, `$1${NB}$2`)
    .replace(/(\d) h\b/g, `$1${NB}h`);
const other = (s) => s.replace(/'/g, "’");

function walk(v, f) {
  if (typeof v === "string") return f(v);
  if (Array.isArray(v)) return v.map((x) => walk(x, f));
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x, f)]));
  return v;
}

for (const [loc, f] of [["fr", fr], ["en", other], ["es", other]]) {
  const path = `messages/${loc}.json`;
  let data;
  try { data = JSON.parse(readFileSync(path, "utf8")); } catch { continue; }
  writeFileSync(path, JSON.stringify(walk(data, f), null, 2) + "\n");
}
console.log("typo : messages mis à jour.");
