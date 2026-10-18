import { translations } from "@/lib/translater";
import { Language } from "@/types/Language";
import Image from "next/image";

type Props = {
  lang: Language
}

export default function First({lang}: Props) {


    return (
         <section className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl items-center overflow-hidden py-24 sm:py-28">
          <div className="pointer-events-none absolute left-0 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-lime-400/[0.07] blur-[100px]" />
        
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="min-w-0">
              <div className="mb-8 flex items-center gap-3 font-mono text-xs tracking-widest text-lime-400 sm:text-sm">
                <span className="h-px w-8 bg-lime-400" />
                <span>{translations[lang].main.available}</span>
              </div>
        
              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block">{translations[lang].main.hello}</span>
                <span className="mt-2 block text-lime-400">{translations[lang].main.name}.</span>
                <span className="mt-3 block text-[var(--foreground)]/50">
                  Frontend Developer
                </span>
              </h1>
        
              <p className="mt-8 max-w-xl text-base leading-8 text-[var(--foreground)]/65 sm:text-lg">
                {translations[lang].main.info}
              </p>
        
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="https://github.com/bandikost" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-xl border border-lime-400 bg-lime-400 px-5 py-3.5 font-medium text-zinc-950 transition duration-200 hover:-translate-y-0.5 hover:bg-lime-300">
                  <Image src="/skills/GH.png" alt="GitHub" width={22} height={22} />
                  GitHub
                  <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
        
                <a href="mailto:bandikost@gmail.com" className="group inline-flex items-center gap-3 rounded-xl border border-[var(--skill-border)] px-5 py-3.5 font-medium transition duration-200 hover:-translate-y-0.5 hover:border-lime-400">
                  <Image src="/skills/Gmail.png" alt="Gmail" width={22} height={22} />
                  Email
                  <span className="text-lime-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
        
                <a href="https://www.linkedin.com/in/roman-cherdantsev-125838414/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="group inline-flex items-center gap-3 rounded-xl border border-[var(--skill-border)] px-5 py-3.5 font-medium transition duration-200 hover:-translate-y-0.5 hover:border-lime-400">
                    
                  <Image src="/skills/LinkedIn.png" alt="LinkedIn" width={24} height={24} />
                    LinkedIn
                  <span className="!text-[#007AB6] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
              </div>
            </div>
        
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-lime-400/[0.04] blur-2xl" />
        
              <div className="overflow-hidden rounded-2xl border border-[var(--skill-border)] bg-[var(--skill-bg)] shadow-2xl shadow-black/10">
                <div className="flex items-center justify-between border-b border-[var(--skill-border)] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-lime-400/80" />
                  </div>
        
                  <span className="font-mono text-xs text-[var(--foreground)]/45">
                   portfolio.ts
                  </span>
        
                  <span className="font-mono text-xs text-lime-400">TS</span>
                </div>
                <div className="overflow-x-auto p-5 sm:p-8">
                  <pre className="overflow-x-auto font-mono text-sm leading-7">
              <code>
                <span className="text-pink-500">class</span>{" "}
                <span className="text-[var(--foreground)]">Section</span>{" "}
                {"{\n"}
                {"  "}
                <span className="text-lime-500">constructor</span>
                <span className="text-orange-400">(id, name)</span>{" "}
                {"{\n"}
                {"    "}
                <span className="text-pink-500">this</span>
                <span className="text-lime-500">.id</span>
                {" = "}
                <span className="text-[var(--foreground)]">id</span>
                {"\n"}
                {"    "}
                <span className="text-pink-500">this</span>
                <span className="text-lime-500">.name</span>
                {" = "}
                <span className="text-[var(--foreground)]">name</span>
                {"\n"}
                {"  }\n"}
                {"}"}
              </code>
            </pre>
            <span className="font-mono text-xs text-[var(--foreground)]/50 mt-2">
                  <pre>
                    <code>
                      <span className="text-pink-500">const</span>{" "}
                      <span className="text-orange-400">section</span>{" "}
                      <span className="text-[var(--foreground)]">=</span>{" "}
                      <span className="text-[var(--foreground)]">{`[`}</span>{" "}
                    </code>
                  </pre>
                </span>
                </div>
        
              
                <div className="flex items-center justify-between border-t border-[var(--skill-border)] px-5 py-3">
                  <span className="font-mono text-[10px] text-[var(--foreground)]/40">
                    UTF-8 · TypeScript
                  </span>
                  <span className="font-mono text-[10px] text-lime-400">
                    ● ALL SYSTEMS READY
                  </span>
                </div>
        
              </div>
        
              
            </div>
          </div>
        </section>
    )
}