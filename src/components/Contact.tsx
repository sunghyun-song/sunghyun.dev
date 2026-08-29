import { Mail, Phone } from "lucide-react";
import type { ContactInfo } from "../types/resume";
import SectionHeading from "./SectionHeading";

interface ContactProps {
  contact: ContactInfo;
  name: string;
}

export default function Contact({ contact, name }: ContactProps) {
  return (
    <section id="contact" className="print-avoid-break py-10">
      <SectionHeading eyebrow="Contact" title="연락처" />

      <p className="max-w-md text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
        새로운 프로젝트나 협업 제안은 언제든 환영합니다. 아래 이메일 또는 전화번호로 연락해
        주세요.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          <Mail size={15} strokeWidth={1.75} />
          이메일 보내기
        </a>
        {contact.phone && (
          <span className="inline-flex items-center gap-2 font-mono text-sm text-zinc-500 dark:text-zinc-400">
            <Phone size={14} strokeWidth={1.75} />
            {contact.phone}
          </span>
        )}
      </div>

      <p className="mt-8 font-mono text-xs text-zinc-400 dark:text-zinc-500">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </p>
    </section>
  );
}
