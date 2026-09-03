"use client";

import Lenis from "lenis";
import { registerGSAP } from "./gsap-config";

let lenisInstance: Lenis | null = null;
let tickerCallback: ((time: number) => void) | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null;
  if (lenisInstance) return lenisInstance;

  const { gsap, ScrollTrigger } = registerGSAP();

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.8,
    autoRaf: false, // Driven manually via GSAP ticker per spec
  });

  lenisInstance = lenis;

  // Sync Lenis scroll events with ScrollTrigger
  lenis.on("scroll", () => {
    ScrollTrigger.update();
  });

  // Sync RAF with GSAP master ticker
  tickerCallback = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  // Auto refresh ScrollTrigger when layout and fonts settle
  if (typeof window !== "undefined") {
    requestAnimationFrame(() => ScrollTrigger.refresh());
    window.addEventListener("load", () => ScrollTrigger.refresh());
    setTimeout(() => ScrollTrigger.refresh(), 400);
    setTimeout(() => ScrollTrigger.refresh(), 1200);
  }

  return lenis;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function refreshScrollTrigger() {
  if (typeof window !== "undefined") {
    const { ScrollTrigger } = registerGSAP();
    ScrollTrigger.refresh();
  }
}

export function destroyLenis() {
  if (lenisInstance) {
    const { gsap, ScrollTrigger } = registerGSAP();
    if (tickerCallback) {
      gsap.ticker.remove(tickerCallback);
      tickerCallback = null;
    }
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
