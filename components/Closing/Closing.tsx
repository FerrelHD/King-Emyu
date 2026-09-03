"use client";

import React from "react";
import { useLenisScroll } from "../Providers/SmoothScrollProvider";

export function Closing() {
  const { scrollTo } = useLenisScroll();

  const handleBackToTop = () => {
    scrollTo(0, { duration: 2.2 });
  };

  return (
    <footer className="relative w-full bg-[#0A0A0A] text-[#FAFAFA] border-t border-[#1C1C1C] px-6 md:px-16 py-20 select-none">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-16">
        {/* Upper Credits Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b border-[#1C1C1C]">
          <div>
            <div className="font-mono text-xs text-[#DA291C] uppercase tracking-[0.3em] font-semibold mb-3">
              COLOPHON &middot; AN INTERACTIVE RETROSPECTIVE
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase">
              The Ferguson Era
            </h2>
            <p className="font-mono text-xs text-[#8E8E93] tracking-widest uppercase mt-3">
              1986 &mdash; 2013 &middot; MANCHESTER UNITED FOOTBALL CLUB
            </p>
          </div>

          <button
            onClick={handleBackToTop}
            data-cursor="VIEW"
            className="group px-6 py-4 border border-[#333333] hover:border-[#DA291C] font-mono text-xs tracking-widest text-[#FAFAFA] transition-colors uppercase flex items-center gap-3"
          >
            <span>RETURN TO SUMMIT</span>
            <span className="text-[#DA291C] group-hover:-translate-y-1 transition-transform">&uarr;</span>
          </button>
        </div>

        {/* Lower Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-[#8E8E93]">
          <div>
            <div className="text-white font-bold uppercase mb-2">Narrative Arc</div>
            <div>Act I &middot; The Rebuild (1986&ndash;1992)</div>
            <div>Act II &middot; The Dynasty (1993&ndash;1999)</div>
            <div>Act III &middot; The Legacy (1999&ndash;2013)</div>
          </div>
          <div>
            <div className="text-white font-bold uppercase mb-2">Architecture</div>
            <div>Next.js 16 (App Router)</div>
            <div>GSAP + ScrollTrigger</div>
            <div>Lenis Virtual Smooth Scroll</div>
            <div>Tailwind CSS &middot; Syne / Inter</div>
          </div>
          <div>
            <div className="text-white font-bold uppercase mb-2">Historical Records</div>
            <div>38 Major Titles</div>
            <div>13 Premier Leagues &middot; 2 UCL</div>
            <div>5 FA Cups &middot; 4 League Cups</div>
            <div>1 Continental Treble (1999)</div>
          </div>
          <div>
            <div className="text-white font-bold uppercase mb-2">Dedication</div>
            <div className="text-[#6E6E73] leading-relaxed">
              Crafted as an editorial celebration of the relentless discipline, vision, and belief that reshaped global football.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#555555] tracking-widest uppercase pt-8 border-t border-[#141414]">
          <span>&copy; 1986&ndash;2013 THE FERGIE CHRONICLES</span>
          <span>THE THEATRE OF DREAMS &middot; OLD TRAFFORD</span>
        </div>
      </div>
    </footer>
  );
}
