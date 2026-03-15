"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "default" | "dark" | "matrix" | "pastel";

type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("default");

  const applyTheme = (t: Theme) => {
    document.body.classList.remove("theme-dark", "theme-matrix", "theme-pastel");
    document.documentElement.classList.remove("dark");
    if (t !== "default") {
      document.body.classList.add(`theme-${t}`);
      if (t === "dark") document.documentElement.classList.add("dark");
    }
    document.documentElement.setAttribute("data-theme", t);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && ["default", "dark", "matrix", "pastel"].includes(stored)) {
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
