import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translater";


export default function Home() {
  const { lang } = useLanguage()

  return (
    <>
      <h1>{translations[lang].title}</h1>
      <p>{translations[lang].hello}</p>
    </>
  );
}