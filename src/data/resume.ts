import type { ResumeData } from "../types/resume";

/**
 * 송성현 이력서 데이터
 * 출처: 토스 지원용으로 최종 정리한 이력서·경력기술서(합본)
 * 링크(github/demo/repo/linkedin/blog)는 실제 주소가 확보되지 않아 "#" 플레이스홀더로 두었다.
 * 추후 실제 URL이 확보되면 해당 값만 교체하면 된다.
 */
export const resumeData: ResumeData = {
  name: "송성현",
  role: "Frontend Developer",
  tagline:
    "복잡한 도메인을 빠르게 파악하고, 일정 안에 완성도 있는 화면을 만드는 개발자입니다.",
  about: [
    "7년 9개월 동안 백엔드로 커리어를 시작해서 지금은 프론트엔드 비중이 더 큰 개발자로 일하고 있습니다. GS Retail 세일즈원 현대화 프로젝트에서는 프론트엔드 파트를 이끌었고, 최근에는 React 프론트 프로젝트를 기획 단계부터 배포 가능한 수준까지 혼자 끌고 가고 있습니다. 새로운 도메인에 들어가도 로직을 빠르게 이해하고, 일정 안에 화면을 완성해내는 걸 제 강점으로 생각합니다.",
    "일하다 문제가 생기면 부정적으로 받아들이기보다 원인을 찾아 풀어가는 쪽으로 생각하는 편이고, 이슈는 발견하는 즉시 팀에 공유해서 커지기 전에 정리하려고 합니다. 개발 이야기를 할 때도 어려운 용어보다는 고객이나 비개발자도 바로 알아들을 수 있는 말로 풀어서 설명하는 걸 중요하게 생각합니다. 타 부서·타 업체와 협업할 일이 많았는데 그 과정에서 소통을 주도하는 역할을 자주 맡았고, 평소에도 유머를 잃지 않으려는 편입니다.",
  ],
  totalExperience: "7년 9개월",
  contact: {
    email: "songshyun1@naver.com",
    phone: "+82 10-2651-8764",
    location: "대한민국",
    github: "#",
    linkedin: "#",
    blog: "#",
  },
  experiences: [
    {
      id: "insoft",
      company: "아이엔소프트",
      period: "2025.07 - 재직중",
      employmentType: "프리랜서",
      department: "프로그램개발",
      position: "과장",
      current: true,
      projects: [
        {
          id: "insoft-domino-admin",
          name: "도미노피자 어드민 콘솔 구축 프로젝트",
          company: "아이엔소프트",
          period: "2026.08 - 현재",
          role: "Frontend 단독 개발",
          summary: "발주사: 도미노피자",
          highlights: [
            "Next.js 14(App Router) 기반 어드민 콘솔의 전체 아키텍처를 Frontend 단독으로 설계 및 구현",
            "대시보드·시스템 모니터링·거래내역·감사로그·권한 관리 등 20여 개 화면 개발",
            "Claude Code, Antigravity 등 AI 코딩 도구를 설계부터 구현까지 활용해 혼자서 전체 화면 개발",
          ],
          stack: ["Next.js", "TypeScript", "Ant Design", "Zustand", "TanStack Query", "Axios", "Recharts"],
          ongoing: true,
          links: { demo: "#", repo: "#" },
        },
        {
          id: "insoft-lguplus-integrated-signup",
          name: "LG U+ 통합 가입 상담 프로젝트",
          company: "아이엔소프트",
          period: "2025.07 - 2026.06",
          role: "모바일 가입 파트 개발 (20~30명 규모)",
          highlights: [
            "상담·CS·모바일가입 등으로 흩어져 있던 LG U+ 앱을 하나로 통합하는 프로젝트에서 모바일 가입 파트 담당",
            "가입신청서 생성 방식을 OZReport에서 EformSign으로 교체, 안면인증 기능 개발",
          ],
          stack: ["React", "Vite", "Zustand"],
          links: { demo: "#", repo: "#" },
        },
      ],
    },
    {
      id: "gsitm",
      company: "주식회사지에스아이티엠",
      period: "2023.03 - 2025.07 (2년 5개월)",
      employmentType: "정규직",
      department: "프로그램 개발 운영",
      position: "매니저",
      projects: [
        {
          id: "gsitm-order-service-ops",
          name: "GS Retail 주문 서비스 운영",
          company: "주식회사지에스아이티엠",
          period: "2025.01 - 2025.06",
          role: "서비스 운영 매니저 (개발자 10여 명 팀)",
          highlights: [
            "GSSHOP 홈쇼핑 주문 도메인 상시 운영, CS 처리, 기존 버그 수정",
            "반복 CS·오류 원인 분석으로 데일리 버그 발생 건수 50% 감소 (대표 사례: 카드 할인 적용 후 일부 취소/반품 시 결제 금액 오류)",
          ],
          stack: ["Java", "Spring Boot", "MySQL"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "gsitm-salesone-restructure",
          name: "GS Retail 세일즈원 구조개선 (현대화 프로젝트)",
          company: "주식회사지에스아이티엠",
          period: "2024.01 - 2024.12",
          role: "프로그램개발 매니저 · 파트 리더",
          summary: "마이플랫폼 기반 MD·정산 백오피스(세일즈원)를 React로 재구축",
          highlights: [
            "프론트 개발자 7명 중 파트 리더로 WBS 작성·일정 관리·화면 배분 담당",
            "정산 관련 화면 개발과 백엔드 모놀리식 API의 MSA 분리 작업 병행",
            "API 데이터 누락 문제를 직접 디버깅해 원인을 찾아 해결",
          ],
          stack: ["React", "MSA"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "gsitm-order-restructure",
          name: "GS Retail 주문 구조개선",
          company: "주식회사지에스아이티엠",
          period: "2023.03 - 2023.12",
          role: "프로그램개발 매니저",
          summary: "GS Retail 백엔드 주문 파트 MSA 전환 프로젝트(Exodus)",
          highlights: [
            "GS Retail 백엔드 주문 API를 분리하는 MSA 전환 프로젝트(Exodus) 담당, Spring Boot(Java 17) 기반 신주문 시스템으로 이관",
            "모놀리식 ESB 방식을 쓰던 클라이언트 담당자들과 협의해 API 방식으로 전환",
          ],
          stack: ["Java", "Spring Boot", "MSA"],
          links: { demo: "#", repo: "#" },
        },
      ],
    },
    {
      id: "mtel",
      company: "(주)엠텔레텍",
      period: "2018.12 - 2023.03 (4년 4개월)",
      employmentType: "정규직",
      department: "시스템운영",
      position: "선임",
      projects: [
        {
          id: "mtel-unmanned-store-ops",
          name: "무인매장 셀프 상담 가입 앱 운영",
          company: "(주)엠텔레텍",
          period: "2021.04 - 2023.01",
          role: "운영 선임",
          highlights: [
            "본인이 구축한 무인매장 시스템을 직접 운영, 매일 모니터링과 신규 기능 테스트 후 배포하며 장애 0건 유지",
            "고객사의 신규 기능·수정 요청을 파악해 구현 및 배포",
          ],
          stack: ["Java", "JSP", "Oracle"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "mtel-unmanned-store-build",
          name: "무인매장 시스템 구축 프로젝트",
          company: "(주)엠텔레텍",
          period: "2020.10 - 2021.04",
          role: "프로그램개발 (개발자 2명 중 상담 파트 담당)",
          highlights: [
            "코로나19로 늘어난 비대면 수요에 맞춰 기존 전자청약의 모바일 가입 기능을 확장해 무인매장 시스템 구축",
            "단말기·요금제 기준 실시간 요금 계산 기능과 셀프 개통 프로세스 설계·개발",
            "고객 유형별 요금제 추천 큐레이션 로직 설계·개발",
          ],
          stack: ["Java", "Spring MVC", "JSP"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "mtel-lguplus-e-application",
          name: "U+ 전자신청서 판매점 전자 청약",
          company: "(주)엠텔레텍",
          period: "2020.05 - 2020.10",
          role: "프로그램개발 (개발자 5명 중 담당)",
          highlights: [
            "지류 서식으로 개통하던 판매점 업무를 전산화, JSP+jQuery 기반 로직을 WebSquare + Wafful로 재설계",
            "판매점 직원 앱 사용률 10% → 90% 개선, 비동기 통신 적용으로 페이지 로드 속도 400ms → 200ms 개선",
          ],
          stack: ["JSP", "jQuery", "WebSquare"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "mtel-lguplus-next-gen-app",
          name: "U+ 대리점 전자 청약 차세대 앱 구축 프로젝트",
          company: "(주)엠텔레텍",
          period: "2019.08 - 2020.05",
          role: "프로그램개발",
          highlights: [
            "기존 JSP 페이지를 WebSquare로 전환하고 Devon → Wafful Framework 전환, ESB → APIM 연동",
            "단말기·요금제·공지사항 관리자 페이지 구축, LG U+ 차세대 프로젝트 첫 사례로 선도 개발",
          ],
          stack: ["Java", "Spring MVC", "JSP", "Linux"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "mtel-seongnam-hospital",
          name: "성남시의료원 병원 홈페이지 개발",
          company: "(주)엠텔레텍",
          period: "2018.12 - 2019.08",
          role: "프로그램개발",
          highlights: [
            "EMR 병원 데이터를 API로 연동해 진료 예약·의료진 정보 메뉴 개발",
            "Naver 소셜 로그인, Kakao Map 연동 및 병원 커뮤니티 게시판 구축",
          ],
          stack: ["Java", "JSP", "HTML5", "JavaScript"],
          links: { demo: "#", repo: "#" },
        },
      ],
    },
  ],
  education: [
    {
      id: "bucheon-univ",
      school: "부천대학교",
      period: "2013.03 - 2019.02",
      status: "졸업",
      major: "컴퓨터소프트웨어학과",
    },
  ],
  credentials: [
    {
      id: "cert-information-processing-engineer",
      title: "정보처리기사",
      category: "자격증",
      date: "2026.09",
      issuer: "국가기술자격증",
    },
    {
      id: "edu-spring-core-principles",
      title: "스프링 핵심 원리 - 기본편",
      category: "교육",
      date: "2023.03",
      issuer: "겟 스마트",
    },
    {
      id: "edu-react-for-beginners",
      title: "누구든지 하는 리액트: 초심자를 위한 React 핵심 강좌",
      category: "교육",
      date: "2024.01",
      issuer: "겟 스마트",
    },
    {
      id: "edu-the-java-8",
      title: "더 자바, Java 8",
      category: "교육",
      date: "2024.03",
      issuer: "겟 스마트",
    },
  ],
  aiUsage: [
    {
      id: "ai-domino-admin",
      description: "Claude Code, Antigravity 등 AI 코딩 도구로 도미노피자 어드민 콘솔을 설계부터 구현까지 진행",
    },
    {
      id: "ai-figma-to-react",
      description: "MCP 서버와 연동한 Amazon Q로 Figma 디자인을 실제 React 컴포넌트로 변환",
    },
    {
      id: "ai-side-project",
      description: "개인 사이드 프로젝트에는 Codex, Antigravity를 구독해 활용 중",
    },
  ],
};
