import React, { Suspense } from "react";
import BackToList from "@/components/BackToList";

export async function generateStaticParams() {
  // 동적으로 처리할 데이터 파일 정의
  const dataSources = [
    { slug: "fragments", years: ["2025", "2024"] },
    { slug: "tech-doc", years: ["2025", "2024"] },
  ];

  // 모든 JSON 파일 로드
  const paramsPromises = dataSources.flatMap(({ slug, years }) =>
    years.map(async (year) => {
      const data = await import(`@/data/${slug}/${year}.json`).then((mod) => mod.default);
      return data.map((item) => ({
        slug,
        year,
        month: item.month,
        component: item.componentName.trim().replace(/\s+/g, "-"),
      }));
    })
  );

  // 모든 경로를 비동기로 로드
  const params = (await Promise.all(paramsPromises)).flat();

  // console.log("Generated params:", params); // 디버깅용 출력
  return params;
}

// 동적 컴포넌트를 로드하는 함수
async function loadComponent({ slug, year, month, component: componentName }) {
  try {
    const module = await import(`@/components/${slug}/${year}/${month}/${componentName}.jsx`);
    return module.default; // 컴포넌트 반환
  } catch (error) {
    console.error("Failed to load component:", {
      slug,
      year,
      month,
      componentName,
      error,
    });
    return () => <div>Component not found</div>; // 에러 시 기본 컴포넌트
  }
}

export default async function DynamicComponentPage({ params, searchParams }) {
  const { slug, year, month, component } = await params;

  // 동적으로 컴포넌트 가져오기
  const DynamicComponent = await loadComponent({
    slug,
    year,
    month,
    component,
  });

  return (
    <div className="p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <BackToList />
        <DynamicComponent />
      </Suspense>
    </div>
  );
}
