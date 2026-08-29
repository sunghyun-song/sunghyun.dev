interface BadgeProps {
  children: React.ReactNode;
  tone?: "neutral" | "accent";
}

/** 스택/태그용 모노스페이스 뱃지. tone="accent"는 진행중 표시 등 절제된 강조에만 사용 */
export default function Badge({ children, tone = "neutral" }: BadgeProps) {
  if (tone === "accent") {
    return (
      <span className="inline-flex items-center rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[11px] text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded border border-zinc-200 px-2 py-0.5 font-mono text-[11px] text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
      {children}
    </span>
  );
}
