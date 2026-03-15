"use client";

import { createContext, useContext } from "react";
import type { PortfolioContent } from "@/types/portfolio-content";

const ContentContext = createContext<PortfolioContent | null>(null);

export function ContentProvider({
  content,
  children,
}: {
  content: PortfolioContent;
  children: React.ReactNode;
}) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): PortfolioContent {
  const c = useContext(ContentContext);
  if (!c) throw new Error("useContent must be used within ContentProvider");
  return c;
}

export function useContentOptional(): PortfolioContent | null {
  return useContext(ContentContext);
}
