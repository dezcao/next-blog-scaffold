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
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/main-background.webp')" }}>
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
