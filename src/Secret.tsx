import type { ReactNode } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Badge from "./components/Badge";
import secretPhoto from "./assets/secret-photo.jpg";

const PROFILE = {
  name: "송성현",
  birthDate: "1994.08.25",
  instagram: "song.stagram_",
  mbti: "ISTP",
  job: "프로그래머 (개발자)",
  likes: ["LOL", "볼링", "T1"],
};

/** 비공개 소개 페이지. 어디에도 링크되어 있지 않고 /secret 경로로만 접근 가능하다. */
export default function Secret() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-md px-6 py-14 sm:max-w-lg">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            Secret / Introduction
          </p>
          <ThemeToggle />
        </div>

        <img
          src={secretPhoto}
          alt={`${PROFILE.name} 사진`}
          className="mt-6 aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-zinc-200 dark:ring-zinc-800"
        />

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          안녕하세요, {PROFILE.name}입니다
        </h1>
        <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          이 페이지를 보고 계시다면, 아마 저에 대해 조금 더 궁금하신 거겠죠 :)
        </p>

        <dl className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          <Row label="생년월일" value={PROFILE.birthDate} />
          <Row
            label="인스타그램"
            value={
              <a
                href={`https://instagram.com/${PROFILE.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-100 dark:decoration-zinc-700"
              >
                @{PROFILE.instagram}
              </a>
            }
          />
          <Row label="MBTI" value={PROFILE.mbti} />
          <Row label="직업" value={PROFILE.job} />
          <Row
            label="좋아하는 것"
            value={
              <div className="flex flex-wrap justify-end gap-1.5">
                {PROFILE.likes.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            }
          />
        </dl>

        <p className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-500">
          🤫 이 페이지는 어디에도 공개되어 있지 않아요
        </p>
      </main>
    </div>
  );
}

function Row({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <dt className="shrink-0 font-mono text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
        {label}
      </dt>
      <dd className="text-right text-[15px] font-medium text-zinc-900 dark:text-zinc-100">
        {value}
      </dd>
    </div>
  );
}
