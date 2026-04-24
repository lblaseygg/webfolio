"use client";

import { useEffect, useRef, useState } from "react";

export function SiteNav() {
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 96) {
        setVisible(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (delta > 6) {
        setVisible(true);
      } else if (delta < -4) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });

      ticking = true;
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="site-nav fixed inset-x-0 top-0 z-30 h-11"
      data-visible={visible}
    >
      <nav className="mx-auto flex h-full max-w-5xl items-center justify-center px-5 sm:px-8">
        <div className="flex items-center gap-8 text-xs text-slate-700 sm:gap-10">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
