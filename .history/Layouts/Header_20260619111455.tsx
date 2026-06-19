"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all
        ${scrolled ? "bg-white/70 dark:bg-black/40 backdrop-blur-xl shadow-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">
        <span className="font-bold">bandikost</span>
      </div>
    </header>
  );
}