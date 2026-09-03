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
      className="relative w-full bg-[#0A0A0A] text-flax-smoke-50 padding-x pt-20 md:pt-28 pb-12 border-t border-white/10 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-16">
        {/* Upper Credits Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="font-mono text-xs text-flame uppercase tracking-[0.3em] font-semibold mb-3">
              ( COLOPHON // AN INTERACTIVE RETROSPECTIVE )
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase text-flax-smoke-50">
              The Ferguson Era
            </h2>
            <p className="font-mono text-xs text-flax-smoke-400 tracking-widest uppercase mt-3">
              1986 &mdash; 2013 &middot; MANCHESTER UNITED FOOTBALL CLUB
            </p>
          </div>

          {/* Minimalist Button (Ferrel Portfolio Style) */}
          <button
            onClick={handleBackToTop}
            className="group px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black font-mono text-xs tracking-widest text-flax-smoke-50 transition-all duration-300 uppercase flex items-center gap-3 cursor-pointer"
          >
            <span>RETURN TO SUMMIT</span>
            <span className="text-flame group-hover:text-black group-hover:-translate-y-0.5 transition-transform duration-300">&uarr;</span>
          </button>
        </div>

        {/* Lower Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono text-xs text-flax-smoke-400">
          <div>
            <div className="text-flax-smoke-100 font-bold uppercase mb-2">( NARRATIVE ARC )</div>
            <div>Act I &middot; The Rebuild (1986&ndash;1992)</div>
            <div>Act II &middot; The Dynasty (1993&ndash;1999)</div>
            <div>Act III &middot; The Legacy (1999&ndash;2013)</div>
          </div>
          <div>
            <div className="text-flax-smoke-100 font-bold uppercase mb-2">( ARCHITECTURE )</div>
            <div>Next.js 16 (App Router)</div>
            <div>GSAP + ScrollTrigger</div>
            <div>Lenis Virtual Smooth Scroll</div>
            <div>Tailwind CSS &middot; Syne / Inter</div>
          </div>
          <div>
            <div className="text-flax-smoke-100 font-bold uppercase mb-2">( HISTORICAL RECORDS )</div>
            <div>38 Major Titles</div>
            <div>13 Premier Leagues &middot; 2 UCL</div>
            <div>5 FA Cups &middot; 4 League Cups</div>
            <div>1 Continental Treble (1999)</div>
          </div>
          <div>
            <div className="text-flax-smoke-100 font-bold uppercase mb-2">( DEDICATION )</div>
            <div className="text-flax-smoke-400 leading-relaxed">
              Crafted as an editorial celebration of the relentless discipline, vision, and belief that reshaped global football.
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-flax-smoke-500 tracking-widest uppercase pt-8 border-t border-white/5">
          <span>&copy; 1986&ndash;2013 RETROSPECTIVE ARCHIVE</span>
          <span>THE THEATRE OF DREAMS &middot; OLD TRAFFORD</span>
        </div>
      </div>
    </footer>
  );
}
