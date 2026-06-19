import { translations } from "@/lib/translater";
import { cookies } from "next/headers";
import Link from "next/link";

type Language = "ru" | "en" | "fr"

export async function generateMetadata() {
  const cookieStore = await cookies()

  const lang = (cookieStore.get("lang")?.value ?? "en") as Language

  return {
    title: `${translations[lang].title} | bandikost`,
  }
}

export default async function Home() {
  const cookieStore = await cookies()

  const lang = (cookieStore.get("lang")?.value ?? "en") as Language

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-6">
  <h1 className="text-5xl font-bold tracking-tight">
    Bandikost
  </h1>

  <p className="text-zinc-500 text-xl max-w-xl">{translations[lang].mainlinkstext}</p>

  <div className="flex gap-3">
    <Link href="https://github.com/bandikost" className="px-5 py-2 rounded-xl bg-black text-white hover:bg-white hover:text-black border border-gray-300">
      GitHub
    </Link>
    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScfqzBmnhxdDJDMHpfWDRDlBsFVGxTnxdCCrJhCcZHXnFwPNdXwxsznGPqPHMTvMhMSvh" className="px-5 py-2 rounded-xl border hover:bg-black hover:text-white border-gray-300">
      Contact
    </Link>
  </div>

  <div className="grid gap-4 max-w-4xl mx-auto">
  <div className="p-6 rounded-2xl border bg-white/60 backdrop-blur">
    <h3 className="font-semibold">Company Name</h3>
    <p className="text-sm text-zinc-500">Frontend Developer · 2023–2026</p>

    <div className="mt-3 text-sm text-zinc-600">
      <ul className="list-disc ml-4 space-y-1">
        <li>Built dashboard with Next.js</li>
        <li>Optimized API performance</li>
        <li>Implemented auth system</li>
      </ul>
    </div>
  </div>
</div>


<div className="flex flex-wrap gap-2 justify-center">
  {["React", "Next.js", "TypeScript", "Node.js"].map((s) => (
    <span key={s} className="px-3 py-1 rounded-full bg-zinc-100 text-sm">
      {s}
    </span>
  ))}
</div>
</section>
  )
}