"use client";

import React, { useRef } from "react";

export function TheClimb() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      ref={sectionRef}
      id="the-climb"
      className="relative min-h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 overflow-hidden select-none border-t border-white/10 flex flex-col justify-between padding-x py-16 md:py-24"
    >
      {/* Top Header Tag */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/10 pb-4 z-10">
        <div className="flex items-center gap-2 font-mono text-xs text-flame font-semibold uppercase tracking-wider">
          <span>( ACT II // THE ODYSSEY &middot; 1986 &mdash; 2013 )</span>
        </div>
        <div className="font-mono text-xs tracking-widest text-flax-smoke-400 uppercase hidden sm:block">
          ( THE ASCENT TO IMMORTALITY )
        </div>
      </div>

      {/* Center Title with Expansive Breathing Room */}
      <div className="my-auto text-center z-10 flex flex-col items-center py-12">
        <span className="font-mono text-xs md:text-sm text-flame tracking-[0.3em] uppercase mb-3 font-bold">
          ( 26 YEARS &middot; 38 TROPHIES )
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight uppercase text-flax-smoke-50 leading-[1.05]">
          The Relentless <br />
          <span className="text-flame">Path.</span>
        </h2>
        <p className="mt-6 font-mono text-xs uppercase tracking-widest text-flax-smoke-400 max-w-md">
          A quarter-century of uncompromising standard, forging English football&apos;s greatest dynasty.
        </p>
      </div>

      {/* Bottom Milestones Floating in Negative Space */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-flax-smoke-400 border-t border-white/10 pt-5 z-10">
        <div>
          <span className="text-flame font-bold">1986 // </span>
          <span>THE ARRIVAL</span>
        </div>
        <div className="sm:text-center">
          <span className="text-flax-smoke-100 font-bold">1999 // </span>
          <span>THE CONTINENTAL TREBLE</span>
        </div>
        <div className="sm:text-right">
          <span className="text-flame font-bold">2013 // </span>
          <span>CHAMPION 20 &amp; SWAN SONG</span>
        </div>
      </div>
    </section>
  );
}
