import { translations } from "@/lib/translater";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  const lang = (cookieStore.get("lang")?.value ?? "ru") as
    | "ru"
    | "en"
    | "fr";

  return (
    <section className="flex flex-col items-center justify-center mt-30">
      <h1>{translations[lang].title}</h1>
      <div className="flex "></div>
      <p>{translations[lang].hello}</p>
    </section>
  );
}