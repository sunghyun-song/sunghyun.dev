import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../types/resume";
import SectionHeading from "./SectionHeading";
import Badge from "./Badge";

interface ProjectsProps {
  projects: Project[];
}

/** 대표 프로젝트 하이라이트. 경력 섹션의 세부 항목 중 임팩트가 큰 것을 선별해 카드 형태로 노출한다. */
export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="border-b border-zinc-200 py-10 dark:border-zinc-800">
      <SectionHeading eyebrow="Projects" title="대표 프로젝트" aside={`${projects.length}건`} />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-zinc-200 bg-zinc-200 sm:grid-cols-2 dark:border-zinc-800 dark:bg-zinc-800">
        {projects.map((project) => (
          <article
            key={project.id}
            className="print-avoid-break flex flex-col bg-zinc-50 p-5 dark:bg-zinc-950"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
                  {project.company} · {project.period}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-1 pt-0.5">
                <a
                  href={project.links.repo || "#"}
                  aria-label={`${project.name} 저장소 (링크 미등록)`}
                  className="inline-flex h-6 w-6 items-center justify-center rounded text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
                >
                  <Github size={14} strokeWidth={1.75} />
                </a>
                <a
                  href={project.links.demo || "#"}
                  aria-label={`${project.name} 데모 (링크 미등록)`}
                  className="inline-flex h-6 w-6 items-center justify-center rounded text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
                >
                  <ArrowUpRight size={14} strokeWidth={1.75} />
                </a>
              </div>
            </div>

            {project.summary && (
              <p className="mt-2 text-[13px] text-zinc-600 dark:text-zinc-400">
                {project.summary}
              </p>
            )}

            <ul className="mt-3 space-y-1.5">
              {project.highlights.slice(0, 3).map((h, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-[13px] leading-relaxed text-zinc-700 dark:text-zinc-300"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {project.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
