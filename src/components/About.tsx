import type { ResumeData } from "../types/resume";
import SectionHeading from "./SectionHeading";

interface AboutProps {
  about: ResumeData["about"];
  totalExperience: string;
}

export default function About({ about, totalExperience }: AboutProps) {
  return (
    <section className="print-avoid-break border-b border-zinc-200 py-10 dark:border-zinc-800">
      <SectionHeading eyebrow="About" title="소개" aside={`경력 ${totalExperience}`} />
      <div className="space-y-4">
        {about.map((paragraph, i) => (
          <p
            key={i}
            className="text-[15px] leading-[1.8] text-zinc-700 dark:text-zinc-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
