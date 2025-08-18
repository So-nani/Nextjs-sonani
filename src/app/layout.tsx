import type { Metadata } from "next";
import { KakaoMapProvider } from "../components/context/kakao-map-context";
import { ThemeProvider } from "./components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "개발자 포트폴리오 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <KakaoMapProvider>{children}</KakaoMapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
