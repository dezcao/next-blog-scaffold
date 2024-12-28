"use client";

import { useState } from "react";

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // JSON 데이터로 메뉴 구성
  const menuItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Tech Doc", href: "/tech-doc" },
    { id: 3, name: "Fragments", href: "/fragments" },
    { id: 4, name: "Resume", href: "/resume" },
    { id: 5, name: "Links", href: "/links" },
    { id: 6, name: "Mother", href: "/mother" },
  ];

  return (
    <>
      {/* 모바일 상단 바 */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-12 bg-white shadow-md z-40 flex items-center">
        <button className="text-gray-800 text-2xl ml-4" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white p-4 z-30 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static transition-transform duration-300 pt-12 lg:pt-0`}
      >
        <nav>
          <h2 className="text-xl font-bold mt-4 mb-4">Menu</h2>
          <ul className="space-y-2">
            {/* 반복문을 사용해 메뉴 생성 */}
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="block py-2 px-4 hover:bg-gray-700 rounded"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
