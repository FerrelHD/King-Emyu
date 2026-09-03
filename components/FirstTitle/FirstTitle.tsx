"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

export function FirstTitle() {
  const containerRef = useRef<HTMLElement | null>(null);
  const numberRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      if (numberRef.current) {
        tl.fromTo(
          numberRef.current,
          { scale: 0.85, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 1.0, ease: "power4.out" }
        );
      }

      if (markerRef.current) {
        tl.fromTo(
          markerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.9, ease: "power3.inOut" },
          "-=0.5"
        );
      }

      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.4"
        );
      }
    },
    [],
    containerRef
  );

  return (
    <section
      ref={containerRef}
      id="first-title"
      className="relative min-h-screen w-full bg-transparent text-flax-smoke-50 padding-x py-20 md:py-28 flex flex-col justify-between select-none border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between flex-1 z-10">
        {/* Top Section Tag */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-flame font-semibold uppercase">
            <span>( ACT II // THE DYNASTY &middot; MAY 1993 )</span>
          </div>
          <div className="font-mono text-xs tracking-widest text-flax-smoke-400 uppercase hidden sm:block">
            ( THE INAUGURAL PREMIER LEAGUE )
          </div>
        </div>

        {/* Centerpiece 26 Number Reveal */}
        <div className="my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Monumental 26 Stat Callout */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="font-mono text-[11px] tracking-[0.3em] text-flax-smoke-400 uppercase mb-1">
              ( YEARS IN THE WILDERNESS )
            </div>
            <div
              ref={numberRef}
              className="text-7xl sm:text-8xl md:text-9xl font-black font-display tracking-tighter leading-none text-flame"
            >
              26
            </div>
            <div className="w-full h-0.5 bg-white/20 mt-3 origin-left" ref={markerRef} />
            <div className="font-mono text-xs tracking-widest text-flax-smoke-400 uppercase mt-3">
              1967 &mdash; 1993 &middot; THE DROUGHT IS BROKEN
            </div>
          </div>

          {/* Narrative Context & Eric Cantona Catalyst */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-4 lg:pl-8">
            <span className="font-mono text-xs tracking-[0.25em] text-flame uppercase font-bold">
              ( THE CATALYST: ERIC CANTONA )
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase text-flax-smoke-50 leading-tight">
              The Missing Piece That Lit The Flame
            </h3>
            <p className="text-sm sm:text-base text-flax-smoke-300 font-body leading-relaxed max-w-xl">
              Eric Cantona arrived in November 1992 with an turned-up collar and an aristocratic arrogance, instantly transforming talented hopefuls into ruthless champions.
            </p>

            {/* Stat Pill Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono">
              <div>
                <div className="text-[10px] text-flax-smoke-400 uppercase tracking-wider">( POINTS )</div>
                <div className="text-lg md:text-xl font-bold font-display text-flax-smoke-50 mt-0.5">84 PTS</div>
              </div>
              <div>
                <div className="text-[10px] text-flax-smoke-400 uppercase tracking-wider">( GOAL DIFF )</div>
                <div className="text-lg md:text-xl font-bold font-display text-flax-smoke-50 mt-0.5">+36</div>
              </div>
              <div>
                <div className="text-[10px] text-flax-smoke-400 uppercase tracking-wider">( MARGIN )</div>
                <div className="text-lg md:text-xl font-bold font-display text-flame mt-0.5">+10 PTS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5 font-mono text-xs text-flax-smoke-400 tracking-widest uppercase">
          <span>( 1993 FIRST PREMIER LEAGUE TITLE )</span>
          <span>( 02 / 10 )</span>
        </div>
      </div>
    </section>
  );
}
