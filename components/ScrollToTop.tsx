"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-orange-400/30 bg-orange-500 text-xl font-bold text-white shadow-xl shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-500/30"
    >
      <span className="transition-transform duration-300 group-hover:-translate-y-1">
        ↑
      </span>

      <span className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
    </button>
  );
}