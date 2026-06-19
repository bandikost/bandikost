"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const changeLanguage = (lang: "ru" | "en" | "fr") => {
    document.cookie = `lang=${lang}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <header>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("fr")}>FR</button>
    </header>
  );
}