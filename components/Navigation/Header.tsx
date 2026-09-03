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
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-8 pointer-events-none mix-blend-difference text-white">
      {/* Brand / Title */}
      <div className="pointer-events-auto flex items-center gap-3">
        <span className="font-mono text-xs md:text-sm font-bold tracking-tighter uppercase">
          MANCHESTER UNITED
        </span>
        <span className="text-[#8E8E93] text-[10px] md:text-xs font-mono tracking-widest">
          / 1986&ndash;2013
        </span>
      </div>


      {/* Scroll Progress Metric */}
      <div className="pointer-events-auto flex items-center gap-4 font-mono text-xs">
        <span className="text-[10px] text-[#8E8E93] tracking-widest hidden sm:inline">
          PROGRESS
        </span>
        <span className="font-bold tabular-nums">
          {scrollPercent.toString().padStart(2, "0")}%
        </span>
      </div>
    </header>
  );
}
