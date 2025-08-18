"use client";

import { useState } from "react";
import { Home, Folder, Mail, Phone, MapPin } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import KakaoMap from "../components/KakaoMap";
import projectsData from "../data/projects.json" assert { type: "json" };

import { ThemeToggleButton } from "./components/theme-toggle-button";

export default function Page() {
  const EMAIL = "sonani3136@gamil.com";
  const TEL = "010-3136-6026";
  const ADDRESS = "경북 경산시 경청로 222길 8";

  const [copiedText, setCopiedText] = useState<string | null>("");

  //좌측 네비게이션 클릭 시 자동 스크롤
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //복사 기능
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="sticky top-0 h-screen bg-slate-900 text-white flex flex-col items-center py-6 transition-all duration-300 group hover:w-40 w-16">
        <div>
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
        </div>
        <div className="mt-auto">
          <ThemeToggleButton />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-10 max-w-7xl mx-auto bg-sky-200">
        <section id="about" className="py-20">
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

        <section id="projects" className="py-20">
          <h1 className="section-title">Projects</h1>
          <div className="space-y-8">
            {projectsData.map((project, index) => (
              <div key={index} className="main-card">
                <h2 className="text-xl font-semibold">{project.project_title}</h2>
                <p className="mb-2">{project.description}</p>
                {project.youtube_embed ? (
                  <div className="aspect-video bg-gray-200 flex items-center justify-center mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.youtube_embed}
                      title={project.project_title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-200 flex items-center justify-center mb-4">
                    YouTube Embed 자리
                  </div>
                )}
                <SyntaxHighlighter
                  language="javascript"
                  style={atomDark}
                  customStyle={{ borderRadius: "0.25rem" }}
                >
                  {project.code}
                </SyntaxHighlighter>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 underline mt-2 inline-block"
                >
                  GitHub 링크
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <h1 className="section-title">Contact</h1>
          <div className="flex flex-row gap-8 items-start">
            {/* Left Side: Contact Info */}
            <div className="w-1/2 space-y-4 main-card">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-slate-500" />
                <span>{EMAIL}</span>
                <button onClick={() => handleCopy(EMAIL)} className="copy-button">
                  {copiedText === EMAIL ? "복사됨!" : "복사"}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-slate-500" />
                <span>{TEL}</span>
                <button onClick={() => handleCopy(TEL)} className="copy-button">
                  {copiedText === TEL ? "복사됨!" : "복사"}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-slate-500" />
                <span>{ADDRESS}</span>
                <button onClick={() => handleCopy(ADDRESS)} className="copy-button">
                  {copiedText === ADDRESS ? "복사됨!" : "복사"}
                </button>
              </div>
            </div>

            {/* Right Side: Map */}
            <div className="w-1/2 h-96">
              <KakaoMap latitude={37.498085} longitude={127.027977} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
