import { useState } from "react"

type Language = "ru" | "en" | "fr"

export default function Header() {
    const [lang, setLang] = useState<Language>("ru")

    return (
        <>
            <button onClick={() => setLang("ru")} className="border px-4 py-2">Русский</button>
            <button onClick={() => setLang("en")} className="border px-4 py-2">English</button>
            <button onClick={() => setLang("fr")} className="border px-4 py-2">Français</button>
        </>
    )
}