import type { Education as EducationType } from "../types/resume";
import SectionHeading from "./SectionHeading";

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section className="print-avoid-break border-b border-zinc-200 py-10 dark:border-zinc-800">
      <SectionHeading eyebrow="Education" title="학력" />
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{edu.school}</h3>
              <p className="mt-0.5 text-[13px] text-zinc-500 dark:text-zinc-400">
                {edu.major} · {edu.status}
              </p>
            </div>
            <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
