import { translations } from "@/lib/translater";
import { cookies } from "next/headers";


export async function generateMetadata() {
  const cookieStore = await cookies();

  const lang = (cookieStore.get("lang")?.value ?? "en") as Language;

  return {
    title: `${translations[lang].title} | bandikost`,
  };
}


export default async function Home() {
  const cookieStore = await cookies();

  const lang = (cookieStore.get("lang")?.value ?? "en") as
    | "ru"
    | "en"
    | "fr";

  return (
    <section className="flex flex-col items-center justify-center mt-30">
      <h1 className="text-xl">{translations[lang].title}</h1>
      <div className="flex "></div>
      <p>{translations[lang].hello}</p>
    </section>
  );
}