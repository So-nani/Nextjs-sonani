## 추가 사용된 패키지

### Dependencies (애플리케이션 실행에 필요한 패키지)

- `lucide-react` : 아이콘 라이브러리(사이드 바 - 집, 폴더, 메일 아이콘)
- `react-syntax-highlighter`
  - 코드 구분 강조 라이브러리 (코드 블록 가독성 상승)
  - 여러 스타일 테마 제공 (`github`, `dracula`, `atomOneDark`, `solarizedDark` 등)
- `kakao.maps.d.ts`
  - 카카오 맵 API 타입스크립트 패키지
- `next-themes`
  - 라이트/다크 모드 테마 전환을 위해 설치
  - 별도의 tailwind.config.ts 파일 생성 후 `next-themes` 와 연동, darkMode:'class'로 지정

### DevDependencies (개발 환경에서만 필요한 패키지)

- `tailwindcss` : 유틸리티-우선(utility-first) CSS 프레임워크. 전반적인 UI 스타일링과 레이아웃을 구성하는 데 사용 (globals.css와 컴포넌트의 className 속성에서 활용)
- `@types/react-syntax-highlighter` : `react-syntax-highlighter` 라이브러리를 TypesScript 환경에서 사용하기 위한 타입 정의 파일. 코드 자동 완성 및 체크

# 배포 현황

- vercel 통해 배포
- [포트폴리오](https://vercel.com/so-nanis-projects/nextjs-app/FtAxttYhnkypqvuxSRBSQHvJoEMu)
