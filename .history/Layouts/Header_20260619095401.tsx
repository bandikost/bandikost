"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { setLang } = useLanguage();

  return (
    <>
      <button onClick={() => setLang("ru")}>Русский</button>
      <button onClick={() => setLang("en")}>English</button>
      <button onClick={() => setLang("fr")}>Français</button>
    </>
  );
}