# sorane.dev — agent instructions

This repository holds the **sorane.dev** official website (centered on **soraneDocs**, Powered by ibisOffice), built with [sorane-dev/sites](https://github.com/sorane-dev/sites) (`@sorane/cli`, `preset: okf-site`).

## Core workflow

1. Edit Markdown files under `content/` (keep OKF `sorane-okf/0.1` frontmatter valid).
2. Run `npm run validate` and resolve any `severity: "error"` findings.
3. Run `npm run build` to generate `dist/`.
4. Deploy with `npm run deploy` (Cloudflare Pages project `sorane`, domain `sorane.dev`).
5. Never hand-edit `dist/`.
