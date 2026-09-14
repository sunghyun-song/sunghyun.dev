import { Sparkles } from "lucide-react";
import type { AiUsageItem } from "../types/resume";
import SectionHeading from "./SectionHeading";

interface AiUsageProps {
  aiUsage: AiUsageItem[];
}

/** AI 코딩 도구(Claude, Amazon Q, Codex, Antigravity 등) 활용 경험 목록 */
export default function AiUsage({ aiUsage }: AiUsageProps) {
  return (
    <section className="print-avoid-break border-b border-zinc-200 py-10 dark:border-zinc-800">
      <SectionHeading eyebrow="AI Usage" title="AI 활용 경험" aside={`${aiUsage.length}건`} />
      <ul className="space-y-3">
        {aiUsage.map((item) => (
          <li key={item.id} className="flex items-start gap-2.5">
            <span className="mt-0.5 text-zinc-400 dark:text-zinc-500">
              <Sparkles size={14} strokeWidth={1.75} />
            </span>
            <p className="text-[13.5px] leading-relaxed text-zinc-700 dark:text-zinc-300">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
