"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

interface MetricData {
  id: string;
  endValue: number;
  label: string;
  sublabel: string;
  detail: string;
}

const SECONDARY_METRICS: MetricData[] = [
  {
    id: "metric-trophies",
    endValue: 38,
    label: "MAJOR SILVERWARE",
    sublabel: "13 PL &bull; 5 FA Cup &bull; 4 League Cup &bull; 2 UCL",
    detail: "The most decorated managerial tenure in European football history.",
  },
  {
    id: "metric-days",
    endValue: 9694,
    label: "DAYS IN COMMAND",
    sublabel: "06 Nov 1986 &mdash; 19 May 2013",
    detail: "Spanned five UK prime ministers and twenty-four Chelsea managers.",
  },
  {
    id: "metric-goals",
    endValue: 2769,
    label: "GOALS PLUNDERED",
    sublabel: "1,500 Total Competitive Fixtures",
    detail: "An unrelenting attacking philosophy defined by fearless pace and wing play.",
  },
  {
    id: "metric-titles",
    endValue: 20,
    label: "THE PERCH DISMANTLED",
    sublabel: "From 7 to 20 League Championships",
    detail: "Knocked Liverpool off their historic perch, ending their dominance forever.",
  },
];

export function NumbersGrid() {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Primary Hero Metric: 894 Wins
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

      // Secondary Metrics
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
      className="relative min-h-screen w-full bg-[#FAFAFA] text-[#0A0A0A] px-6 sm:px-10 md:px-16 py-20 md:py-28 flex flex-col justify-between select-none"
    >
      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E5E5E5] pb-6 gap-4">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-[#DA291C] font-semibold uppercase mb-1">
              ACT III &middot; CHAPTER 02 // HISTORICAL AGGREGATE
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase">
              The Colossal Scale
            </h2>
          </div>
          <div className="font-mono text-xs text-[#8E8E93] uppercase tracking-widest sm:text-right">
            26-YEAR EMPIRICAL RECORD
          </div>
        </div>

        {/* Editorial Asymmetric Data Spread */}
        <div className="my-auto py-10 md:py-14">
          {/* Monumental Hero Stat Spread */}
          <div className="border-b border-[#E5E5E5] pb-10 md:pb-12 mb-10 md:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
              <div className="lg:col-span-6">
                <div className="font-mono text-xs text-[#DA291C] tracking-[0.25em] uppercase font-bold mb-2">
                  MONUMENTAL VICTORY TALLY
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    id="main-metric-wins"
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black font-display tracking-tighter text-[#0A0A0A] leading-none tabular-nums"
                  >
                    0
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-display text-[#DA291C]">
                    WINS
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-end">
                <p className="text-base sm:text-lg md:text-xl font-body text-[#333333] leading-relaxed">
                  Across 1,500 total matches managed at Manchester United, Ferguson maintained an unprecedented <span className="font-bold text-[#0A0A0A]">59.67% win rate</span> across four separate decades.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs text-[#6E6E73] uppercase tracking-wider">
                  <span>DRAWS: 338 (22.5%)</span>
                  <span>&bull;</span>
                  <span>LOSSES: 267 (17.8%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Clean Secondary Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {SECONDARY_METRICS.map((m) => (
              <div key={m.id} className="flex flex-col justify-between border-t border-[#E5E5E5] pt-5">
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-[#8E8E93] uppercase mb-1">
                    {m.label}
                  </div>
                  <div
                    id={m.id}
                    className="text-3xl sm:text-4xl font-black font-display text-[#0A0A0A] tracking-tight tabular-nums"
                  >
                    0
                  </div>
                  <div
                    className="font-mono text-[11px] text-[#DA291C] font-semibold mt-1"
                    dangerouslySetInnerHTML={{ __html: m.sublabel }}
                  />
                </div>

                <p className="mt-4 text-xs text-[#6E6E73] font-body leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-5 font-mono text-xs text-[#8E8E93] tracking-widest uppercase">
          <span>SOURCE: OFFICIAL MANCHESTER UNITED ARCHIVES</span>
          <span>05 / 10</span>
        </div>
      </div>
    </section>
  );
}
