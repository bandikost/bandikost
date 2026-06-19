import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  const lang = (cookieStore.get("lang")?.value ?? "ru") as
    | "ru"
    | "en"
    | "fr";

  return (
    <>
      <h1>{translations[lang].title}</h1>
      <p>{translations[lang].hello}</p>
    </>
  );
}