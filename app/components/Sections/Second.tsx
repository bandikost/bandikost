import { translations } from "@/lib/translater";
import { Language } from "@/types/Language";
import { FadeIn } from "../FadeAnim";


type Props = {
  lang: Language
}

export default function Second({lang}: Props) {


    return (
        <FadeIn>
        
          <section id="about" className="mx-auto max-w-7xl pb-16 pt-8">
            <span className="font-mono text-sm tracking-widest">
          <pre>
            <code>
              <span className="text-pink-500">new</span> {""}
              <span className="text-[var(--foreground)]">Section</span>{""}
              <span className="text-[var(--foreground)]">{"("}</span>{""}
              <span className="text-pink-500">1</span>{""}
              <span className="text-[var(--foreground)]">,</span>
              <span className="text-orange-400">&quot;{translations[lang].aboutme}&quot;</span>{""}
              <span className="text-[var(--foreground)]">{")"}</span>{""}
            </code>
          </pre>
        </span>
        
            <h2 className="mt-4 text-3xl font-semibold">
              {translations[lang].aboutme}
            </h2>
        
            <div className="mt-6 max-w-6xl text-lg leading-8 opacity-70">
              <p>{translations[lang].about.text}</p>
            </div>
          </section>
        
        </FadeIn>
    )

}