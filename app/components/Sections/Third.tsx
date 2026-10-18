import { translations } from "@/lib/translater";
import type { Language } from "@/types/Language";
import { FadeIn } from "../FadeAnim";
import ExperienceCard from "./components/ExperienceCard";

type Props = {
  lang: Language
}

export default function Third({ lang }: Props) {

  const experiences = [
    translations[lang].experience1,
    translations[lang].experience2,
    translations[lang].experience3,
  ]

  return (
    <FadeIn>
      <section
        id="experience"
        className="mx-auto max-w-7xl py-16"
      >
        <div className="font-mono text-sm leading-7">
          <pre>
            <code>
              <span className="text-pink-500">new</span>{" "}
              <span className="text-[var(--foreground)]">Section</span>
              <span className="text-[var(--foreground)]">(</span>
              <span className="text-pink-500">2</span>
              <span className="text-[var(--foreground)]">, </span>
              <span className="text-orange-400">
                &quot;{translations[lang].experienceTitle}&quot;
              </span>
              <span className="text-[var(--foreground)]">)</span>
            </code>
          </pre>
        </div>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          {translations[lang].experienceTitle}
        </h2>

        <div className="mt-8 overflow-hidden rounded-xl border border-[var(--skill-border)] bg-[var(--skill-bg)]">
          <div className="flex items-center justify-between border-b border-[var(--skill-border)] px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime-400/70" />
            </div>

            <span className="font-mono text-xs text-[var(--foreground)]/40">
              experience.ts
            </span>
          </div>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
              title={translations[lang].experienceTitle}
            />
          ))}
        </div>
      </section>
    </FadeIn>
  );
}