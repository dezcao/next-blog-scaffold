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
        <li className="text-gray-400">Oak Serpent</li>
      </ol>
    </nav>
  );
}

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "2024 JavaScript Rising Stars.",
      href: "/tech-doc/2025/01/JavaScriptRisingStars/?page=1",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/main-background.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: 0,
        padding: 0,
      }}
    >
      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative p-6 text-white">
        <Breadcrumbs />

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-200 font-bold mb-4">Fukuoka Takarakuji Sanseruko Chance Center</h1>

        <ul className="text-lg text-gray-200 mb-6 mt-16">
          <li>삶의 목표는 과반수의 편에 서는 것이 아니다.</li>
          <li>정신이상자들의 무리에서 벗어나는 것이다.</li>
          <li>- Marcus Aurelius Antoninus</li>
        </ul>

        <ul className="mt-16">
          {posts.map((post) => (
            <li key={post.id} className="flex items-center mb-2">
              <svg className="w-4 h-4 mr-2 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M12.293 9.293a1 1 0 011.414 1.414L10.414 14h5.586a1 1 0 110 2h-8a1 1 0 01-1-1v-8a1 1 0 112 0v5.586l3.293-3.293z" />
              </svg>
              <a href={post.href} className="text-yellow-400 hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
