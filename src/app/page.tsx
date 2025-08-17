"use client";

import { useState } from "react";
import { Home, Folder, Mail } from "lucide-react";

export default function Page() {
  const [active, setActive] = useState("about");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="bg-gray-900 text-white flex flex-col items-center py-6 transition-all duration-300 group hover:w-40 w-16">
        <button
          onClick={() => setActive("about")}
          className={`flex items-center gap-2 p-3 hover:bg-gray-700 w-full justify-center group-hover:justify-start rounded-xl ${
            active === "about" ? "bg-gray-700" : ""
          }`}
        >
          <Home className="h-6 w-6" />
          <span className="hidden group-hover:inline">About</span>
        </button>
        <button
          onClick={() => setActive("projects")}
          className={`flex items-center gap-2 p-3 hover:bg-gray-700 w-full justify-center group-hover:justify-start rounded-xl ${
            active === "projects" ? "bg-gray-700" : ""
          }`}
        >
          <Folder className="h-6 w-6" />
          <span className="hidden group-hover:inline">Projects</span>
        </button>
        <button
          onClick={() => setActive("contact")}
          className={`flex items-center gap-2 p-3 hover:bg-gray-700 w-full justify-center group-hover:justify-start rounded-xl ${
            active === "contact" ? "bg-gray-700" : ""
          }`}
        >
          <Mail className="h-6 w-6" />
          <span className="hidden group-hover:inline">Contact</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        {active === "about" && (
          <section>
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-4">여기에 자기소개 텍스트</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 border rounded-xl text-center">React</div>
              <div className="p-4 border rounded-xl text-center">Next.js</div>
              <div className="p-4 border rounded-xl text-center">
                TypeScript
              </div>
              <div className="p-4 border rounded-xl text-center">Node.js</div>
              <div className="p-4 border rounded-xl text-center">Git</div>
              <div className="p-4 border rounded-xl text-center">Tailwind</div>
            </div>
          </section>
        )}

        {active === "projects" && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <div className="space-y-8">
              <div className="border p-6 rounded-xl shadow">
                <h2 className="text-xl font-semibold">프로젝트 제목</h2>
                <p className="mb-2">한 줄 설명</p>
                <div className="aspect-video bg-gray-200 flex items-center justify-center mb-4">
                  YouTube Embed 자리
                </div>
                <pre className="bg-gray-100 p-4 rounded text-sm mb-4">
                  {`function helloWorld() {
  console.log("Hello, world!")
}`}
                </pre>
                <a href="#" className="text-blue-600 underline">
                  GitHub 링크
                </a>
              </div>
            </div>
          </section>
        )}

        {active === "contact" && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span>📧 email@example.com</span>
                <button className="px-2 py-1 bg-gray-200 rounded text-sm">
                  복사
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span>📱 010-1234-5678</span>
                <button className="px-2 py-1 bg-gray-200 rounded text-sm">
                  복사
                </button>
              </div>
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                카카오맵 자리
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
