"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";
import { TacticalBlueprint } from "./TacticalBlueprint";

interface TrebleStage {
  step: string;
  date: string;
  trophy: string;
  opponent: string;
  scoreline: string;
  venue: string;
  highlight: string;
  quote: string;
}

const STAGES: TrebleStage[] = [
  {
    step: "01",
    date: "16 MAY 1999",
    trophy: "The Premier League",
    opponent: "Tottenham Hotspur",
    scoreline: "2 &mdash; 1",
    venue: "Old Trafford",
    highlight:
      "Trailing 1-0 on the final day with Arsenal breathing down their necks. Beckham equalizes with a curling masterstroke before Andy Cole lobs Ian Walker to seal the first leg.",
    quote: '"We don\'t do things the easy way here. Never have." &mdash; Gary Neville',
  },
  {
    step: "02",
    date: "22 MAY 1999",
    trophy: "The FA Cup",
    opponent: "Newcastle United",
    scoreline: "2 &mdash; 0",
    venue: "Wembley Stadium",
    highlight:
      "Roy Keane hobbles off injured in the 9th minute. Teddy Sheringham steps off the bench to score within 90 seconds and tees up Paul Scholes for the second. The Double secured.",
    quote: '"Two down. One to go. Now we go to Barcelona." &mdash; Sir Alex Ferguson',
  },
  {
    step: "03",
    date: "26 MAY 1999",
    trophy: "UEFA Champions League",
    opponent: "Bayern Munich",
    scoreline: "2 &mdash; 1",
    venue: "Camp Nou, Barcelona",
    highlight:
      "Trailing 1-0 in the 90th minute without Keane and Scholes. Two stoppage-time corners create the most dramatic turnaround in sports history. Solskjær stabs home at 92:17.",
    quote: '"Football, bloody hell." &mdash; Sir Alex Ferguson',
  },
];

export function Treble1999() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stagesContainerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [activeStage, setActiveStage] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stagesContainer = stagesContainerRef.current;
      const progressBar = progressBarRef.current;
      if (!section || !stagesContainer) return;

      const stageElements = stagesContainer.querySelectorAll(".treble-stage");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: "+=260%",
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.35) setActiveStage(0);
            else if (p < 0.7) setActiveStage(1);
            else setActiveStage(2);
          },
        },
      });

      if (progressBar) {
        tl.to(progressBar, { scaleY: 1, ease: "none" }, 0);
      }

      tl.to(stageElements[0], { opacity: 0, yPercent: -30, duration: 1, ease: "power2.inOut" }, 0.8);
      tl.fromTo(stageElements[1], { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, duration: 1, ease: "power2.inOut" }, 1.2);

      tl.to(stageElements[1], { opacity: 0, yPercent: -30, duration: 1, ease: "power2.inOut" }, 2.0);
      tl.fromTo(stageElements[2], { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, duration: 1, ease: "power2.inOut" }, 2.4);
    },
    [],
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      id="treble-1999"
      className="relative h-screen w-full bg-[#050505] text-[#FAFAFA] overflow-hidden select-none flex flex-col justify-between py-8 md:py-12 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between flex-1 relative">
        {/* Right Edge Vertical Progress Bar */}
        <div className="absolute -right-8 md:-right-12 top-1/4 bottom-1/4 w-[2px] bg-[#222222] hidden sm:block">
          <div
            ref={progressBarRef}
            className="w-full h-full bg-[#DA291C] origin-top scale-y-0"
          />
          <div className="absolute -right-8 top-0 font-mono text-[9px] text-[#8E8E93] tracking-widest uppercase">
            01/03
          </div>
          <div className="absolute -right-8 bottom-0 font-mono text-[9px] text-[#DA291C] tracking-widest uppercase font-bold">
            03/03
          </div>
        </div>

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-4">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#DA291C] animate-ping" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#DA291C] font-bold uppercase">
              CENTERPIECE // MAY 1999
            </span>
          </div>
          <div className="font-mono text-xs tracking-widest text-[#8E8E93] uppercase hidden sm:block">
            THE CONTINENTAL TREBLE &middot; 10 DAYS
          </div>
        </div>

        {/* 3 Sequential Stages Layer Stack */}
        <div
          ref={stagesContainerRef}
          className="relative my-auto w-full h-[460px] md:h-[420px] flex items-center"
        >
          {STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className={`treble-stage absolute inset-0 flex items-center ${
                idx === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {idx === 2 ? (
                /* Stage 3: Two-Column Layout featuring the Tactical Blueprint SVG */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
                  <div className="lg:col-span-6 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display font-black text-3xl sm:text-4xl text-[#DA291C]">
                        {stage.step}
                      </span>
                      <div className="font-mono text-[11px] tracking-widest text-[#8E8E93] uppercase">
                        <span>ACT II &middot; TRIUMPH 03 OF 03 &middot; </span>
                        <span className="text-white font-bold">{stage.date}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase leading-tight text-white">
                      {stage.trophy}
                    </h3>

                    <div className="my-3 p-3 bg-[#111111] border border-[#222222] flex items-center justify-between">
                      <div className="font-display font-bold text-sm md:text-base text-white">
                        vs {stage.opponent} &middot; <span className="text-[#8E8E93] text-xs font-mono font-normal">{stage.venue}</span>
                      </div>
                      <div
                        className="font-display font-black text-xl text-[#DA291C]"
                        dangerouslySetInnerHTML={{ __html: stage.scoreline }}
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-[#A1A1A6] font-body leading-relaxed">
                      {stage.highlight}
                    </p>

                    <blockquote className="mt-3 font-mono text-xs text-[#DA291C] italic tracking-wide">
                      {stage.quote}
                    </blockquote>
                  </div>

                  <div className="lg:col-span-6">
                    <TacticalBlueprint isActive={activeStage === 2} />
                  </div>
                </div>
              ) : (
                /* Stages 1 & 2: Clean Editorial Single Column */
                <div className="w-full max-w-2xl flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display font-black text-3xl sm:text-4xl text-[#DA291C]">
                      {stage.step}
                    </span>
                    <div className="font-mono text-[11px] tracking-widest text-[#8E8E93] uppercase">
                      <span>ACT II &middot; TRIUMPH {idx + 1} OF 3 &middot; </span>
                      <span className="text-white font-bold">{stage.date}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-display tracking-tight uppercase leading-tight text-white">
                    {stage.trophy}
                  </h3>

                  <div className="my-4 p-4 bg-[#111111] border border-[#222222] flex items-center justify-between">
                    <div className="font-display font-bold text-base md:text-lg text-white">
                      vs {stage.opponent} &middot; <span className="text-[#8E8E93] text-xs font-mono font-normal">{stage.venue}</span>
                    </div>
                    <div
                      className="font-display font-black text-xl md:text-2xl text-[#DA291C]"
                      dangerouslySetInnerHTML={{ __html: stage.scoreline }}
                    />
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-[#A1A1A6] font-body leading-relaxed">
                    {stage.highlight}
                  </p>

                  <blockquote className="mt-3 font-mono text-xs text-[#DA291C] italic tracking-wide">
                    {stage.quote}
                  </blockquote>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Instruction */}
        <div className="flex items-center justify-between border-t border-[#1F1F1F] pt-4 font-mono text-xs text-[#6E6E73] tracking-widest uppercase">
          <span>PINNED PINNACLE &middot; 3-STAGE SCROLL PROGRESSION</span>
          <span>CONTINUE SCROLLING DOWN &darr;</span>
        </div>
      </div>
    </section>
  );
}
