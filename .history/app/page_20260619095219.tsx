import { translations } from "@/lib/translater";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1>{translations[lang].title}</h1>

      <p>{translations[lang].hello}</p>

      
    </div>
  )
}