"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "red";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" || current === "red" ? current : "dark");
  }, []);

  function setMode(next: Theme) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable (e.g. private browsing) — theme just won't persist
    }
  }

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-muted">[4]</span> Mode:
      <button
        type="button"
        onClick={() => setMode("dark")}
        className={
          theme === "dark"
            ? "text-accent underline decoration-dashed underline-offset-4"
            : "text-muted transition-colors hover:text-foreground"
        }
      >
        Dark
      </button>
      /
      <button
        type="button"
        onClick={() => setMode("light")}
        className={
          theme === "light"
            ? "text-accent underline decoration-dashed underline-offset-4"
            : "text-muted transition-colors hover:text-foreground"
        }
      >
        Light
      </button>
      /
      <button
        type="button"
        onClick={() => setMode("red")}
        className={
          theme === "red"
            ? "text-accent underline decoration-dashed underline-offset-4"
            : "text-muted transition-colors hover:text-foreground"
        }
      >
        Red
      </button>
    </span>
  );
}
