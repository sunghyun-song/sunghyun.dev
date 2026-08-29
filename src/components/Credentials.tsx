import { Award, GraduationCap } from "lucide-react";
import type { Credential } from "../types/resume";
import SectionHeading from "./SectionHeading";

interface CredentialsProps {
  credentials: Credential[];
}

/** 자격증/교육 이수/수상 목록 */
export default function Credentials({ credentials }: CredentialsProps) {
  return (
    <section className="print-avoid-break border-b border-zinc-200 py-10 dark:border-zinc-800">
      <SectionHeading eyebrow="Credentials" title="자격증 · 교육" aside={`${credentials.length}건`} />
      <ul className="space-y-3">
        {credentials.map((c) => (
          <li key={c.id} className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-zinc-400 dark:text-zinc-500">
                {c.category === "자격증" ? (
                  <Award size={14} strokeWidth={1.75} />
                ) : (
                  <GraduationCap size={14} strokeWidth={1.75} />
                )}
              </span>
              <div>
                <p className="text-sm text-zinc-800 dark:text-zinc-200">{c.title}</p>
                {c.issuer && (
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">{c.issuer}</p>
                )}
              </div>
            </div>
            {c.date && (
              <p className="shrink-0 font-mono text-xs text-zinc-400 dark:text-zinc-500">{c.date}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
