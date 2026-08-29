import type { ResumeData } from "../types/resume";

/**
 * 송성현 이력서 데이터
 * 출처: 송성현.pdf (개인 이력서)
 * 링크(github/demo/repo/linkedin/blog)는 PDF에 명시되지 않아 "#" 플레이스홀더로 두었다.
 * 추후 실제 URL이 확보되면 해당 값만 교체하면 된다.
 */
export const resumeData: ResumeData = {
  name: "송성현",
  role: "프리랜서 풀스택 개발자",
  tagline:
    "7년의 견고한 경력, MSA 프로젝트로 증명된 기술력의 프리랜서 풀스택 개발자입니다.",
  about: [
    "대기업 협력사에서 시작해 풀스택 역량을 쌓고 시스템 안정성을 극대화하며 고객과의 신뢰를 다져왔습니다. 특히 GSITM 재직 당시 GS Retail 홈쇼핑 주문 파트의 MSA 전환 프로젝트에서 핵심적인 역할을 담당했으며, 그 과정에서 실력을 인정받아 이후 메인 주문 시스템의 운영까지 전담하였습니다.",
    "Java 백엔드의 깊이 있는 이해와 React를 활용한 현대적인 프론트엔드 개발 능력을 겸비하여, 현재 프리랜서로서 어떤 환경에서도 즉시 전력감으로 활약하고 있습니다. 복잡한 비즈니스 로직을 빠르게 파악하고, 안정적인 풀스택 솔루션을 제시하겠습니다.",
  ],
  totalExperience: "7년 7개월",
  contact: {
    email: "songshyun1@daum.net",
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
      period: "2025.07 - 2026.06 (1년)",
      employmentType: "프리랜서",
      department: "프로그램개발",
      position: "과장",
      current: true,
      projects: [
        {
          id: "insoft-lguplus-integrated-signup",
          name: "LG U+ 통합 가입 상담 프로젝트",
          company: "아이엔소프트",
          period: "2025.07 - 2026.06",
          role: "프로그램개발 과장",
          highlights: [
            "과거 LG U+에서 as-is를 경험했던 경력을 바탕으로 프로젝트를 진행하였음",
            "통합가입상담 시스템 개발 및 성공적인 오픈",
            "React를 사용한 Front 전담 개발",
          ],
          stack: ["React", "TypeScript"],
          ongoing: true,
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
          name: "GS retail 주문 서비스 운영",
          company: "주식회사지에스아이티엠",
          period: "2025.01 - 2025.06",
          role: "서비스운영 매니저",
          highlights: [
            "주문 상시운영 업무",
            "시스템 개선 개발 참여 (Dev)",
            "안정적인 시스템 운영 및 GS ALL 포인트 프로젝트 오픈",
          ],
          stack: ["Java", "Spring Boot", "MySQL"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "gsitm-salesone-restructure",
          name: "GS Retail 세일즈원 구조개선",
          company: "주식회사지에스아이티엠",
          period: "2024.01 - 2024.12",
          role: "프로그램개발 매니저",
          highlights: [
            "세일즈원 현대화 프로젝트 주문/결제/정산 React 개발 및 파트 리더",
            "파트리더로서 프로젝트 마감일 지연 없이 성공적으로 오픈",
          ],
          stack: ["React", "TypeScript", "Java", "Spring Boot"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "gsitm-order-restructure",
          name: "GS Retail 주문 구조개선",
          company: "주식회사지에스아이티엠",
          period: "2023.03 - 2023.12",
          role: "프로그램개발 매니저",
          summary: "홈쇼핑 주문 파트의 MSA 전환 프로젝트",
          highlights: [
            "세일즈원 현대화 프로젝트 주문 파트 구조개선 프로젝트 리더, 일정 관리 및 소통, 백엔드 개발 담당",
            "파트리더로서 타 도메인 개발자들과 소통하며 프로젝트를 성공적으로 오픈",
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
            "무인매장 오픈 후 시스템 유지보수",
            "운영 기간 동안 장애 0건 달성",
            "일일점검 모니터링",
          ],
          stack: ["Java", "JSP", "Oracle"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "mtel-unmanned-store-build",
          name: "무인매장 시스템 구축 프로젝트",
          company: "(주)엠텔레텍",
          period: "2020.10 - 2021.04",
          role: "프로그램개발",
          highlights: [
            "셀프 상담/가입 앱 개발",
            "상담 정보 API 개발",
            "큐레이션 설계 및 개발",
          ],
          stack: ["Java", "Spring MVC", "JSP"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "mtel-lguplus-e-application",
          name: "U+ 전자신청서 판매점 전자 청약",
          company: "(주)엠텔레텍",
          period: "2020.05 - 2020.10",
          role: "프로그램개발",
          highlights: [
            "기존 앱 분석 및 설계",
            "LG U+ API 연동 개발",
            "앱 기능 및 속도 개선",
          ],
          stack: ["Java", "JavaScript", "jQuery"],
          links: { demo: "#", repo: "#" },
        },
        {
          id: "mtel-lguplus-next-gen-app",
          name: "U+ 대리점 전자 청약 차세대 앱 구축 프로젝트",
          company: "(주)엠텔레텍",
          period: "2019.08 - 2020.05",
          role: "프로그램개발",
          highlights: [
            "LG U+ 스마트가입 앱 개발",
            "관리자 홈페이지 구축",
            "배포환경을 위한 서버 구축",
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
            "성남시의료원 병원 웹 페이지 개발",
            "Naver, Kakao Open API 연동 개발",
            "아파치 톰캣 서버 튜닝",
          ],
          stack: ["Java", "JSP", "HTML5", "JavaScript"],
          links: { demo: "#", repo: "#" },
        },
      ],
    },
  ],
  // 대표 프로젝트: 이력서 상 임팩트가 큰 항목(MSA 전환, 파트 리딩, 장애 0건 운영)을 선별
  featuredProjects: [],
  skills: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "React",
    "TypeScript",
    "JavaScript",
    "jQuery",
    "HTML5",
    "MySQL",
    "Oracle",
    "Git",
    "SVN",
    "JSP",
    "Linux",
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
      title: "정보처리기사 (필기)",
      category: "자격증",
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
};

// featuredProjects: 각 회사에서 임팩트가 가장 큰 프로젝트 1건씩 선별해 채운다.
resumeData.featuredProjects = [
  resumeData.experiences[0].projects[0], // LG U+ 통합 가입 상담 프로젝트 (현재)
  resumeData.experiences[1].projects[2], // GS Retail 주문 구조개선 (MSA 전환)
  resumeData.experiences[1].projects[1], // GS Retail 세일즈원 구조개선
  resumeData.experiences[2].projects[0], // 무인매장 셀프 상담 가입 앱 운영 (장애 0건)
];
