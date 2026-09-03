"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamEra {
  id: string;
  generation: string;
  title: string;
  season: string;
  description: string;
  honours: string;
  keyFigures: string;
  image: string;
}

const TEAMS: TeamEra[] = [
  {
    id: "01",
    generation: "THE FIRST MASTERPIECE",
    title: "The 1994 Double Winners",
    season: "1993&ndash;1994",
    description:
      "Ferguson's first truly ruthless side: Eric Cantona, Mark Hughes, Paul Ince, Bryan Robson, and the impenetrable defensive tandem of Bruce & Pallister. Secured United's inaugural domestic Double.",
    honours: "Premier League &middot; FA Cup &middot; Charity Shield",
    keyFigures: "Cantona, Hughes, Ince, Bruce, Schmeichel",
    image: "/images/team-1994.jpg",
  },
  {
    id: "02",
    generation: "THE CROWNING GLORY",
    title: "The 1999 Treble Immortals",
    season: "1998&ndash;1999",
    description:
      "The Class of '92 in full bloom: Beckham, Giggs, Scholes, and the Neville brothers matured into world-beaters alongside Roy Keane, Jaap Stam, and the Yorke-Cole strikeforce. Football's pinnacle.",
    honours: "Premier League &middot; FA Cup &middot; UEFA Champions League",
    keyFigures: "Keane, Beckham, Giggs, Scholes, Yorke, Cole",
    image: "/images/team-1999.png",
  },
  {
    id: "03",
    generation: "THE MODERN MACHINE",
    title: "The 2008 European Champions",
    season: "2007&ndash;2008",
    description:
      "A devastating counter-attacking juggernaut spearheaded by Cristiano Ronaldo, Wayne Rooney, and Carlos Tevez, anchored by Van der Sar and the granite partnership of Ferdinand & Vidić.",
    honours: "Premier League &middot; UEFA Champions League &middot; FIFA Club World Cup",
    keyFigures: "Ronaldo, Rooney, Tevez, Ferdinand, Vidić, Van der Sar",
    image: "/images/team-2008.jpg",
  },
];

const AUTO_PLAY_DURATION = 6000;

export function TheThreeTeams() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TEAMS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TEAMS.length) % TEAMS.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section
      id="three-teams"
      className="relative w-full bg-[#0A0A0A] text-flax-smoke-50 padding-y padding-x border-t border-white/10 select-none shadow-[0_-20px_50px_rgba(0,0,0,0.6)]"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-10 md:mb-14">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-flame font-semibold uppercase mb-1">
              ( ACT III // REBUILDING CYCLES &middot; 1994 &bull; 1999 &bull; 2008 )
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase text-flax-smoke-50">
              Three Dynasties. One Architect.
            </h2>
          </div>
          <div className="hidden sm:block font-mono text-xs text-flax-smoke-400 uppercase tracking-widest text-right">
            ( 26-YEAR TACTICAL EVOLUTION )
          </div>
        </div>

        {/* 2-Column Vertical Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <div className="flex flex-col space-y-3">
              {TEAMS.map((team, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={team.id}
                    onClick={() => handleTabClick(index)}
                    className={`group relative flex items-start gap-4 p-5 md:p-6 text-left transition-all duration-300 rounded-2xl border ${
                      isActive
                        ? "bg-[#141413] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                        : "bg-transparent border-transparent hover:bg-[#121211] hover:border-white/10"
                    }`}
                  >
                    {/* Active Red Progress Bar */}
                    <div className="absolute left-0 top-3 bottom-3 w-[3px] bg-white/10 rounded-full overflow-hidden">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-flame origin-top"
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="font-mono text-xs font-bold text-flax-smoke-400 mt-0.5 tabular-nums">
                      ( {team.id} )
                    </span>

                    <div className="flex flex-col gap-1.5 flex-1">
                      <span className="font-mono text-[10px] text-flame uppercase tracking-widest font-semibold">
                        {team.generation}
                      </span>
                      <span
                        className={`text-xl sm:text-2xl font-bold font-display tracking-tight transition-colors duration-300 ${
                          isActive ? "text-flax-smoke-50" : "text-flax-smoke-400 group-hover:text-flax-smoke-100"
                        }`}
                      >
                        {team.title}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs sm:text-sm text-flax-smoke-300 font-body leading-relaxed pt-2 pb-3">
                              {team.description}
                            </p>
                            <div className="pt-2 border-t border-white/10 font-mono text-[10px] text-flax-smoke-400 flex flex-col gap-1">
                              <div>
                                <span className="text-flax-smoke-100 font-bold">HONOURS: </span>
                                <span dangerouslySetInnerHTML={{ __html: team.honours }} />
                              </div>
                              <div>
                                <span className="text-flax-smoke-100 font-bold">KEY FIGURES: </span>
                                <span>{team.keyFigures}</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sliding Gallery Frame (Ferrel Style Card) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#121211] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 240, damping: 30 },
                      opacity: { duration: 0.35 },
                    }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={handleNext}
                  >
                    <Image
                      src={TEAMS[activeIndex].image}
                      alt={TEAMS[activeIndex].title}
                      fill
                      priority
                      sizes="(max-width: 1200px) 100vw, 800px"
                      className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Stamp Tag */}
                    <div className="absolute top-4 left-4 font-mono text-[10px] text-flame bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 tracking-widest uppercase font-bold">
                      ERA {TEAMS[activeIndex].id} // {TEAMS[activeIndex].generation}
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-4 left-4 right-16 font-mono text-[11px] text-flax-smoke-50 flex items-center justify-between">
                      <span className="font-bold tracking-wider">{TEAMS[activeIndex].title}</span>
                      <span className="text-flame" dangerouslySetInnerHTML={{ __html: TEAMS[activeIndex].season }} />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows (Rounded Blur Buttons) */}
                <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
                    aria-label="Previous Team Generation"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black flex items-center justify-center text-white transition-all active:scale-95 cursor-pointer"
                    aria-label="Next Team Generation"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-12 font-mono text-xs text-flax-smoke-400 tracking-widest uppercase">
          <span>( THREE DECADES OF HEGEMONY )</span>
          <span>( 1994 &bull; 1999 &bull; 2008 )</span>
        </div>
      </div>
    </section>
  );
}
