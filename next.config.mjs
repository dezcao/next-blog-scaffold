/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static Site Generation (SSG)
  trailingSlash: false, // 페이지 URL에 슬래시 추가
  images: {
    unoptimized: true, // 정적 빌드 시 이미지 최적화 비활성화
  },
  productionBrowserSourceMaps: false, // 브라우저용 소스 맵 비활성화
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // 환경 변수 설정
  },
  reactStrictMode: true,
};

export default nextConfig;
