import SectionHeading from "./SectionHeading";
import Badge from "./Badge";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section className="print-avoid-break border-b border-zinc-200 py-10 dark:border-zinc-800">
      <SectionHeading eyebrow="Skills" title="기술 스택" aside={`${skills.length}개`} />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
}
