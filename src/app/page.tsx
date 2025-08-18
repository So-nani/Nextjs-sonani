"use client";

import { useState } from "react";
import { Home, Folder, Mail } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  const EMAIL = "sonani3136@gamil.com";
  const TEL = "010-3136-6026";
  const [copiedText, setCopiedText] = useState<string | null>("");

  const codeSnippet = `function helloWorld() {
  console.log("Hello, world!");
}`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="bg-gray-900 text-white flex flex-col items-center py-6 transition-all duration-300 group hover:w-40 w-16">
        <button onClick={() => scrollToSection("about")} className="nav-button">
          <Home className="h-6 w-6" />
          <span className="hidden group-hover:inline">About</span>
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="nav-button"
        >
          <Folder className="h-6 w-6" />
          <span className="hidden group-hover:inline">Projects</span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="nav-button"
        >
          <Mail className="h-6 w-6" />
          <span className="hidden group-hover:inline">Contact</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <section id="about" className="min-h-screen">
          <h1 className="section-title">About Me</h1>
          <p className="mb-4">여기에 자기소개 텍스트</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="skill-card">React</div>
            <div className="skill-card">Next.js</div>
            <div className="skill-card">TypeScript</div>
            <div className="skill-card">Node.js</div>
            <div className="skill-card">Git</div>
            <div className="skill-card">Tailwind</div>
          </div>
        </section>

        <section id="projects" className="min-h-screen">
          <h1 className="section-title">Projects</h1>
          <div className="space-y-8">
            <div className="project-card">
              <h2 className="text-xl font-semibold">프로젝트 제목</h2>
              <p className="mb-2">한 줄 설명</p>
              <div className="aspect-video bg-gray-200 flex items-center justify-center mb-4">
                YouTube Embed 자리
              </div>
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                customStyle={{ borderRadius: "0.25rem" }}
              >
                {codeSnippet}
              </SyntaxHighlighter>
              <a href="#" className="text-blue-600 underline">
                GitHub 링크
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen">
          <h1 className="section-title">Contact</h1>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span>📧 {EMAIL}</span>
              <button onClick={() => handleCopy(EMAIL)} className="copy-button">
                {copiedText === EMAIL ? "복사됨!" : "복사"}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span>📱 {TEL}</span>
              <button onClick={() => handleCopy(TEL)} className="copy-button">
                {copiedText === TEL ? "복사됨!" : "복사"}
              </button>
            </div>
            <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
              카카오맵 자리
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
