"use client";

import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translater";


export default function Header() {
 const { lang, setLang } = useLanguage();

  const languages = [
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
  ] as const

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-lg">
      <div className="flex h-16 items-center justify-between px-6">
        <h1 className="text-lg font-bold text-zinc-600">bandikost {translations[lang].title}</h1>

        <div className="flex items-center gap-2 rounded-xl bg-zinc-100 p-1">
          {languages.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
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