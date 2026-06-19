import { translations } from "@/lib/translater";
import { cookies } from "next/headers";

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
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">

      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center gap-6 px-4">
        <h1 className="text-5xl md:text-6xl !font-semibold tracking-tight">
          Bandikost
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

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl !font-base mb-6">
          {translations[lang].experienceTitle}
        </h2>

        <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 hover:-translate-y-1 transition">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              {translations[lang].experience1.company}
            </h3>
            <span className="text-sm text-zinc-500">
              {translations[lang].experience1.period}
            </span>
          </div>

          <p className="text-sm text-zinc-500 mt-1">
            {translations[lang].experience1.role}
          </p>

          <ul className="mt-4 text-sm text-zinc-600 space-y-1">
            {translations[lang].experience1.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">
          {translations[lang].skillsTitle}
        </h2>

        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "TypeScript", "Node.js"].map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-zinc-100 text-sm text-zinc-700"
            >
              {s}
            </span>
          ))}
        </div>
      </section>


      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">
          {translations[lang].projectsTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div className="rounded-2xl border bg-white/70 p-6 hover:-translate-y-1 transition">
            <h3 className="text-lg font-semibold">
              {translations[lang].project1.title}
            </h3>

            <p className="text-sm text-zinc-500 mt-1">
              {translations[lang].project1.desc}
            </p>

            <div className="flex gap-2 mt-3 text-xs">
              <span className="px-2 py-1 bg-zinc-100 rounded">Next.js</span>
              <span className="px-2 py-1 bg-zinc-100 rounded">Node.js</span>
              <span className="px-2 py-1 bg-zinc-100 rounded">MySQL</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}