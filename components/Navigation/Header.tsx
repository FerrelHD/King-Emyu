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
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between padding-x py-5 md:py-7 pointer-events-none mix-blend-difference text-flax-smoke-100 select-none">
      {/* Brand / Title */}
      <div className="pointer-events-auto flex items-center gap-2.5 font-mono text-xs md:text-sm font-semibold tracking-tight uppercase">
        <span className="text-flax-smoke-50">MANCHESTER UNITED</span>
        <span className="text-flax-smoke-400 font-normal tracking-widest text-[11px] md:text-xs">
          ( 1986 &mdash; 2013 )
        </span>
      </div>

      {/* Scroll Progress Metric */}
      <div className="pointer-events-auto flex items-center gap-2 font-mono text-xs">
        <span className="text-[11px] text-flax-smoke-400 tracking-wider">
          ( PROGRESS //
        </span>
        <span className="font-bold text-flax-smoke-50 tabular-nums">
          {scrollPercent.toString().padStart(2, "0")}%
        </span>
        <span className="text-[11px] text-flax-smoke-400">)</span>
      </div>
    </header>
  );
}
