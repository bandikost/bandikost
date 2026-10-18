"use client";

import { translations } from "@/lib/translater";
import { Language } from "@/types/Language";
import { Theme } from "@/types/Theme";
import { useState } from "react";



type Props = {
  lang: Language
}

export default function ThemeToggle({ lang }: Props) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";

    return document.body.dataset.theme === "light"
      ? "light"
      : "dark";
  });

  function toggleTheme() {
    const nextTheme: Theme =
      theme === "dark" ? "light" : "dark";

    document.body.dataset.theme = nextTheme;

    document.cookie = [
      `theme=${nextTheme}`,
      "Path=/",
      "Max-Age=31536000",
      "SameSite=Lax",
    ].join("; ");

    setTheme(nextTheme);
  }

  const text =
    theme === "dark"
      ? translations[lang].lightTheme
      : translations[lang].darkTheme;

  return (
    <button onClick={toggleTheme} type="button" className="cursor-pointer hover:opacity-50 !text-zinc-900">
      {theme === "dark" ? "☀️" : "🌙"} {text}
    </button>
  );
}