"use client";

import { useState, useEffect } from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const [inputPage, setInputPage] = useState(() => String(currentPage));

  useEffect(() => {
    setInputPage(String(currentPage)); // 페이지 변경 시 입력 필드 값 동기화
  }, [currentPage]);

  const handleInputChange = (value) => {
    setInputPage(value); // 사용자가 입력 중인 값을 그대로 유지
    const trimmedValue = value.trim();
    if (trimmedValue !== "" && !isNaN(Number(trimmedValue))) {
      const page = parseInt(trimmedValue, 10);
      if (page >= 1 && page <= totalPages) {
        onPageChange(page); // 유효한 숫자일 경우에만 페이지 변경
      }
    }
  };

  return (
    <div className="flex items-center justify-start space-x-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md border ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
      >
        Previous
      </button>

      {/* Page Input */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-600">Page</span>
        <input
          type="text"
          value={inputPage}
          onChange={(e) => handleInputChange(e.target.value)}
          className="w-12 px-2 py-1 text-center text-gray-600 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <span className="text-sm font-medium text-gray-600">of {totalPages}</span>
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md border ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
}
