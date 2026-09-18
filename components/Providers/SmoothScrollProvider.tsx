"use client";

import React, { createContext, useContext, useEffect, useCallback } from "react";
import Lenis from "lenis";
import { initLenis, destroyLenis, getLenis } from "@/lib/lenis";

interface ScrollContextType {
  lenis: Lenis | null;
  stopScroll: () => void;
  startScroll: () => void;
  scrollTo: (target: string | number | HTMLElement, options?: Record<string, unknown>) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  stopScroll: () => {},
  startScroll: () => {},
  scrollTo: () => {},
});

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initLenis();

    return () => {
      destroyLenis();
    };
  }, []);

  const stopScroll = useCallback(() => {
    const l = getLenis();
    l?.stop();
  }, []);

  const startScroll = useCallback(() => {
    const l = getLenis();
    l?.start();
  }, []);

  const scrollTo = useCallback((target: string | number | HTMLElement, options?: Record<string, unknown>) => {
    const l = getLenis();
    l?.scrollTo(target, options);
  }, []);

  return (
    <ScrollContext.Provider value={{ lenis: getLenis(), stopScroll, startScroll, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useLenisScroll = () => useContext(ScrollContext);
