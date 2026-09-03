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
      className={`inline-block font-display font-black text-[#0A0A0A] ${
        isSpace ? "w-2 sm:w-3 md:w-4" : ""
      }`}
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
};

const Bracket = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
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
      className="relative min-h-screen w-full bg-[#FAFAFA] text-[#0A0A0A] px-6 sm:px-10 md:px-16 pt-28 sm:pt-32 pb-16 select-none flex flex-col justify-between"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-between flex-1">
        {/* Section Header Tag */}
        <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
          <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#DA291C] font-semibold uppercase">
            <span>ACT I &middot; THE REBUILD</span>
            <span className="text-[#A1A1A6]">/</span>
            <span className="text-[#0A0A0A]">06 NOVEMBER 1986</span>
          </div>
          <div className="font-mono text-xs tracking-widest text-[#8E8E93] uppercase hidden sm:block">
            CHAPTER 01 &middot; THE APPOINTMENT
          </div>
        </div>

        {/* Dynamic Scattered -> Converging Typography (Strictly Single Clean Line) */}
        <div className="pt-8 pb-4 text-center">
          <div className="flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#8E8E93] uppercase mb-2">
            <Bracket className="h-4 w-2 text-[#DA291C]" />
            <span>ARCHIVE DOSSIER // TEAM REGISTRATION</span>
            <Bracket className="h-4 w-2 scale-x-[-1] text-[#DA291C]" />
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

          <p className="font-mono text-[11px] text-[#8E8E93] tracking-widest uppercase mt-2">
            OLD TRAFFORD 1986/87 &middot; FERGUSON INHERITS 19TH POSITION
          </p>
        </div>

        {/* Authentic 1986 Squad Archive Photograph Document Frame */}
        <motion.div
          style={{ scale: photoScale, opacity: photoOpacity }}
          className="my-4 bg-white border border-[#E0E0E0] shadow-sm p-4 sm:p-6 md:p-7"
        >
          {/* Document Header Metadata Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 mb-4 border-b border-[#EBEBEB] font-mono text-[11px] text-[#6E6E73] uppercase">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#DA291C]" />
              <span className="font-bold text-[#0A0A0A]">MANCHESTER UNITED F.C. &middot; FIRST TEAM POOL</span>
            </div>
            <div className="flex items-center gap-4 text-[10px]">
              <span>LEAGUE POSITION: 19TH</span>
              <span className="text-[#DA291C] font-bold">REF: SAF-1986</span>
            </div>
          </div>

          {/* Squad Photo Container */}
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#111111] border border-[#E5E5E5]">
            <Image
              src="/images/squad-1986.jpg"
              alt="Manchester United 1986 Original Squad at Old Trafford"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center filter grayscale contrast-110 brightness-95 hover:grayscale-0 transition-all duration-700"
            />

            {/* Vintage Archival Stamp Overlay */}
            <div className="absolute top-3 right-3 bg-[#0A0A0A]/85 backdrop-blur-sm border border-[#DA291C] text-[#DA291C] px-2.5 py-1 font-mono text-[9px] tracking-widest uppercase font-bold shadow-md">
              AUTHENTIC RECORD // 1986/87
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-2.5 left-3 right-3 text-white font-mono text-[9px] sm:text-[11px] flex justify-between items-end">
              <span className="tracking-wider truncate">
                BRYAN ROBSON, NORMAN WHITESIDE, PAUL MCGRATH, GORDON STRACHAN, FRANK STAPLETON
              </span>
              <span className="text-[#DA291C] font-bold hidden md:inline shrink-0 ml-2">
                OLD TRAFFORD
              </span>
            </div>
          </div>

          {/* Editorial Context */}
          <div className="mt-5 pt-4 border-t border-[#EBEBEB] grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            <div className="md:col-span-4 font-mono text-xs text-[#6E6E73] uppercase leading-relaxed">
              <div className="text-[#0A0A0A] font-bold mb-1">Squad Inherited (Nov 1986):</div>
              <div>Bryan Robson (C) &middot; Norman Whiteside</div>
              <div>Paul McGrath &middot; Gordon Strachan</div>
              <div>Goal Difference: -5 &middot; Rank: 19th</div>
            </div>

            <div className="md:col-span-8 text-xs sm:text-sm text-[#444444] font-body leading-relaxed">
              <p>
                When Alex Ferguson walked into this dressing room on November 6, 1986, he inherited exceptional talent crippled by an entrenched drinking culture and fragile fitness. Ferguson immediately instituted mandatory discipline, dismantled cliques, and proclaimed his historic mission:
              </p>
              <blockquote className="mt-2.5 font-display font-bold text-sm sm:text-base text-[#0A0A0A] border-l-2 border-[#DA291C] pl-3 italic">
                &ldquo;My greatest challenge was knocking Liverpool right off their perch. And you can print that.&rdquo;
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Section Footer */}
        <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-4 font-mono text-xs text-[#8E8E93] tracking-widest uppercase">
          <span>NEXT: THE REBUILD &amp; CLASS OF &apos;92</span>
          <span>01 / 10</span>
        </div>
      </div>
    </section>
  );
}
