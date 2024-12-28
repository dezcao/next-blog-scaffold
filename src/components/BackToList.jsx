// components/BackToList.tsx
import Link from "next/link";

// 상세화면에서 목록으로 보낼것입니다.
export const BackToList = ({ currentPage, basePath }) => (
  <Link
    href={`/${basePath}?page=${currentPage}`}
    className="text-blue-600 hover:underline"
  >
    Back to List
  </Link>
);
