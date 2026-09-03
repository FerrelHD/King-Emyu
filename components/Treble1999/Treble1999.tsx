"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

interface TrebleStage {
  step: string;
  date: string;
  trophy: string;
  opponent: string;
  scoreline: string;
  venue: string;
  highlight: string;
}

const STAGES: TrebleStage[] = [
  {
    step: "01",
    date: "16 MAY 1999",
    trophy: "The Premier League",
    opponent: "Tottenham Hotspur",
    scoreline: "2 — 1",
    venue: "Old Trafford",
    highlight:
      "Trailing on the final day with Arsenal level on points. Beckham's curling masterstroke and Andy Cole's sublime lob secure the title by one point.",
  },
  {
    step: "02",
    date: "22 MAY 1999",
    trophy: "The FA Cup",
    opponent: "Newcastle United",
    scoreline: "2 — 0",
    venue: "Wembley Stadium",
    highlight:
      "Roy Keane limps off after 9 minutes. Teddy Sheringham strikes in 90 seconds, then tees up Paul Scholes. The Double is sealed.",
  },
  {
    step: "03",
    date: "26 MAY 1999",
    trophy: "Champions League",
    opponent: "Bayern Munich",
    scoreline: "2 — 1",
    venue: "Camp Nou, Barcelona",
    highlight:
      "Trailing 1-0 in the 90th minute without Keane and Scholes. Two stoppage-time corners: Sheringham 90+1', Solskjær 90+3'. The impossible Treble.",
  },
];

export function Treble1999() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardsRef.current;
      if (!section || !cards) return;

      const cols = cards.querySelectorAll(".treble-col");

      gsap.fromTo(
        cols,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cards,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    [],
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      id="treble-1999"
      className="relative min-h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 padding-x py-24 md:py-32 flex flex-col justify-between select-none border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-flame font-semibold uppercase mb-1">
              ( CHAPTER 02 // MAY 1999 )
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight uppercase text-flax-smoke-50">
              The Treble
            </h2>
          </div>
          <div className="font-mono text-xs text-flax-smoke-400 uppercase tracking-widest sm:text-right">
            ( 10 DAYS &middot; THREE TROPHIES &middot; IMMORTALITY )
          </div>
        </div>

        {/* 3 Pure Frameless Editorial Columns */}
        <div
          ref={cardsRef}
          className="my-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start"
        >
          {STAGES.map((stage) => (
            <div
              key={stage.step}
              className="treble-col flex flex-col justify-between space-y-6"
            >
              {/* Step & Date */}
              <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                <span className="font-display font-black text-4xl text-flame">
                  {stage.step}
                </span>
                <span className="font-mono text-[11px] tracking-widest text-flax-smoke-400 uppercase">
                  {stage.date}
                </span>
              </div>

              {/* Trophy & Match */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-flax-smoke-50 uppercase leading-snug">
                  {stage.trophy}
                </h3>
                <div className="mt-2 font-mono text-xs text-flame tracking-wider uppercase">
                  vs {stage.opponent} &bull; {stage.scoreline}
                </div>
                <div className="font-mono text-[11px] text-flax-smoke-400 uppercase mt-0.5">
                  {stage.venue}
                </div>
              </div>

              {/* Narrative */}
              <p className="text-sm text-flax-smoke-300 font-body leading-relaxed font-normal">
                {stage.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Immortal Quote Anchor */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <blockquote className="font-display text-xl sm:text-2xl font-bold text-flax-smoke-50 tracking-tight uppercase italic">
            &ldquo;Football, bloody hell.&rdquo;
          </blockquote>
          <div className="font-mono text-xs text-flame tracking-widest uppercase">
            &mdash; Sir Alex Ferguson, Camp Nou Tunnel
          </div>
        </div>
      </div>
    </section>
  );
}
