"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

interface SeasonRecord {
  season: string;
  year: string;
  points: string;
  goalDiff: string;
  outcome: string;
  isTrophy: boolean;
  trophiesCount: number;
  narrative: string;
}

const LEDGER: SeasonRecord[] = [
  {
    season: "1992/93",
    year: "1993",
    points: "84 PTS",
    goalDiff: "+36 GD",
    outcome: "PREMIER LEAGUE CHAMPIONS",
    isTrophy: true,
    trophiesCount: 1,
    narrative: "Inaugural Premier League title breaks the 26-year league drought. Eric Cantona proves the catalyst.",
  },
  {
    season: "1993/94",
    year: "1994",
    points: "92 PTS",
    goalDiff: "+42 GD",
    outcome: "THE HISTORIC DOUBLE (PL + FA CUP)",
    isTrophy: true,
    trophiesCount: 2,
    narrative: "Ferguson's first ruthless machine. First domestic Double in United history, anchored by Bruce & Pallister.",
  },
  {
    season: "1994/95",
    year: "1995",
    points: "88 PTS",
    goalDiff: "+49 GD",
    outcome: "RUNNERS-UP (FINAL DAY)",
    isTrophy: false,
    trophiesCount: 0,
    narrative: "Cantona Selhurst suspension. Title lost on final day by 1 point. The agonizing fuel for the coming era.",
  },
  {
    season: "1995/96",
    year: "1996",
    points: "82 PTS",
    goalDiff: "+38 GD",
    outcome: "THE DOUBLE-DOUBLE (PL + FA CUP)",
    isTrophy: true,
    trophiesCount: 2,
    narrative: "The Class of '92 takes over. Overcomes a 12-point deficit. Alan Hansen's prediction demolished.",
  },
  {
    season: "1996/97",
    year: "1997",
    points: "75 PTS",
    goalDiff: "+32 GD",
    outcome: "PREMIER LEAGUE CHAMPIONS",
    isTrophy: true,
    trophiesCount: 1,
    narrative: "Fourth league title in five seasons. Solskjær emerges with 18 goals. Cantona retires at the summit.",
  },
  {
    season: "1997/98",
    year: "1998",
    points: "77 PTS",
    goalDiff: "+47 GD",
    outcome: "RUNNERS-UP",
    isTrophy: false,
    trophiesCount: 0,
    narrative: "Arsenal clinch title by one point. Ferguson radically overhaul stamina regimes and acquires Dwight Yorke.",
  },
  {
    season: "1998/99",
    year: "1999",
    points: "79 PTS",
    goalDiff: "+43 GD",
    outcome: "THE CONTINENTAL TREBLE",
    isTrophy: true,
    trophiesCount: 3,
    narrative: "PL + FA Cup + UEFA Champions League in 10 days. Immortalized as the pinnacle of English club history.",
  },
];

export function TheClimb() {
  const containerRef = useRef<HTMLElement | null>(null);
  const rowsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const rows = rowsRef.current;
      if (!container || !rows) return;

      const rowElements = rows.querySelectorAll(".ledger-row");

      gsap.fromTo(
        rowElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "bottom 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    [],
    containerRef
  );

  return (
    <section
      ref={containerRef}
      id="the-climb"
      className="relative min-h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 padding-x py-20 md:py-28 flex flex-col justify-between select-none border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-flame font-semibold uppercase mb-1">
              ( ACT II // CHAPTER 03 &middot; 1993&ndash;1999 )
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase text-flax-smoke-50">
              The Relentless Ledger
            </h2>
          </div>
          <div className="font-mono text-xs text-flax-smoke-400 uppercase tracking-widest sm:text-right">
            ( 07 SEASONS &middot; 09 MAJOR HONOURS )
          </div>
        </div>

        {/* Minimalist Editorial Ledger */}
        <div ref={rowsRef} className="my-auto py-8 md:py-12 flex flex-col divide-y divide-white/10">
          {/* Table Column Labels */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-3 font-mono text-[11px] text-flax-smoke-400 uppercase tracking-widest">
            <div className="col-span-2">SEASON</div>
            <div className="col-span-4">CAMPAIGN OUTCOME</div>
            <div className="col-span-4">TURNING POINT &amp; HISTORICAL CONTEXT</div>
            <div className="col-span-2 text-right">METRICS</div>
          </div>

          {LEDGER.map((row) => (
            <div
              key={row.season}
              className="ledger-row group py-5 md:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center transition-all duration-300 hover:bg-[#141413] hover:px-4 -mx-4 rounded-xl"
            >
              {/* Season */}
              <div className="col-span-2 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-flame transition-colors" />
                <span className="font-mono text-base md:text-lg font-bold text-flax-smoke-50 tracking-tight">
                  {row.season}
                </span>
              </div>

              {/* Outcome */}
              <div className="col-span-4 flex items-center gap-2">
                <span
                  className={`font-display font-bold text-sm md:text-base tracking-tight ${
                    row.isTrophy ? "text-flax-smoke-50 group-hover:text-flame transition-colors" : "text-flax-smoke-400"
                  }`}
                >
                  {row.outcome}
                </span>
                {row.trophiesCount > 0 && (
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full bg-flame/15 text-flame border border-flame/30 shrink-0">
                    +{row.trophiesCount} TROPHY
                  </span>
                )}
              </div>

              {/* Narrative Context */}
              <div className="col-span-4 text-xs sm:text-sm text-flax-smoke-300 font-body leading-relaxed">
                {row.narrative}
              </div>

              {/* Metrics */}
              <div className="col-span-2 flex md:justify-end gap-3 font-mono text-xs text-flax-smoke-400">
                <span className="text-flax-smoke-100 font-semibold">{row.points}</span>
                <span className="text-white/20">&bull;</span>
                <span>{row.goalDiff}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5 font-mono text-xs text-flax-smoke-400 tracking-widest uppercase">
          <span>( SUMMIT APPROACHING &middot; THE 1999 PINNACLE NEXT )</span>
          <span>( 03 / 10 )</span>
        </div>
      </div>
    </section>
  );
}
