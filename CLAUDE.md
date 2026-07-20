# tokusetsu3 プロジェクト固有ルール

## ブランチ構成

| ブランチ | 用途 |
|---|---|
| `master` | プロダクト本体のファイル |
| `gh-pages-dev` | LP（ランディングページ）の開発用ファイル一式。LP関連の作業はここが起点 |
| `gh-pages` | LPのビルド出力（`build/`）のみを置く。**直接作業しない** |

## 作業ブランチの切り方

- LP関連の作業をするときは、`gh-pages-dev` を起点に作業ブランチを切る（`gh-pages-dev` 自体の上で直接作業しない）
- `gh-pages` ブランチは触らない。デプロイは以下のコマンドで `gh-pages-dev` から自動反映する

```
git subtree push --prefix build/ origin gh-pages
```

## 開発コマンド

```
npm install
npx gulp        # ローカルサーバー起動 + watch
npx gulp build  # ビルドのみ
```
