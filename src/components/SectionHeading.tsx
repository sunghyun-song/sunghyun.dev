interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  aside?: string;
}

/** 에디토리얼 문서 느낌의 섹션 타이틀: 영문 모노 라벨 + 한글 제목 + 우측 보조 텍스트 */
export default function SectionHeading({ eyebrow, title, aside }: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-end justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
      </div>
      {aside && (
        <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{aside}</p>
      )}
    </div>
  );
}
