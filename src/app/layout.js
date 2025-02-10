"use client"; // 클라이언트 컴포넌트로 전환
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <aside className="bg-gray-800 text-white lg:w-64 lg:fixed lg:h-screen lg:overflow-y-auto overflow-auto">
            <Sidebar />
          </aside>

          <main className="flex-1 bg-gray-100 lg:ml-64 overflow-y-auto">
            <div className={`mx-auto ${isHome ? "w-full px-0 py-0 mt-0" : "w-full px-4 sm:px-6 lg:px-8 py-4 mt-12"}`}>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
