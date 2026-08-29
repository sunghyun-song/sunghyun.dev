import { Mail, Phone, MapPin } from "lucide-react";
import type { ResumeData } from "../types/resume";
import ThemeToggle from "./ThemeToggle";
import profilePhoto from "../assets/profile.jpg";

interface HeaderProps {
  data: Pick<ResumeData, "name" | "role" | "tagline" | "contact">;
}

export default function Header({ data }: HeaderProps) {
  const { name, role, tagline, contact } = data;

  return (
    <header className="print-avoid-break border-b border-zinc-200 pb-8 pt-14 dark:border-zinc-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            Portfolio / Résumé
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {name}
          </h1>
          <p className="mt-1.5 text-base text-zinc-600 dark:text-zinc-400">{role}</p>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-3">
          <img
            src={profilePhoto}
            alt={`${name} 프로필 사진`}
            className="h-28 w-28 rounded-full object-cover ring-1 ring-zinc-200 sm:h-40 sm:w-40 dark:ring-zinc-800"
          />
          <ThemeToggle />
        </div>
      </div>

      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
        “{tagline}”
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-zinc-500 dark:text-zinc-400">
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <Mail size={13} strokeWidth={1.75} />
          {contact.email}
        </a>
        {contact.phone && (
          <span className="inline-flex items-center gap-1.5">
            <Phone size={13} strokeWidth={1.75} />
            {contact.phone}
          </span>
        )}
        {contact.location && (
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} strokeWidth={1.75} />
            {contact.location}
          </span>
        )}
      </div>
    </header>
  );
}
