"use client";

import ThemeToggle from "@/app/components/ThemeToggle";
import { navigation } from "@/lib/navigate";
import { Language } from "@/types/Language";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
  { code: "fr", label: "FR" },
]



export default function Header() {
  const router = useRouter()
  const [lang, setLang] = useState<Language>("en")

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("lang="));

    const value = cookie?.split("=")[1];

    if (value && languages.some((item) => item.code === value)) {
      setLang(value as Language)
    }
  }, [])

  const changeLanguage = (language: Language) => {
    if (language === lang) return

    document.cookie = `lang=${language}; path=/; max-age=31536000; SameSite=Lax`

    setLang(language)
    router.refresh()
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--skill-border)] bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
     
        <Link href="#top" aria-label="bandikost — home" className="group flex shrink-0 items-center gap-2 font-mono text-lg font-bold tracking-tight text-[var(--foreground)]">
          <span className="text-lime-400 transition-transform duration-200 group-hover:translate-x-0.5">
            {" >_ "}
          </span>
          <span>
            bandikost<span className="text-lime-400">.</span>
          </span>
        </Link>

      
        <nav className="hidden items-center gap-3 md:gap-6 md:flex">
          {navigation.map(({ href, label }, index) => (
            <Link key={href} href={href} className="group flex items-center gap-1.5 font-mono text-sm text-[var(--muted)] transition-colors hover:text-lime-400">
              <span className="text-[10px] text-lime-400/60">
                0{index + 1}
              </span>
              {label}
            </Link>
          ))}
        </nav>

 
        <div className="flex shrink-0 items-center gap-2">
          <div className="flex items-center gap-0.5 rounded-lg border border-[var(--skill-border)] p-1">
            {languages.map(({ code, label }) => {
              const active = lang === code

              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => changeLanguage(code)}
                  aria-pressed={active}
                  aria-label={`Change language to ${label}`}
                  className={`cursor-pointer rounded-md px-2 py-1.5 font-mono text-[13px] transition-all duration-200 ${
                    active
                      ? "bg-lime-400 text-zinc-950"
                      : "text-[var(--muted)] hover:bg-[var(--control-hover)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="ml-1 border-l border-[var(--skill-border)] pl-3">
            <ThemeToggle lang={lang} />
          </div>
        </div>
      </div>
    </header>
  )
}