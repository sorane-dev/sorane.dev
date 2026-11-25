import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const cssPath = join(distDir, "assets", "main.css");
const cssHash = createHash("sha256").update(readFileSync(cssPath)).digest("hex").slice(0, 8);

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      walk(full);
    } else if (entry.endsWith(".html")) {
      const html = readFileSync(full, "utf8");
      const updated = html.replaceAll('assets/main.css"', `assets/main.css?v=${cssHash}"`);
      if (updated !== html) {
        writeFileSync(full, updated, "utf8");
      }
    }
  }
}

walk(distDir);

const headersPath = join(distDir, "_headers");
const headers = readFileSync(headersPath, "utf8").replace(
  "Cache-Control: public, max-age=31536000, immutable",
  "Cache-Control: public, max-age=3600, must-revalidate",
);
writeFileSync(headersPath, headers, "utf8");
console.log(`[postbuild] fingerprinted main.css?v=${cssHash} and updated _headers`);
