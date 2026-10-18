


export default function SectionEnd() {

    return (
         <section className="mx-auto max-w-7xl py-16">
            <pre className="font-mono text-sm leading-7 tracking-widest">
                <code>
                <span className="text-[var(--foreground)]">{"]"}</span>{"\n"}
                <span className="text-pink-500">const</span>{" "}
                <span className="text-orange-400">mapped</span>{" "}
                <span className="text-[var(--foreground)]">=</span>{" "}
                <span className="text-[var(--foreground)]">section</span>
                <span className="text-lime-500">.map</span>
                <span className="text-[var(--foreground)]">(</span>
                <span className="text-orange-400">s</span>{" "}
                <span className="text-pink-500">=&gt;</span>{" "}
                <span className="text-orange-400">s</span>
                <span className="text-lime-500">.name</span>
                <span className="text-[var(--foreground)]">)</span>
                {"\n\n"}
                <span className="text-[var(--foreground)]">console</span>
                <span className="text-lime-500">.log</span>
                <span className="text-[var(--foreground)]">(</span>
                <span className="text-orange-400">mapped</span>
                <span className="text-[var(--foreground)]">)</span>
                </code>
            </pre>
        </section>
    )
}