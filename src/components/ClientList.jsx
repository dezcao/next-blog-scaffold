// components/ClentList.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";

// 공통적인 목록화면을 구성
export default function ClentList({ jsonDocuments, componentRoot }) {
  const router = useRouter();
  const searchParams = useSearchParams(); // Client Components에서만 동작함.

  // 페이지 처리
  const [currentPage, setCurrentPage] = useState(() => {
    const pageParam = searchParams?.get("page");
    return pageParam ? parseInt(pageParam, 10) : 1; // 쿼리파라미터 꺼내서 10진수로 변환 혹은 기본값 1.
  });

  const itemsPerPage = 3; // 페이지당 글의 수
  const totalPages = Math.ceil(jsonDocuments.length / itemsPerPage); // 전체 페이지 수 계산
  const currentJsonDocuments = jsonDocuments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ); // 현재페이지의 목록에 표시될 json의 데이터 결정

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString()); // 쿼리스트링을 문자열로 만들고 URLSearchParams 객체로 만듬.
    params.set("page", String(currentPage)); // 페이지를 현재 페이지로 재설정
    const newPath = `${window.location.pathname}?${params.toString()}`; // 현재의 URL경로(window.location.pathname)에 새 쿼리스트링을 결합
    router.replace(newPath); // 라우터 상태를 교체함.(리다이렉트 일어남), 뒤로가기를 해도 히스토리가 없기때문에 못감. (페이지 파라미터만 바꾸기 때문에 돌아가지 않고싶음.)
  }, [currentPage, searchParams, router]); // 현재페이지, 쿼리파라미터, 라우터를 지켜본다.

  return (
    <div className="space-y-6">
      {/* 목록을 구성 : doc.slug는 json 파일에 적혀있는 slug로 url slug와 다른 값임 */}
      <ul className="space-y-4">
        {currentJsonDocuments.map((doc) => (
          <li key={doc.slug}>
            <button
              onClick={() =>
                router.push(
                  `/${componentRoot.toLowerCase()}/${doc.year}/${doc.month}/${
                    doc.slug
                  }?componentName=${doc.componentName}&page=${currentPage}`
                )
              }
              className="text-blue-600 hover:underline"
            >
              {doc.title} ({doc.year}/{doc.month})
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
}
