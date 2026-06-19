import { translations } from "@/lib/translater";
import { cookies } from "next/headers";
import Link from "next/link";

type Language = "ru" | "en" | "fr";

export async function generateMetadata() {
  const cookieStore = await cookies();

  const lang = (cookieStore.get("lang")?.value ?? "en") as Language;

  return {
    title: `${translations[lang].title} | bandikost`,
  };
}

export default async function Home() {
  const cookieStore = await cookies();

  const lang = (cookieStore.get("lang")?.value ?? "en") as Language;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center gap-6 px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Bandikost
        </h1>

        <p className="text-zinc-500 text-lg md:text-xl max-w-xl">
          {translations[lang].mainlinkstext}
        </p>

        <div className="flex gap-3">
          <Link
            href="https://github.com/bandikost"
            target="_blank"
            className="px-5 py-2 rounded-xl bg-black text-white border border-black hover:bg-white hover:text-black transition"
          >
            GitHub
          </Link>

          <Link
            href="mailto:example@gmail.com"
            className="px-5 py-2 rounded-xl border border-zinc-300 hover:bg-black hover:text-white transition"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <div className="space-y-4">
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 hover:-translate-y-1 transition">
            <h3 className="font-semibold">Company Name</h3>
            <p className="text-sm text-zinc-500">
              Frontend Developer · 2023–2026
            </p>

            <ul className="mt-3 text-sm text-zinc-600 list-disc ml-4 space-y-1">
              <li>Built dashboard with Next.js</li>
              <li>Optimized API performance</li>
              <li>Implemented auth system</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

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

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border bg-white/70 p-6 hover:-translate-y-1 transition">
            <h3 className="text-lg font-semibold">
              E-commerce Platform
            </h3>

            <p className="text-sm text-zinc-500 mt-1">
              Fullstack marketplace with payments and admin panel
            </p>

            <div className="flex gap-2 mt-3 text-xs flex-wrap">
              <span className="px-2 py-1 bg-zinc-100 rounded">Next.js</span>
              <span className="px-2 py-1 bg-zinc-100 rounded">Node.js</span>
              <span className="px-2 py-1 bg-zinc-100 rounded">MySQL</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}