"use client";

import { translations } from "@/lib/translater";
import { useState } from "react";

type Language = "ru" | "en" | "fr"

export default function Home() {
  const [lang, setLang] = useState("ru");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5">
      <h1>{translations[lang].title}</h1>

      <p>{translations[lang].hello}</p>

      <button
        onClick={() => setLang("ru")}
        className="border px-4 py-2"
      >
        Русский
      </button>

      <button
        onClick={() => setLang("en")}
        className="border px-4 py-2"
      >
        English
      </button>

      <button
        onClick={() => setLang("fr")}
        className="border px-4 py-2"
      >
        Français
      </button>
    </div>
  );
}