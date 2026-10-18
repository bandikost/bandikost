"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;

      if (!link) return;

      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;

      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();

      const headerOffset = 90;
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}