import type { Experience as ExperienceType } from "../types/resume";
import SectionHeading from "./SectionHeading";
import Badge from "./Badge";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="border-b border-zinc-200 py-10 dark:border-zinc-800">
      <SectionHeading eyebrow="Experience" title="경력" aside={`${experiences.length}개 회사`} />

      <div className="space-y-12">
        {experiences.map((exp) => (
          <article key={exp.id} className="print-avoid-break">
            {/* 회사 헤더 */}
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[15px] font-semibold text-zinc-900 dark:text-zinc-100">
                {exp.company}
                {exp.current && (
                  <span className="ml-2 align-middle">
                    <Badge tone="accent">현재</Badge>
                  </span>
                )}
              </h3>
              <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {exp.period}
              </p>
            </div>
            <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
              {exp.employmentType} · {exp.department} · {exp.position}
            </p>

            {/* 세부 프로젝트 목록 */}
            <ol className="mt-5 space-y-6 border-l border-zinc-200 pl-5 dark:border-zinc-800">
              {exp.projects.map((project) => (
                <li key={project.id} className="relative">
                  <span className="absolute -left-[23px] top-1.5 h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {project.name}
                    </h4>
                    <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                      {project.period}
                    </p>
                  </div>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {project.role}
                  </p>

                  {project.summary && (
                    <p className="mt-2 text-[13px] text-zinc-600 dark:text-zinc-400">
                      {project.summary}
                    </p>
                  )}

                  <ul className="mt-2.5 space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-[13.5px] leading-relaxed text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {project.stack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.stack.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
