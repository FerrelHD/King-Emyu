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
    role: "Right Wing &middot; Specialist",
    debut: "September 1992",
    appearances: "394 Apps",
    trophies: "6 PL &bull; 2 FA &bull; 1 UCL",
    fergieQuote:
      "He practiced with a relentless discipline to achieve an accuracy that other players wouldn't even contemplate.",
  },
  {
    name: "Ryan Giggs",
    number: "11",
    role: "Left Wing &middot; Dynamic",
    debut: "March 1991",
    appearances: "963 Apps (Record)",
    trophies: "13 PL &bull; 4 FA &bull; 2 UCL",
    fergieQuote:
      "I remember the first time I saw him. He floated over the ground like a cocker spaniel chasing silver paper in the wind.",
  },
  {
    name: "Paul Scholes",
    number: "18",
    role: "Central Midfield &middot; Orchestrator",
    debut: "September 1994",
    appearances: "718 Apps",
    trophies: "11 PL &bull; 3 FA &bull; 2 UCL",
    fergieQuote:
      "One of the greatest football brains this club ever possessed. He saw passes before anyone else even looked.",
  },
  {
    name: "Gary Neville",
    number: "02",
    role: "Right Back &middot; Captain",
    debut: "September 1992",
    appearances: "602 Apps",
    trophies: "8 PL &bull; 3 FA &bull; 2 UCL",
    fergieQuote:
      "If he was an inch taller he'd be the best centre-half in Britain. The fiercest competitor I ever managed.",
  },
  {
    name: "Phil Neville",
    number: "03",
    role: "Full Back / Utility",
    debut: "January 1995",
    appearances: "386 Apps",
    trophies: "6 PL &bull; 3 FA &bull; 1 UCL",
    fergieQuote:
      "The quintessential team player. Wherever I put him on the pitch, he gave every ounce of his soul for United.",
  },
  {
    name: "Nicky Butt",
    number: "08",
    role: "Defensive Midfield &middot; Enforcer",
    debut: "November 1992",
    appearances: "387 Apps",
    trophies: "6 PL &bull; 3 FA &bull; 1 UCL",
    fergieQuote:
      "A streetfighter from Gorton. He would run through a brick wall for the badge and never ask for praise.",
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
      className="relative h-screen w-full bg-[#0A0A0A] text-[#FAFAFA] overflow-hidden select-none flex flex-col justify-between py-10 md:py-14"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 md:px-16 flex items-end justify-between border-b border-[#222222] pb-4">
        <div>
          <div className="font-mono text-[11px] tracking-[0.25em] text-[#DA291C] font-semibold uppercase mb-1">
            ACT I &middot; CHAPTER 02 // CARRINGTON ACADEMY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase">
            The Class of &apos;92
          </h2>
        </div>
        <div className="hidden md:block text-right">
          <div className="font-mono text-xs text-[#8E8E93] uppercase tracking-widest">
            &ldquo;You can&apos;t win anything with kids.&rdquo;
          </div>
          <div className="font-mono text-[10px] text-[#6E6E73] uppercase tracking-wider mt-0.5">
            &mdash; Alan Hansen, August 1995
          </div>
        </div>
      </div>

      {/* Horizontal Cards Wrapper */}
      <div
        ref={containerRef}
        className="w-full my-auto overflow-visible pl-6 sm:pl-10 md:pl-20 flex items-center"
      >
        <div ref={cardsRef} className="flex gap-6 items-stretch pr-20">
          {/* Introductory Architectural Dossier */}
          <div className="w-[300px] sm:w-[340px] shrink-0 bg-[#121212] border border-[#222222] p-8 flex flex-col justify-between">
            <div>
              <span className="text-[#DA291C] font-mono text-[11px] tracking-[0.3em] uppercase block mb-3 font-bold">
                THE FOUNDATIONAL DOCTRINE
              </span>
              <h3 className="text-2xl font-black font-display uppercase tracking-tight leading-tight">
                Homegrown Faith Over Quick Fixes
              </h3>
              <p className="mt-5 text-xs sm:text-sm text-[#A1A1A6] font-body leading-relaxed">
                When Mark Hughes, Paul Ince, and Andrei Kanchelskis were sold in the summer of 1995, critics called it madness. Ferguson refused to buy replacements, entrusting United&apos;s destiny to six youth academy graduates.
              </p>
            </div>
            <div className="pt-6 border-t border-[#1F1F1F] font-mono text-[11px] flex justify-between items-center">
              <span className="text-[#8E8E93]">FA YOUTH CUP</span>
              <span className="text-white font-bold">1992 REGISTRY</span>
            </div>
          </div>

          {/* Player Dossiers */}
          {GRADUATES.map((player) => (
            <div
              key={player.name}
              data-cursor="VIEW"
              className="group relative w-[280px] sm:w-[320px] shrink-0 bg-[#121212] hover:bg-[#161616] border border-[#222222] hover:border-[#DA291C] transition-all duration-300 p-7 flex flex-col justify-between"
            >
              <div>
                {/* Number & Role Header */}
                <div className="flex justify-between items-baseline border-b border-[#1F1F1F] pb-3">
                  <span className="font-display font-black text-4xl text-[#333333] group-hover:text-[#DA291C] transition-colors">
                    {player.number}
                  </span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-wider text-[#8E8E93]"
                    dangerouslySetInnerHTML={{ __html: player.role }}
                  />
                </div>

                {/* Player Name */}
                <h4 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white mt-4 uppercase">
                  {player.name}
                </h4>

                {/* Real Ferguson Quote */}
                <blockquote className="mt-4 text-xs sm:text-sm text-[#A1A1A6] leading-relaxed font-body italic border-l border-[#333333] pl-3">
                  &ldquo;{player.fergieQuote}&rdquo;
                </blockquote>
              </div>

              {/* Career Ledger Details */}
              <div className="pt-5 mt-6 border-t border-[#1F1F1F] font-mono text-[11px] flex flex-col gap-1.5">
                <div className="flex justify-between text-[#8E8E93]">
                  <span>RECORD:</span>
                  <span className="text-white font-semibold">{player.appearances}</span>
                </div>
                <div className="flex justify-between text-[#8E8E93]">
                  <span>HONOURS:</span>
                  <span className="text-[#DA291C]" dangerouslySetInnerHTML={{ __html: player.trophies }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Footer */}
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 md:px-16 flex justify-between items-center font-mono text-xs text-[#6E6E73] tracking-widest uppercase border-t border-[#222222] pt-4">
        <span>HORIZONTAL SCRUB &middot; 6 HOMEGROWN ICONS</span>
        <span>SCROLL TO PROGRESS &rarr;</span>
      </div>
    </section>
  );
}
