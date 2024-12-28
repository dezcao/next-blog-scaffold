"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function BackToList() {
  const params = useParams(); // 동적 경로에서 slug를 가져옴
  const searchParams = useSearchParams(); // 쿼리스트링에서 page 값을 가져옴

  const slug = params.slug; // 동적 경로에서 slug
  const currentPage = searchParams.get("page") || 1; // 쿼리스트링에서 page, 기본값은 1

  return (
    <Link href={`/${slug}?page=${currentPage}`} className="text-blue-600 hover:underline">
      Back to List
    </Link>
  );
}
