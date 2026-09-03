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
      className="relative min-h-screen w-full bg-[#FAFAFA] text-[#0A0A0A] px-6 sm:px-10 md:px-16 py-20 md:py-28 flex flex-col justify-between select-none"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Top Section Tag */}
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-5">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#DA291C] font-semibold uppercase">
            <span>ACT II &middot; THE DYNASTY</span>
            <span className="text-[#A1A1A6]">/</span>
            <span className="text-[#0A0A0A]">MAY 1993</span>
          </div>
          <div className="font-mono text-xs tracking-widest text-[#8E8E93] uppercase hidden sm:block">
            THE INAUGURAL PREMIER LEAGUE
          </div>
        </div>

        {/* Centerpiece 26 Number Reveal */}
        <div className="my-auto py-10 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Monumental 26 Stat Callout */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="font-mono text-[11px] tracking-[0.3em] text-[#8E8E93] uppercase mb-1">
              YEARS IN THE WILDERNESS
            </div>
            <div
              ref={numberRef}
              className="text-7xl sm:text-8xl md:text-9xl font-black font-display tracking-tighter leading-none text-[#DA291C]"
            >
              26
            </div>
            <div className="w-full h-0.5 bg-[#0A0A0A] mt-3 origin-left" ref={markerRef} />
            <div className="font-mono text-xs tracking-widest text-[#0A0A0A] uppercase mt-3">
              1967 &mdash; 1993 &middot; THE DROUGHT IS BROKEN
            </div>
          </div>

          {/* Narrative Context & Eric Cantona Catalyst */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col gap-5 lg:pl-8">
            <span className="font-mono text-xs tracking-[0.25em] text-[#DA291C] uppercase font-bold">
              THE CATALYST: ERIC CANTONA
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase text-[#0A0A0A] leading-tight">
              The Missing Piece That Lit The Flame
            </h3>
            <p className="text-sm sm:text-base text-[#444444] font-body leading-relaxed max-w-xl">
              In November 1992, Ferguson completed the signing of the decade: French enigma Eric Cantona for £1.2M from reigning champions Leeds United. Cantona brought aristocratic arrogance, collar turned up, transforming youthful promise into ruthless champions.
            </p>
            <p className="text-sm sm:text-base text-[#444444] font-body leading-relaxed max-w-xl">
              On May 2, 1993, when Aston Villa lost at Oldham, Manchester United were officially crowned champions of England for the first time in 26 years. The floodgates of modern dominance were blown open.
            </p>

            {/* Stat Pill Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E5E5E5] font-mono">
              <div>
                <div className="text-[11px] text-[#8E8E93] uppercase">Points</div>
                <div className="text-lg md:text-xl font-bold font-display text-[#0A0A0A] mt-0.5">84 PTS</div>
              </div>
              <div>
                <div className="text-[11px] text-[#8E8E93] uppercase">Goal Diff</div>
                <div className="text-lg md:text-xl font-bold font-display text-[#0A0A0A] mt-0.5">+36</div>
              </div>
              <div>
                <div className="text-[11px] text-[#8E8E93] uppercase">Title Margin</div>
                <div className="text-lg md:text-xl font-bold font-display text-[#DA291C] mt-0.5">+10 PTS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-5 font-mono text-xs text-[#8E8E93] tracking-widest uppercase">
          <span>NEXT: THE CLIMB &middot; STATISTICAL SURGE</span>
          <span>02 / 10</span>
        </div>
      </div>
    </section>
  );
}
