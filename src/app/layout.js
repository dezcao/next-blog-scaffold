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

export const metadata = {
  title: "oakserphent",
  description: "dezcao.github.io",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts 링크 추가 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Sidebar */}
          <aside className="bg-gray-800 text-white lg:w-64 lg:fixed lg:h-screen">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-2 mt-14 lg:mt-0 lg:ml-64 overflow-y-auto">
            <div style={{ padding: "20px", width: "100%", margin: "0 auto" }}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
