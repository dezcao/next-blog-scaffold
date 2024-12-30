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
  const posts = [{ id: 1, title: "늦었다고 생각될 때, ChatGPT는?", href: "/fragments/2024/12/CourageWell/?page=1" }];

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image/main-background.webp')" }}>
      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative p-6 text-white">
        <Breadcrumbs />

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-200 font-bold mb-4">Fukuoka Takarakuji Sanseruko Chance Center</h1>
        <ul className="text-lg text-gray-200 mb-6">
          <li>처음 가 본 해외.</li>
          <li>이제 선진국이면 혼자서도 갈 수 있을 것 같다.</li>
        </ul>

        <ul className="text-lg text-gray-200 mb-6">
          <li>"안 해 본 것과 한 번 해 본 것."</li>
          <li>"두려움과 자신감."</li>
          <li>"0과 1."</li>
        </ul>

        <ul className="text-lg text-gray-200 mb-6">
          <li>일본은 복권 판매소를 Chance Center라고 한단다.</li>
          <li>프로그래밍도 기회를 준다.</li>
        </ul>

        <ul className="text-lg text-gray-200 mb-6">
          <li>2014년 10월, 40세에 처음 HTML 태그를 배우기 시작해서</li>
          <li>Java, Node.js, Vue.js 등을 경험했고, 이제 React.js 공부 겸 블로그를 만든다.</li>
        </ul>

        <ul>
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
