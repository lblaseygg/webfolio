"use client";

import { useEffect, useState } from "react";

const helloWords = [
  { text: "hello" },
  { text: "こんにちは" },
  { text: "hola" },
];

const WORD_DURATION_MS = 700;
const FADE_OUT_MS = 520;

export function StartupIntro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.dataset.startupIntro = "running";

    if (prefersReducedMotion) {
      root.dataset.startupIntro = "done";
      window.setTimeout(() => {
        setHidden(true);
      }, 0);
      return;
    }

    const timers: number[] = [];

    helloWords.forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          setActiveIndex(index);
        }, index * WORD_DURATION_MS),
      );
    });

    timers.push(
      window.setTimeout(() => {
        root.dataset.startupIntro = "done";
      }, helloWords.length * WORD_DURATION_MS),
    );

    timers.push(
      window.setTimeout(() => {
        setHidden(true);
      }, helloWords.length * WORD_DURATION_MS + FADE_OUT_MS),
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  if (hidden) {
    return null;
  }

  const activeWord = helloWords[activeIndex] ?? helloWords[0];

  return (
    <div className="startup-intro-overlay pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-6">
      <div className="startup-intro-backdrop absolute inset-0" />
      <div className="startup-intro-card relative flex flex-col items-center gap-5 text-center">
        <span
          key={activeWord.text}
          className={`startup-intro-word text-balance text-[clamp(3.2rem,9vw,7rem)] font-semibold tracking-[-0.08em] text-slate-950 ${
            activeIndex === helloWords.length - 1 ? "startup-intro-word-final" : ""
          }`}
        >
          {activeWord.text}
        </span>
      </div>
    </div>
  );
}
