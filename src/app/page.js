function Breadcrumbs() {
  return (
    <nav className="text-sm text-gray-300 mb-6">
      <ol className="flex">
        <li className="mr-2">
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li className="mr-2">/</li>
        <li className="text-gray-400">Blog</li>
      </ol>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/main-background.jpg')" }}>
      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* 콘텐츠 */}
      <div className="relative p-6 text-white">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* 블로그 소개 */}
        <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg text-gray-200 mb-6">Stay updated with the latest posts by subscribing to our RSS feed.</p>
      </div>
    </div>
  );
}

// 1. 환영 메시지 및 소개
// 블로그 제목: 블로그 이름과 로고.
// 간단한 소개: 블로그의 주제와 목적을 짧고 명확하게 설명.
// 예: "프로그래밍, 개발 이야기, 그리고 성장의 기록을 공유하는 공간입니다."
// 대표 이미지: 블로그의 분위기를 보여줄 수 있는 배경 이미지 또는 일러스트.
// 2. 주요 콘텐츠 하이라이트
// 최신 글 목록: 최근 작성한 글 몇 가지를 미리보기 형태로 보여줌.
// 제목, 작성 날짜, 짧은 요약 포함.
// 카테고리별 인기 글: 주제별로 가장 인기 있는 글을 추천.
// 예: "JavaScript 가이드", "Vue.js 튜토리얼", "Next.js 프로젝트".
// 3. 카테고리 및 태그
// 카테고리: 블로그 글을 주제별로 정리한 메뉴.
// 예: "개발", "커리어", "프로젝트", "리뷰".
// 태그 클라우드: 자주 사용하는 태그를 시각적으로 강조.
// 4. 블로그 주인장 소개
// 간단한 프로필: 작성자의 이름, 사진(또는 아바타), 짧은 자기소개.
// 예: "저는 황재필입니다. 40세에 개발을 시작해 50세에 블로그로 배운 지식을 나누고 있습니다."
// 링크: GitHub, LinkedIn, Twitter 등 외부 채널로 연결.
// 5. 검색 및 탐색 기능
// 검색창: 원하는 주제를 쉽게 찾을 수 있는 기능.
// 아카이브: 작성된 글을 날짜별로 탐색할 수 있도록 제공.
