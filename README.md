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

컨피그 파일에서 basePath가 자신의 레파지토리.
username.github.io 형식으로 리파지토리를 만들었다면 공백으로 둔다.

깃헙 레파지토리의 세팅에서
Code and automaion > Pages > Build and deployment에서
Source를 GitHub Actions로 바꾼다.

## .github/workflows/Static.yml

out 폴더를 통째로 올리기 위해서 path에 ./out을 설정 하였음.
