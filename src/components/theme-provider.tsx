"use client";

import { createContext, useContext, useEffect, useState } from "react";

const THEME_IDS = ["default", "dark", "matrix", "pastel", "ocean", "sunset", "forest", "nord", "neon", "mono"] as const;
export type Theme = (typeof THEME_IDS)[number];

type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("default");

  const applyTheme = (t: Theme) => {
    document.documentElement.setAttribute("data-theme", t);
    document.body.classList.remove(
      "theme-dark", "theme-matrix", "theme-pastel",
      "theme-ocean", "theme-sunset", "theme-forest", "theme-nord", "theme-neon", "theme-mono"
    );
    document.documentElement.classList.remove("dark");
    if (t !== "default") {
      document.body.classList.add(`theme-${t}`);
      if (t === "dark" || t === "mono") document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && THEME_IDS.includes(stored)) {
      setThemeState(stored);
      applyTheme(stored);
    } else {
      setThemeState("default");
      applyTheme("default");
    }
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    applyTheme(t);
    localStorage.setItem("theme", t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
