import { translations } from "@/lib/translater";
import { cookies } from "next/headers";
import { FadeIn } from "./components/FadeAnim";

type Language = "ru" | "en" | "fr"


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
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900 mt-30">

      <section className=" flex flex-col justify-center items-center text-center gap-6 px-4 ">
        <h1 className="text-5xl md:text-6xl !font-semibold tracking-tight">
          Bandikost {translations[lang].portfolio}
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl max-w-xl !font-base">
          {translations[lang].mainlinkstext}
        </p>

        <div className="flex gap-3">
          <a
            href="https://github.com/bandikost"
            target="_blank"
            className="px-5 py-2 rounded-xl bg-black text-white border border-black hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="mailto:example@gmail.com"
            className="px-5 py-2 rounded-xl border border-zinc-300 hover:bg-black hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 mt-20">
        <h2 className="!text-2xl font-semibold mb-6 text-center sm:text-left">{translations[lang].aboutme}</h2>

        <div className="space-y-4 text-zinc-600 leading-relaxed text-xl">
          <p>{translations[lang].about.p1}</p>
          <p>{translations[lang].about.p2}</p>
          <p>{translations[lang].about.p3}</p>
        </div>
      </section>

<FadeIn>
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-2xl !font-base mb-6 text-center sm:text-left">
          {translations[lang].experienceTitle}
        </h2>

        <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 hover:-translate-y-1 transition">
          <div className="flex justify-between">
            <h3 className="!font-base">
              {translations[lang].experience1.company}
            </h3>
            <span className="!font-base text-md text-zinc-500">
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
      <section className="max-w-5xl mx-auto px-2 py-10">
        <h2 className="text-2xl !font-base mb-6 text-center sm:text-left">
          {translations[lang].skillsTitle}
        </h2>

        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "TypeScript", "Node.js"].map((s) => (
            <span key={s} className="px-4 py-1 text-lg rounded-full bg-zinc-100 text-zinc-700">{s}</span>
          ))}
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
    </main>
  )
}