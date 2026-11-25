---
type: index
title: soraneDocs
description: 文書をひらく。ひらめきが、広がる。Word・Excel・PowerPoint に加え、一太郎・DocuWorks・Visio・Markdown に対応したオフィスアプリ。Powered by ibisOffice。
profile: sorane-okf/0.1
---

アカウント不要・ブラウザ内 WebAssembly + WebGPU で今すぐお試しいただけます。

- **[Web 版をひらく (docs.sorane.dev) ↗](https://docs.sorane.dev/)** — ブラウザだけで文書をひらいて、読んで、編集・PDF 書き出しできます。
- **[Powered by ibisOffice ↗](https://github.com/ibisjp/ibis-office)** — オープンソース（AGPL-3.0）の文書エンジンをもとに開発しています。
- **[プライバシーポリシー](privacy.html)** — 端末内完結のローカル処理。トラッキングや広告 SDK は含みません。

## 主な特徴

- **幅広い文書形式に直接対応**: Word（`.docx`）・Excel（`.xlsx`）・PowerPoint（`.pptx`）に加え、一太郎（`.jtd`）・DocuWorks（`.xdw`）・Visio（`.vsdx`）・Markdown（Mermaid 図）・自治体連携標準 CSV・SBOM に対応しています。
- **端末内完結のローカル処理**: 文書の読み込み・編集・PDF 書き出しはすべてお使いの端末内で完結します。Web 版もアカウント登録なしで利用できます。
- **日本語組版と透明なサプライチェーン**: 縦書き・罫線表・異体字対応フォントを備え、配布ビルドごとの CycloneDX 1.6 SBOM / CBOM もアプリ自身で閲覧できます。

## 実際の文書で、確かめる（サンプル 7 件）

- **名簿の照合（Excel / XLSX）**: 「髙橋／高橋」や伏字を含む名寄せデモ（架空データ） — [名寄せデモをひらく ↗](https://docs.sorane.dev/editor.html?open=%2Fapi%2Fsamples%2Fbddbceda-c82b-4730-8744-a50e6ccb4600%2Fsample.xlsx)
- **Mermaid 構文デモ集（Markdown）**: UML を含む主要 24 図種をまとめた総集編 — [サンプルをひらく ↗](https://docs.sorane.dev/editor.html?open=%2Fsamples%2Fmermaid-showcase.md)
- **マイナンバー法改正案の新旧対照条文（一太郎 / JTD）**: 縦書き条文と罫線表を含む長文（2023年3月1日版） — [サンプルをひらく ↗](https://docs.sorane.dev/editor.html?open=%2Fsamples%2Fmynumber-law-2023-comparison.jtd)
- **まちなかの居心地の良さを測る分析ツール（Excel / XLSX）**: 複数シートの数式と 50 個のグラフを含む記入例 — [サンプルをひらく ↗](https://docs.sorane.dev/editor.html?open=%2Fsamples%2Furban-comfort-analysis.xlsx)
- **自治体連携標準 CSV（294列）**: 繰り返し列をツリー構造で展開・検索（架空データ） — [サンプルをひらく ↗](https://docs.sorane.dev/editor.html?open=%2Fsamples%2Fstandard-linkage.csv)
- **Visio マルチページ図面ハンドブック（VSDX）**: 複数ページのフロー図・構成図を読み取り・編集 — [サンプルをひらく ↗](https://docs.sorane.dev/editor.html?open=%2Fsamples%2Fvisio-multi-page-handbook.vsdx)
- **ibisOffice WASM SBOM（CycloneDX 1.6）**: 本ビルド自身の依存部品目録 JSON を表計算形式で閲覧 — [サンプルをひらく ↗](https://docs.sorane.dev/editor.html?open=%2Fsamples%2Fibis-office-wasm.sbom.cdx.json)

## Sorane エコシステム

- **soraneDocs（[docs.sorane.dev ↗](https://docs.sorane.dev/)）**: Web・macOS・Windows・Linux・Android・iOS 向けオフィスアプリ（[詳しく見る](about.html)）
- **空音 / sorane-dev/sites（[ssg.sorane.dev ↗](https://ssg.sorane.dev/)）**: このサイト自身を構築している OKF ネイティブ静的サイト生成器・CMS（[GitHub ↗](https://github.com/sorane-dev/sites)）
