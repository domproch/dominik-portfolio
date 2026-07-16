"use client";

import { useEffect, useState } from "react";

const DOT_COUNT = 9;

export default function BootLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setVisible(false);
      return;
    }
    const fadeTimer = setTimeout(() => setFading(true), 400);
    const hideTimer = setTimeout(() => setVisible(false), 550);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-background transition-opacity duration-150 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: DOT_COUNT }).map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-accent"
            style={{
              animation: "boot-dot 0.9s ease-in-out infinite",
              animationDelay: `${i * 0.06}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
