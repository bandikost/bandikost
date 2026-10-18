import { cookies } from "next/headers";
import { translations } from "@/lib/translater";
import { Language } from "@/types/Language";


import First from "./components/Sections/First";
import Second from "./components/Sections/Second";
import Third from "./components/Sections/Third";
import Four from "./components/Sections/Four";
import SectionEnd from "./components/Sections/SectionEnd";

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
    <main id="top" className="min-h-screen px-6">
      <div className="site-grid">
        <First lang={lang} />
        <Second lang={lang} />
        <Third lang={lang} />
        <Four lang={lang} />
    
        <SectionEnd />
    </div>
    </main>
  )
}