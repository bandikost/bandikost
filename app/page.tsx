import { cookies } from "next/headers";

import { skills } from "@/lib/skills";
import { translations } from "@/lib/translater";

import { Language } from "@/types/Language";

import Image from "next/image";
import { FadeIn } from "./components/FadeAnim";

import GH from "../public/skills/GH.png"
import Gmail from "../public/skills/Gmail.png"
import LinkedIn from "../public/skills/LinkedIn.png"

export async function generateMetadata() { 
  const cookieStore = await cookies() 
  const lang = (cookieStore.get("lang")?.value ?? "en") as Language 

  return { 
    title: `${translations[lang].title} | bandikost`
  } 
}


export default async function Home() {
  const cookieStore = await cookies()

  const lang = (cookieStore.get("lang")?.value ?? "en") as Language

  return (
    <main className="min-h-screen ">

      <div className="site-grid">
 
  <section className="flex flex-col items-center justify-center gap-6 px-4 pt-32 pb-20 text-center">
    <span className="font-mono text-sm tracking-widest text-lime-500">
      // FRONTEND DEVELOPER
    </span>


    <div className="mt-3 flex flex-wrap justify-center gap-3">
      <a href="https://github.com/bandikost" target="_blank" rel="noreferrer" className="rounded-xl border border-lime-400/50 bg-lime-400 px-5 py-3 font-medium text-black transition hover:bg-lime-300 flex items-center">
        <Image src={GH} alt="Изображение с ссылкой на профиль github" width={56} height={56} className="relative h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"/> GitHub ↗
      </a>
      <a href="mailto:bandikost@gmail.com" target="_blank" rel="noreferrer" className="rounded-xl border px-5 py-3 transition hover:border-lime-400 font-medium transition hover:bg-lime-300 flex items-center">
        <Image src={Gmail} alt="Изображение с ссылкой на профиль github" width={56} height={56} className="relative h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"/> Gmail ↗
      </a>
      <a href="https://www.linkedin.com/in/roman-cherdantsev-125838414/" target="_blank" rel="noreferrer" className="rounded-xl border px-5 py-3 transition hover:border-lime-400 font-medium transition hover:bg-lime-300 flex items-center">
        <Image src={LinkedIn} alt="Изображение с ссылкой на профиль github" width={56} height={56} className="relative h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"/> LinkedIn ↗
      </a>

    </div>
  </section>

  <section className="mx-auto max-w-5xl py-16">
    <span className="font-mono text-sm tracking-widest text-lime-500">
      <pre>// <code>{`const about = { id: 1, name: ${translations[lang].aboutme} }`}</code>
</pre>
    </span>

    <h2 className="mt-4 text-3xl font-semibold">
      {translations[lang].aboutme}
    </h2>

    <div className="mt-6 max-w-6xl text-lg leading-8 opacity-70">
      <p>{translations[lang].about.text}</p>
    </div>
  </section>


<FadeIn>
      <section className="mx-auto max-w-5xl py-16">
        <h2 className="text-2xl !font-base mb-6 text-center sm:text-left">
          {translations[lang].experienceTitle}
        </h2>

        <div className="rounded-2xl border border-gray-200 shadow-md bg-white/70 backdrop-blur p-6 hover:-translate-y-1 transition">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <h3 className="!font-base">
              {translations[lang].experience1.company}
            </h3>
            <span className="!font-base text-md text-zinc-500 my-3 sm:mt-0">
              {translations[lang].experience1.period}
            </span>
          </div>

          <p className="text-md text-zinc-500 mt-1 !font-base">
            {translations[lang].experience1.role}
          </p>

          <ul className="mt-4 text-md text-zinc-600 space-y-1">
            {translations[lang].experience1.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      </FadeIn>
      
<FadeIn>
     <section className="relative mx-auto max-w-5xl py-16 overflow-hidden">

  <div className="pointer-events-none absolute inset-0 -z-10 opacity-20
    [background-image:linear-gradient(var(--skill-border)_1px,transparent_1px),linear-gradient(90deg,var(--skill-border)_1px,transparent_1px)]
    [background-size:80px_80px]"
  />

  <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
  
    <div className="flex flex-col justify-between gap-10">
      <div>
        <span className="font-mono text-sm tracking-widest text-lime-400">
           <span className="font-mono text-sm tracking-widest text-lime-500">
      <pre>// <code>{`const skills = { id: 3, name: ${translations[lang].skillsTitle.section} }`}</code>
</pre>
    </span>
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
    <FadeIn>
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl !font-base text-center sm:text-left mb-6">
          {translations[lang].projectsTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 hover:-translate-y-1 transition shadow-md">
            <h3 className="text-lg !font-base">
              {translations[lang].project1.title}
            </h3>

            <p className="text-sm text-zinc-500 mt-1 ">
              {translations[lang].project1.desc}
            </p>

            <div className="flex gap-2 mt-3 text-md">
              <span className="px-3 py-1 bg-zinc-100 rounded-xl">Next.js</span>
              <span className="px-3 py-1 bg-zinc-100 rounded-xl">Node.js</span>
              <span className="px-3 py-1 bg-zinc-100 rounded-xl">MySQL</span>
            </div>
          </div>

        </div>
      </section>
    </FadeIn>
    </div>
    </main>
  )
}