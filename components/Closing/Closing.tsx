"use client";

import React from "react";
import { useLenisScroll } from "../Providers/SmoothScrollProvider";

export function Closing() {
  const { scrollTo } = useLenisScroll();

  const handleBackToTop = () => {
    scrollTo("#hero", { duration: 1.8 });
  };

  return (
    <footer
      id="closing"
      className="relative w-full bg-[#0A0A0A] text-flax-smoke-50 padding-x pt-32 md:pt-48 pb-16 select-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-between gap-20">
        {/* Upper Credits Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-14 border-b border-white/[0.06]">
          <div>
            <div className="font-mono text-xs text-flame uppercase tracking-wider font-medium mb-3">
              Colophon &middot; Retrospective Archive
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase text-flax-smoke-50">
              The Ferguson Era
            </h2>
            <p className="font-mono text-xs text-flax-smoke-400 tracking-wider mt-3">
              1986 &mdash; 2013 &middot; Manchester United Football Club
            </p>
          </div>

          {/* Minimalist Return to Top Button */}
          <button
            onClick={handleBackToTop}
            className="group font-mono text-xs tracking-wider text-flax-smoke-400 hover:text-flax-smoke-50 transition-colors duration-300 uppercase flex items-center gap-2 cursor-pointer"
          >
            <span>Return to Summit</span>
            <span className="text-flame group-hover:-translate-y-0.5 transition-transform duration-300">&uarr;</span>
          </button>
        </div>

        {/* Lower Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 font-mono text-xs text-flax-smoke-400">
          <div>
            <div className="text-flax-smoke-100 font-semibold tracking-wider uppercase mb-3">Narrative Arc</div>
            <div className="space-y-1.5 text-flax-smoke-400">
              <div>Act I &middot; The Rebuild (1986&ndash;1992)</div>
              <div>Act II &middot; The Dynasty (1993&ndash;1999)</div>
              <div>Act III &middot; The Legacy (1999&ndash;2013)</div>
            </div>
          </div>
          <div>
            <div className="text-flax-smoke-100 font-semibold tracking-wider uppercase mb-3">Architecture</div>
            <div className="space-y-1.5 text-flax-smoke-400">
              <div>Next.js &middot; App Router</div>
              <div>GSAP + ScrollTrigger</div>
              <div>Lenis Smooth Scroll</div>
              <div>Tailwind CSS</div>
            </div>
          </div>
          <div>
            <div className="text-flax-smoke-100 font-semibold tracking-wider uppercase mb-3">Historical Record</div>
            <div className="space-y-1.5 text-flax-smoke-400">
              <div>38 Major Titles</div>
              <div>13 Premier Leagues &middot; 2 UCL</div>
              <div>5 FA Cups &middot; 4 League Cups</div>
              <div>1 Continental Treble (1999)</div>
            </div>
          </div>
          <div>
            <div className="text-flax-smoke-100 font-semibold tracking-wider uppercase mb-3">Dedication</div>
            <div className="text-flax-smoke-400 leading-relaxed">
              Crafted as an editorial celebration of the relentless discipline, vision, and belief that reshaped global football.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-flax-smoke-500 tracking-wider pt-8 border-t border-white/[0.04]">
          <span>&copy; 1986&ndash;2013 Retrospective Archive</span>
          <span>Old Trafford &middot; The Theatre of Dreams</span>
        </div>
      </div>
    </footer>
  );
}
