"use client";

import { useLanguage } from "@/components/LanguageContext";


export default function Header() {
  const { setLang } = useLanguage()

  return (
    <header className="fixed h-20 w-[1200px] bg-black top-10">
      <button onClick={() => setLang("ru")}>Русский</button>
      <button onClick={() => setLang("en")}>English</button>
      <button onClick={() => setLang("fr")}>Français</button>
    </header>
  );
}