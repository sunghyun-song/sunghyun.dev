/**
 * 이력서 데이터 타입 정의
 * src/data/resume.ts 에서 이 타입들을 사용해 실제 데이터를 채운다.
 */

/** 연락처 정보. PDF에 없는 채널은 undefined 로 두거나 "#" 플레이스홀더를 사용한다. */
export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  /** 깃허브 프로필 URL — PDF에 없어 플레이스홀더("#")로 비워둠. 추후 실제 주소로 교체. */
  github?: string;
  /** 링크드인 프로필 URL — PDF에 없어 플레이스홀더("#")로 비워둠. */
  linkedin?: string;
  /** 개인 블로그/기술 블로그 URL — PDF에 없어 플레이스홀더("#")로 비워둠. */
  blog?: string;
}

/** 프로젝트/업무 관련 외부 링크. PDF에 실제 링크가 없으므로 전부 "#" 플레이스홀더로 시작한다. */
export interface ProjectLinks {
  /** 배포/데모 URL */
  demo?: string;
  /** 소스코드 저장소 URL */
  repo?: string;
}

/** 하나의 프로젝트(또는 경력 내 세부 업무 단위) */
export interface Project {
  id: string;
  /** 프로젝트/업무명 */
  name: string;
  /** 소속 회사명 (경력 카드와 매칭용) */
  company: string;
  /** 기간 문자열, 예: "2025.07 - 2026.06" */
  period: string;
  /** 해당 프로젝트에서의 직책/역할 라벨, 예: "프로그램개발 과장" */
  role: string;
  /** 프로젝트 한 줄 설명 (선택) */
  summary?: string;
  /** 성과/역할 불릿 포인트 목록 */
  highlights: string[];
  /** 사용 기술 스택 */
  stack: string[];
  /** 진행 중 여부 */
  ongoing?: boolean;
  /** 외부 링크 (PDF에 없는 값은 "#" 플레이스홀더) */
  links: ProjectLinks;
}

/** 하나의 회사(직장) 단위 경력 블록 */
export interface Experience {
  id: string;
  /** 회사명 */
  company: string;
  /** 재직 기간 문자열, 예: "2023.03 - 2025.07 (2년 5개월)" */
  period: string;
  /** 고용 형태, 예: "정규직" | "프리랜서" */
  employmentType: string;
  /** 소속 부서/직무, 예: "프로그램 개발 운영" */
  department: string;
  /** 최종 직급/직책, 예: "매니저" */
  position: string;
  /** 현재 재직 중 여부 */
  current?: boolean;
  /** 해당 회사 재직 중 수행한 세부 프로젝트 목록 */
  projects: Project[];
}

/** 학력 사항 */
export interface Education {
  id: string;
  school: string;
  /** 재학 기간, 예: "2013.03 - 2019.02" */
  period: string;
  /** 졸업 상태, 예: "졸업" */
  status: string;
  major: string;
}

/** 자격증/교육 이수/수상 항목 */
export interface Credential {
  id: string;
  title: string;
  /** 카테고리, 예: "자격증" | "교육" */
  category: string;
  /** 취득/이수 시점, 예: "2024.03" (없으면 undefined) */
  date?: string;
  /** 발급/주관 기관 */
  issuer?: string;
}

/** AI 도구 활용 경험 한 항목 (도구명 + 실제 활용 내용) */
export interface AiUsageItem {
  id: string;
  description: string;
}

/** 이력서 전체 데이터 구조 */
export interface ResumeData {
  name: string;
  /** 직무 타이틀, 예: "프리랜서 풀스택 개발자" */
  role: string;
  /** 이력서 상단 한 줄 소개/캐치프레이즈 */
  tagline: string;
  /** 자기소개 본문 (문단 단위 배열) */
  about: string[];
  /** 총 경력 기간 문자열, 예: "7년 7개월" */
  totalExperience: string;
  contact: ContactInfo;
  experiences: Experience[];
  education: Education[];
  credentials: Credential[];
  /** AI 코딩 도구 활용 경험 목록 */
  aiUsage: AiUsageItem[];
}
