"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

interface MetricData {
  id: string;
  endValue: number;
  label: string;
  sublabel: string;
}

const SECONDARY_METRICS: MetricData[] = [
  {
    id: "metric-trophies",
    endValue: 38,
    label: "( MAJOR SILVERWARE )",
    sublabel: "13 PL &bull; 5 FA &bull; 4 LC &bull; 2 UCL",
  },
  {
    id: "metric-days",
    endValue: 9694,
    label: "( DAYS IN COMMAND )",
    sublabel: "06 Nov 1986 &mdash; 19 May 2013",
  },
  {
    id: "metric-goals",
    endValue: 2769,
    label: "( GOALS PLUNDERED )",
    sublabel: "1,500 Competitive Fixtures",
  },
  {
    id: "metric-titles",
    endValue: 20,
    label: "( THE PERCH DISMANTLED )",
    sublabel: "Knocked Liverpool Off Top",
  },
];

export function NumbersGrid() {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const mainEl = document.getElementById("main-metric-wins");
      if (mainEl) {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: 894,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "top 25%",
            scrub: 1.2,
          },
          onUpdate: () => {
            mainEl.textContent = Math.round(obj.val).toLocaleString();
          },
        });
      }

      SECONDARY_METRICS.forEach((m) => {
        const el = document.getElementById(m.id);
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: m.endValue,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            end: "top 20%",
            scrub: 1.2,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString();
          },
        });
      });
    },
    [],
    containerRef
  );

  return (
    <section
      ref={containerRef}
      id="numbers"
      className="relative min-h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 padding-x py-20 md:py-28 flex flex-col justify-between select-none border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-flame font-semibold uppercase mb-1">
              ( ACT III // DATA DOSSIER )
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase text-flax-smoke-50">
              The Colossal Scale
            </h2>
          </div>
          <div className="font-mono text-xs text-flax-smoke-400 uppercase tracking-widest sm:text-right">
            ( 26-YEAR EMPIRICAL RECORD )
          </div>
        </div>

        {/* Spacious Asymmetric Data Spread with Maximum Breathing Room */}
        <div className="my-auto py-12 md:py-16">
          {/* Monumental Hero Stat Spread */}
          <div className="border-b border-white/10 pb-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
              <div className="lg:col-span-6">
                <div className="font-mono text-xs text-flame tracking-[0.25em] uppercase font-bold mb-2">
                  ( MONUMENTAL RECORD )
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    id="main-metric-wins"
                    className="text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] font-black font-display tracking-tighter text-flax-smoke-50 leading-none tabular-nums"
                  >
                    0
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold font-display text-flame">
                    WINS
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-end">
                <div className="text-2xl sm:text-3xl font-display font-bold text-flax-smoke-50 tracking-tight">
                  59.67% Win Rate Across 1,500 Matches
                </div>
                <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-flax-smoke-400 uppercase tracking-wider">
                  <span>DRAWS: 338 (22.5%)</span>
                  <span>&bull;</span>
                  <span>LOSSES: 267 (17.8%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Clean Secondary Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {SECONDARY_METRICS.map((m) => (
              <div key={m.id} className="flex flex-col justify-between border-t border-white/10 pt-5">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-flax-smoke-400 uppercase mb-1">
                    {m.label}
                  </div>
                  <div
                    id={m.id}
                    className="text-4xl sm:text-5xl font-black font-display text-flax-smoke-50 tracking-tight tabular-nums"
                  >
                    0
                  </div>
                  <div
                    className="font-mono text-[11px] text-flame font-semibold mt-2"
                    dangerouslySetInnerHTML={{ __html: m.sublabel }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5 font-mono text-xs text-flax-smoke-400 tracking-widest uppercase">
          <span>( SOURCE // OFFICIAL MANCHESTER UNITED ARCHIVES )</span>
          <span>( 05 / 10 )</span>
        </div>
      </div>
    </section>
  );
}
