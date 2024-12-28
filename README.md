## Getting Started

https://dezcao.github.io/

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Static Publish and test run

```
npm run build
npx serve out
```

## SSG git setting.

```
/public/.nojekyll
```

## next.config.mjs

깃블로그 주소를 설정해야 함. 컨피그 파일에서 basePath가 자신의 레파지토리.
username.github.io 형식으로 리파지토리를 만들었다면 공백으로 둔다.

## GitHub Setting

깃헙 블로그 레파지토리의 세팅으로 간다.
이어서, Code and automaion > Pages > Build and deployment로 이동.
Source를 GitHub Actions로 바꾼다.

## .github/workflows/Static.yml

액션의 job 스크립트가 필요하다.
out 폴더를 통째로 올리기 위해서 path에 ./out을 설정 하였음. (아래는 샘플)

```
name: Deploy static content to Pages

on:
  push:
    branches: ["main"] # main 브랜치로 푸시할 때 실행

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out # 로컬에서 생성된 out 폴더를 업로드

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```
