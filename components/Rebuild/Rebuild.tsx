"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

interface PlayerDossier {
  name: string;
  number: string;
  role: string;
  debut: string;
  appearances: string;
  trophies: string;
  fergieQuote: string;
}

const GRADUATES: PlayerDossier[] = [
  {
    name: "David Beckham",
    number: "07",
    role: "Right Wing Specialist",
    debut: "September 1992",
    appearances: "394 Apps",
    trophies: "6 PL &bull; 2 FA &bull; 1 UCL",
    fergieQuote:
      "He practiced with a relentless discipline to achieve an accuracy that others wouldn't contemplate.",
  },
  {
    name: "Ryan Giggs",
    number: "11",
    role: "Left Wing Maestro",
    debut: "March 1991",
    appearances: "963 Apps (Record)",
    trophies: "13 PL &bull; 4 FA &bull; 2 UCL",
    fergieQuote:
      "He floated over the ground like a cocker spaniel chasing silver paper in the wind.",
  },
  {
    name: "Paul Scholes",
    number: "18",
    role: "Central Orchestrator",
    debut: "September 1994",
    appearances: "718 Apps",
    trophies: "11 PL &bull; 3 FA &bull; 2 UCL",
    fergieQuote:
      "One of the greatest football brains this club ever possessed. He saw passes before anyone else.",
  },
  {
    name: "Gary Neville",
    number: "02",
    role: "Right Back &middot; Captain",
    debut: "September 1992",
    appearances: "602 Apps",
    trophies: "8 PL &bull; 3 FA &bull; 2 UCL",
    fergieQuote:
      "If he was an inch taller he'd be the best centre-half in Britain. A fierce, relentless competitor.",
  },
  {
    name: "Phil Neville",
    number: "03",
    role: "Full Back / Utility",
    debut: "January 1995",
    appearances: "386 Apps",
    trophies: "6 PL &bull; 3 FA &bull; 1 UCL",
    fergieQuote:
      "The quintessential team player. Wherever I put him, he gave every ounce of his soul for United.",
  },
  {
    name: "Nicky Butt",
    number: "08",
    role: "Defensive Enforcer",
    debut: "November 1992",
    appearances: "387 Apps",
    trophies: "6 PL &bull; 3 FA &bull; 1 UCL",
    fergieQuote:
      "A streetfighter from Gorton. He would run through a brick wall for the badge.",
  },
];

export function Rebuild() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardsRef.current;
      if (!section || !cards) return;

      gsap.to(cards, {
        x: () => -(cards.scrollWidth - window.innerWidth + 80),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + Math.max(600, cards.scrollWidth - window.innerWidth + 250),
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
      id="rebuild"
      className="relative h-screen w-full bg-transparent text-flax-smoke-50 overflow-hidden select-none flex flex-col justify-between py-10 md:py-14"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto w-full padding-x flex items-end justify-between border-b border-white/10 pb-4">
        <div>
          <div className="font-mono text-[11px] tracking-[0.25em] text-flame font-semibold uppercase mb-1">
            ( ACT I // CHAPTER 02 &middot; 1992 )
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase">
            The Class of &apos;92
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <div className="font-mono text-xs text-flax-smoke-300 uppercase tracking-widest">
            &ldquo;You can&apos;t win anything with kids.&rdquo;
          </div>
          <div className="font-mono text-[10px] text-flax-smoke-400 uppercase tracking-wider mt-0.5">
            &mdash; Alan Hansen, August 1995
          </div>
        </div>
      </div>

      {/* Horizontal Cards Wrapper */}
      <div
        ref={containerRef}
        className="w-full my-auto overflow-visible pl-[4%] sm:pl-[5%] lg:pl-[6%] flex items-center"
      >
        <div ref={cardsRef} className="flex gap-6 items-stretch pr-20">
          {/* Introductory Doctrine Card */}
          <div className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl bg-[#121211] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-7 flex flex-col justify-between">
            <div>
              <span className="text-flame font-mono text-[10px] tracking-[0.3em] uppercase block mb-2 font-bold">
                ( THE DOCTRINE )
              </span>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight leading-tight text-flax-smoke-50">
                Homegrown Faith Over Quick Fixes
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-flax-smoke-300 font-body leading-relaxed">
                Ferguson refused to buy senior replacements in 1995, entrusting the club&apos;s future to six teenagers.
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 font-mono text-[11px] flex justify-between items-center text-flax-smoke-400">
              <span>( FA YOUTH CUP )</span>
              <span className="text-flax-smoke-50 font-bold">1992 REGISTRY</span>
            </div>
          </div>

          {/* Minimalist Player Dossiers */}
          {GRADUATES.map((player) => (
            <div
              key={player.name}
              className="group relative w-[260px] sm:w-[290px] shrink-0 rounded-2xl bg-[#121211] hover:bg-[#181817] border border-white/10 hover:border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Number & Role Header */}
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="font-display font-black text-3xl sm:text-4xl text-flax-smoke-700 group-hover:text-flame transition-colors">
                    {player.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-flax-smoke-400">
                    {player.role}
                  </span>
                </div>

                {/* Player Name */}
                <h4 className="text-xl sm:text-2xl font-black font-display tracking-tight text-flax-smoke-50 mt-4 uppercase">
                  {player.name}
                </h4>

                {/* Real Ferguson Quote */}
                <blockquote className="mt-3 text-xs text-flax-smoke-300 leading-relaxed font-body italic border-l border-white/15 pl-3">
                  &ldquo;{player.fergieQuote}&rdquo;
                </blockquote>
              </div>

              {/* Career Ledger Details */}
              <div className="pt-4 mt-5 border-t border-white/10 font-mono text-[10px] sm:text-[11px] flex flex-col gap-1">
                <div className="flex justify-between text-flax-smoke-400">
                  <span>RECORD:</span>
                  <span className="text-flax-smoke-100 font-semibold">{player.appearances}</span>
                </div>
                <div className="flex justify-between text-flax-smoke-400">
                  <span>HONOURS:</span>
                  <span className="text-flame" dangerouslySetInnerHTML={{ __html: player.trophies }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Footer */}
      <div className="max-w-7xl mx-auto w-full padding-x flex justify-between items-center font-mono text-xs text-flax-smoke-400 tracking-widest uppercase border-t border-white/10 pt-4">
        <span>( 06 HOMEGROWN ICONS )</span>
        <span>( SCROLL TO PROGRESS &rarr; )</span>
      </div>
    </section>
  );
}
