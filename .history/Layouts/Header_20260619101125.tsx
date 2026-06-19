"use client";

import { translations } from "@/lib/translater";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Language = "ru" | "en" | "fr";

export default function Header() {
  const router = useRouter();

  const [lang, setLang] = useState<Language>("ru");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lang="));

    if (cookie) {
      setLang(cookie.split("=")[1] as Language);
    }
  }, []);

  const changeLanguage = (language: Language) => {
    document.cookie = `lang=${language}; path=/; max-age=31536000`;

    setLang(language);
    router.refresh();
  };

  const languages = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
  ] as const;

  return (
    <header className="fixed top-8 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/60 bg-white/80 shadow-lg backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        <h1 className="text-lg font-bold text-zinc-700">
          bandikost  
        </h1>

        <div className="flex items-center gap-2 rounded-xl bg-zinc-300 p-1">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
                lang === code
                  ? "bg-teal-500 text-white shadow-md"
                  : "text-zinc-600 hover:bg-white hover:text-zinc-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}