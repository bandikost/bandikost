import { translations } from "@/lib/translater";
import { Language } from "@/types/Language";
import { FadeIn } from "../FadeAnim";
import { skills } from "@/lib/skills";
import Image from "next/image";


type Props = {
  lang: Language
}

export default function Four({lang}: Props) {


    return (
       <FadeIn>
     <section id="skills" className="relative mx-auto max-w-7xl py-16 overflow-hidden">

  <div className="pointer-events-none absolute inset-0 -z-10 opacity-20
    [background-image:linear-gradient(var(--skill-border)_1px,transparent_1px),linear-gradient(90deg,var(--skill-border)_1px,transparent_1px)]
    [background-size:80px_80px]"
  />

  <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
  
    <div className="flex flex-col justify-between gap-10">
      <div>
        <span className="font-mono text-sm tracking-widest text-lime-400">
           <span className="font-mono text-sm tracking-widest">
  <pre>
    <code>
      <span className="text-pink-500">new</span> {""}
      <span className="text-[var(--foreground)]">Section</span>{""}
      <span className="text-[var(--foreground)]">{"("}</span>{""}
      <span className="text-pink-500">3</span>{""}
      <span className="text-[var(--foreground)]">,</span>
       <span className="text-[var(--foreground)]">{`"`}</span>{""}
      <span className="text-orange-400">{translations[lang].skillsTitle.section}</span>{""}
      <span className="text-[var(--foreground)]">{`"`}</span>{""}
      <span className="text-[var(--foreground)]">{")"}</span>{""}
     
    </code>
  </pre>
</span>

      <h2 className="mt-4 text-3xl font-semibold">
      {translations[lang].skillsTitle.section}
    </h2>
        </span>

        <h2 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
          {translations[lang].skillsTitle.tech}
          <span className="mt-1 block text-transparent [-webkit-text-stroke:1px_var(--foreground)] opacity-50">
            & {translations[lang].skillsTitle.beyond}
          </span>
        </h2>

        
      </div>

      <div className="border-l border-lime-400 pl-4">
        <span className="font-mono text-sm text-lime-400">01 / FRONTEND</span>
        <p className="mt-2 opacity-70">
         {translations[lang].skillsTitle.learn}
        </p>
      </div>
    </div>


    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {skills.map((skill, index) => (
        <div
          key={skill.id}
          className="group relative flex min-h-40 flex-col justify-between
            overflow-hidden rounded-2xl border p-5 transition-all duration-300
            hover:-translate-y-1 hover:border-lime-400/60"
          style={{
            borderColor: "var(--skill-border)",
            backgroundColor: "var(--skill-bg)",
          }}
        >
          <span className="font-mono text-xs opacity-40">
            0{index + 1}
          </span>

          <div className="relative flex flex-1 items-center justify-center py-4">
            <div className="absolute h-16 w-16 rounded-full bg-lime-400/0
              blur-2xl transition-all group-hover:bg-lime-400/15"
            />

            <Image
              src={skill.image}
              alt={skill.name}
              width={56}
              height={56}
              className="relative h-12 w-12 object-contain transition-transform
                duration-300 group-hover:scale-110"
            />
          </div>

          <h3 className="text-sm font-medium tracking-wide">
            {skill.name}
          </h3>

          <div className="absolute bottom-0 left-0 h-px w-0 bg-lime-400
            transition-all duration-300 group-hover:w-full"
          />
        </div>
      ))}
    </div>
  </div>
</section>
</FadeIn>

    )
}