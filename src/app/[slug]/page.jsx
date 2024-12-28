import { Suspense } from "react";
import ClientList from "@/components/ClientList";

// 가능한 page 및 component `slug` 값
export async function generateStaticParams() {
  return [{ slug: "fragments" }, { slug: "tech-doc" }];
}

// JSON 데이터를 로드하는 함수 url의 slug에 의존하여 다른 json 읽음.
async function getData(slug) {
  // mod.default : json이 모드로 임포트될 때, json이 내보내어 진다.
  const [res2025, res2024] = await Promise.all([
    import(`@/data/${slug}/2025.json`).then((mod) => mod.default),
    import(`@/data/${slug}/2024.json`).then((mod) => mod.default),
  ]);

  return {
    jsonDocuments: [...res2025, ...res2024],
    slug,
  };
}

// 동적 경로 페이지
export default async function SlugPage({ params }) {
  const { slug } = await params;
  const clientListProps = await getData(slug);

  return (
    <div className="p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <ClientList {...clientListProps} />
      </Suspense>
    </div>
  );
}
