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
    label: "Major Honours",
    sublabel: "13 Premier Leagues &bull; 5 FA &bull; 2 UCL",
  },
  {
    id: "metric-days",
    endValue: 9694,
    label: "Days in Command",
    sublabel: "06 Nov 1986 &mdash; 19 May 2013",
  },
  {
    id: "metric-goals",
    endValue: 2769,
    label: "Goals Scored",
    sublabel: "Across 1,500 Fixtures",
  },
  {
    id: "metric-titles",
    endValue: 20,
    label: "League Titles",
    sublabel: "English Record Total",
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
      className="relative min-h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 padding-x py-32 md:py-48 flex flex-col justify-between select-none"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-flame tracking-wider uppercase mb-2">
              Chapter 03 &mdash; Empirical Record
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight uppercase text-flax-smoke-50">
              The Scale of Dominance
            </h2>
          </div>
          <div className="font-mono text-xs text-flax-smoke-500 uppercase tracking-widest">
            1,500 Fixtures &middot; 26 Years &middot; 38 Honours
          </div>
        </div>

        {/* Spacious Asymmetric Data Spread with Maximum Breathing Room */}
        <div className="my-auto py-20 md:py-28">
          {/* Monumental Hero Stat Spread */}
          <div className="pb-16 md:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
              <div className="lg:col-span-7">
                <div className="font-mono text-xs text-flame tracking-wider uppercase font-medium mb-3">
                  All Competitive Competitions
                </div>
                <div className="flex items-baseline gap-4">
                  <span
                    id="main-metric-wins"
                    className="text-7xl sm:text-8xl md:text-9xl lg:text-[9.5rem] font-black font-display tracking-tighter text-flax-smoke-50 leading-none tabular-nums"
                  >
                    0
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold font-display text-flame uppercase">
                    Wins
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-end">
                <div className="text-2xl sm:text-3xl font-display font-bold text-flax-smoke-50 tracking-tight">
                  59.7% Win Rate across 1,500 Matches
                </div>
                <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-flax-smoke-400 tracking-wider">
                  <span>Draws: 338 (22.5%)</span>
                  <span>&bull;</span>
                  <span>Losses: 267 (17.8%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Clean Secondary Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 pt-8">
            {SECONDARY_METRICS.map((m) => (
              <div key={m.id} className="flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs tracking-wider text-flax-smoke-400 uppercase mb-2">
                    {m.label}
                  </div>
                  <div
                    id={m.id}
                    className="text-4xl sm:text-5xl font-black font-display text-flax-smoke-50 tracking-tight tabular-nums"
                  >
                    0
                  </div>
                  <div
                    className="font-mono text-[11px] text-flax-smoke-500 mt-2"
                    dangerouslySetInnerHTML={{ __html: m.sublabel }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className="flex items-center justify-between font-mono text-xs text-flax-smoke-500 tracking-wider">
          <span>Official Historical Registry</span>
          <span>12 May 2013 &rarr;</span>
        </div>
      </div>
    </section>
  );
}
