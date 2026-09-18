"use client";

import React, { useEffect, useState } from "react";
import { registerGSAP } from "@/lib/gsap-config";

export function Header() {
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const { ScrollTrigger } = registerGSAP();

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        setScrollPercent(Math.round(self.progress * 100));
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <>
      {/* Subtle 1px progress track at the absolute top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[1.5px] bg-white/[0.04]">
        <div
          className="h-full bg-flame transition-transform duration-100 ease-out origin-left will-change-transform"
          style={{ transform: `scaleX(${scrollPercent / 100})` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between padding-x py-6 md:py-8 pointer-events-none select-none">
        {/* Brand / Title */}
        <div className="pointer-events-auto flex items-center gap-3 font-mono text-xs tracking-wider">
          <span className="text-flax-smoke-50 font-medium tracking-widest uppercase">The Ferguson Era</span>
          <span className="text-flax-smoke-500 font-light">&mdash;</span>
          <span className="text-flax-smoke-400 font-light tracking-widest">1986 &ndash; 2013</span>
        </div>

        {/* Scroll Progress Metric */}
        <div className="pointer-events-auto flex items-center gap-2 font-mono text-xs text-flax-smoke-400 tracking-wider">
          <span className="text-[11px] uppercase tracking-widest text-flax-smoke-500">Archive</span>
          <span className="text-flax-smoke-200 font-semibold tabular-nums ml-1">
            {scrollPercent.toString().padStart(2, "0")}%
          </span>
        </div>
      </header>
    </>
  );
}
