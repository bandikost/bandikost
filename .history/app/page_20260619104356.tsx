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
</section>
  )
}