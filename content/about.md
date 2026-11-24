---
type: article
title: soraneDocs について
description: soraneDocs の特徴、ibisOffice との関係、対応文書形式について。
profile: sorane-okf/0.1
---

sorane**Docs** は、[ibisOffice](https://github.com/ibisjp/ibis-office) をもとに開発しているオープンソース（AGPL-3.0-only）の文書アプリです。

## 設計方針

- **ローカル完結**: 文書の読み込み・描画・編集・PDF 書き出しはすべてお使いの端末内で実行されます。
- **日本語文書・行政文書への適合**: Word・Excel・PowerPoint だけでなく、一太郎（`.jtd`）・DocuWorks（`.xdw`）・Visio（`.vsdx`）・Markdown（Mermaid 図）・自治体連携標準 CSV などの閲覧・活用を重視しています。
- **透明なサプライチェーン**: 配布ビルドごとに CycloneDX 1.6 の SBOM / CBOM を生成・公開しています。

## ご利用上の注意

ファイル形式や機能によっては、元のアプリと表示・編集が異なる場合があります。大切な文書は原本を残してお使いください。

## 関連リンク

- **Powered by ibisOffice**: <https://github.com/ibisjp/ibis-office>
- **soraneDocs ソースコード・Issue**: <https://github.com/masanork/ibis-office>
- **空音 SSG / CMS（本サイトの基盤）**: <https://ssg.sorane.dev/>（<https://github.com/sorane-dev/sites>）
