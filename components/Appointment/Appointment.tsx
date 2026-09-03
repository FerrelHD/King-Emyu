"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface CharacterProps {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
}

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0.05, 0.25], [distanceFromCenter * 10, 0]);
  const rotateX = useTransform(scrollYProgress, [0.05, 0.25], [distanceFromCenter * 15, 0]);
  const opacity = useTransform(scrollYProgress, [0.02, 0.2], [0.2, 1]);

  return (
    <motion.span
      className={`inline-block font-display font-black text-flax-smoke-50 ${
        isSpace ? "w-2 sm:w-3 md:w-4" : ""
      }`}
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
};

export function Appointment() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const text = "THE INHERITED SQUAD";
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  const photoScale = useTransform(scrollYProgress, [0.08, 0.28], [0.97, 1]);
  const photoOpacity = useTransform(scrollYProgress, [0.05, 0.22], [0.4, 1]);

  return (
    <section
      ref={targetRef}
      id="appointment"
      className="relative min-h-screen w-full bg-[#0A0A0A] text-flax-smoke-100 padding-x pt-24 sm:pt-28 pb-16 select-none flex flex-col justify-between border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-between flex-1">
        {/* Section Header Tag */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-flame font-semibold uppercase tracking-wider">
            <span>( ACT I // 06 NOVEMBER 1986 )</span>
          </div>
          <div className="font-mono text-xs tracking-widest text-flax-smoke-400 uppercase hidden sm:block">
            ( CHAPTER 01 // THE APPOINTMENT )
          </div>
        </div>

        {/* Dynamic Scattered -> Converging Typography (Clean Single Line) */}
        <div className="pt-8 pb-4 text-center">
          <div className="font-mono text-[10px] tracking-[0.25em] text-flax-smoke-400 uppercase mb-2">
            ( ARCHIVE DOSSIER // TEAM REGISTRATION )
          </div>

          <div
            className="w-full flex items-center justify-center whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-black uppercase tracking-tight overflow-hidden py-1"
            style={{ perspective: "500px" }}
          >
            {characters.map((char, index) => (
              <CharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={centerIndex}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          <p className="font-mono text-[10px] text-flax-smoke-400 tracking-widest uppercase mt-2">
            OLD TRAFFORD 1986/87 &middot; INHERITED 19TH POSITION IN FIRST DIVISION
          </p>
        </div>

        {/* Authentic 1986 Squad Archive Photograph Document Frame (Clean Minimalist) */}
        <motion.div
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="my-4 bg-[#121211] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-5 sm:p-7 md:p-8"
        >
          {/* Document Header Metadata Bar */}
          <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10 font-mono text-[11px] text-flax-smoke-400 uppercase">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-flame" />
              <span className="font-bold text-flax-smoke-100">MANCHESTER UNITED F.C. &middot; SQUAD POOL</span>
            </div>
            <div className="text-[10px] text-flame font-bold">
              RANK: 19TH // SAF-1986
            </div>
          </div>

          {/* Squad Photo Container */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-black/60 border border-white/10">
            <Image
              src="/images/squad-1986.jpg"
              alt="Manchester United 1986 Original Squad at Old Trafford"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center filter grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-700"
            />

            {/* Archival Stamp Overlay */}
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/20 text-flame px-3 py-1 rounded-full font-mono text-[9px] tracking-widest uppercase font-bold">
              RECORD // 1986/87
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-4 right-4 text-flax-smoke-100 font-mono text-[9px] sm:text-[11px] flex justify-between items-end">
              <span className="tracking-wider truncate">
                BRYAN ROBSON (C), NORMAN WHITESIDE, PAUL MCGRATH, GORDON STRACHAN
              </span>
              <span className="text-flame font-bold hidden md:inline shrink-0 ml-2">
                OLD TRAFFORD
              </span>
            </div>
          </div>

          {/* Minimalist 1-Line Iconic Mission Statement */}
          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <blockquote className="font-display font-bold text-sm sm:text-base text-flax-smoke-50 border-l-2 border-flame pl-3 italic">
              &ldquo;My greatest challenge was knocking Liverpool right off their perch. And you can print that.&rdquo;
            </blockquote>
            <span className="font-mono text-[10px] text-flax-smoke-400 uppercase tracking-widest shrink-0">
              &mdash; SIR ALEX FERGUSON, 1986
            </span>
          </div>
        </motion.div>

        {/* Section Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-flax-smoke-400 tracking-widest uppercase">
          <span>( NEXT // THE REBUILD &amp; CLASS OF &apos;92 )</span>
          <span>( 01 / 10 )</span>
        </div>
      </div>
    </section>
  );
}
