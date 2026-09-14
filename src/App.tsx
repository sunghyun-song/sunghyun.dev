import { resumeData } from "./data/resume";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import AiUsage from "./components/AiUsage";
import Education from "./components/Education";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="mx-auto max-w-2xl px-6 sm:max-w-3xl sm:px-8">
        <Header
          data={{
            name: resumeData.name,
            role: resumeData.role,
            tagline: resumeData.tagline,
            contact: resumeData.contact,
          }}
        />
        <About about={resumeData.about} totalExperience={resumeData.totalExperience} />
        <Experience experiences={resumeData.experiences} />
        <Skills skills={resumeData.skills} />
        <AiUsage aiUsage={resumeData.aiUsage} />
        <Education education={resumeData.education} />
        <Credentials credentials={resumeData.credentials} />
        <Contact contact={resumeData.contact} name={resumeData.name} />
      </main>
    </div>
  );
}
