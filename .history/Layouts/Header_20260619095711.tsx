"use client";

import { useLanguage } from "@/components/LanguageContext";


export default function Header() {
  const { setLang } = useLanguage()

  return (
    <header className="fixed top-0 left-0 w-full h-20 bg-black flex items-center justify-center gap-4">
      <button onClick={() => setLang("ru")}>Русский</button>
      <button onClick={() => setLang("en")}>English</button>
      <button onClick={() => setLang("fr")}>Français</button>
    </header>
  );
}