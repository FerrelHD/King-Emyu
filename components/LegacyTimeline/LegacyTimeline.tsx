"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

interface Milestone {
  year: string;
  tag: string;
  headline: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2003",
    tag: "THE PHENOMENON",
    headline: "Cristiano Ronaldo Arrives",
    description: "After dazzling in Lisbon during a pre-season friendly, Ferguson refused to leave Portugal without the 18-year-old winger, handing him the sacred No. 7 shirt.",
  },
  {
    year: "2004",
    tag: "THE STREET FIGHTER",
    headline: "Wayne Rooney's Electric Debut",
    description: "Signed for £27M at just 18, Rooney announced himself to Old Trafford with a ferocious Champions League debut hat-trick against Fenerbahçe.",
  },
  {
    year: "2008",
    tag: "MOSCOW MIDNIGHT",
    headline: "European Glory in the Rain",
    description: "Ronaldo's towering header, Edwin van der Sar's decisive penalty stop against Anelka, and a third European Cup hoisted in the torrential Moscow night.",
  },
  {
    year: "2011",
    tag: "THE PERCH DESTROYED",
    headline: "Nineteen: The Record Broken",
    description: "Wayne Rooney's penalty at Blackburn secures United's 19th English league title, officially surpassing Liverpool's historical total as promised in 1986.",
  },
  {
    year: "2013",
    tag: "THE SWAN SONG",
    headline: "Title No. 20 & Van Persie #20",
    description: "Robin van Persie's breathtaking volley against Aston Villa seals Ferguson's 13th Premier League crown and the club's milestone 20th league title.",
  },
];

export function LegacyTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 80),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + Math.max(600, track.scrollWidth - window.innerWidth + 250),
          invalidateOnRefresh: true,
        },
      });
    },
    [],
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      id="legacy-timeline"
      className="relative h-screen w-full bg-[#FAFAFA] text-[#0A0A0A] overflow-hidden select-none flex flex-col justify-between py-10 md:py-14"
    >
      {/* Top Header */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 md:px-16 flex items-end justify-between border-b border-[#E5E5E5] pb-4">
        <div>
          <div className="font-mono text-[11px] tracking-[0.25em] text-[#DA291C] font-semibold uppercase mb-1">
            ACT III &middot; CHAPTER 02 // 1999&ndash;2013
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase">
            The Later Dynasty
          </h2>
        </div>
        <div className="hidden sm:block font-mono text-xs text-[#8E8E93] uppercase tracking-widest text-right">
          CHRONOLOGICAL HORIZONTAL STREAM &middot; 5 MILESTONES
        </div>
      </div>

      {/* Horizontal Milestone Track */}
      <div className="w-full my-auto overflow-visible pl-6 sm:pl-10 md:pl-20 flex items-center">
        <div ref={trackRef} className="flex gap-6 md:gap-8 items-stretch pr-20">
          {MILESTONES.map((item, idx) => (
            <div
              key={item.year}
              data-cursor="VIEW"
              className="relative w-[280px] sm:w-[320px] shrink-0 bg-white border border-[#E5E5E5] p-7 flex flex-col justify-between shadow-sm hover:border-[#DA291C] transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#DA291C]">
                    {item.year}
                  </span>
                  <span className="font-mono text-[10px] text-[#8E8E93] font-bold tracking-widest uppercase">
                    0{idx + 1} / 05
                  </span>
                </div>

                <div className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-widest mb-1.5">
                  {item.tag}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-tight uppercase text-[#0A0A0A] leading-snug">
                  {item.headline}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#444444] font-body leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-[#F0F0F0] font-mono text-[11px] text-[#DA291C] font-semibold flex justify-between">
                <span>MILESTONE LOG</span>
                <span>ARCHIVED &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 md:px-16 flex justify-between items-center font-mono text-xs text-[#8E8E93] tracking-widest uppercase border-t border-[#E5E5E5] pt-4">
        <span>HORIZONTAL SCRUB &middot; RONALDO, ROONEY &amp; MOSCOW</span>
        <span>SCROLL TO FINALE &rarr;</span>
      </div>
    </section>
  );
}
