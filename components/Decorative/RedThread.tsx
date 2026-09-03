"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

// Architectural, direct, wide-sweeping curve spanning multiple sections
// (No confusing tight loops at the start, directly travels downward)
const MULTI_SECTION_PATH =
  "M 1120 40 C 920 380, 340 650, 220 1150 C 100 1600, 480 2000, 1220 2400 C 1420 2650, 1380 3150, 980 3500 C 580 3850, 180 4000, 160 4400 C 140 4800, 700 5000, 1140 5250";

interface RedThreadProps {
  targetZoneId: string;
}

export function RedThread({ targetZoneId }: RedThreadProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowPathRef = useRef<SVGPathElement | null>(null);
  const mainPathRef = useRef<SVGPathElement | null>(null);
  const corePathRef = useRef<SVGPathElement | null>(null);

  useGSAP(
    () => {
      const targetZone = document.getElementById(targetZoneId);
      const mainPath = mainPathRef.current;
      const glowPath = glowPathRef.current;
      const corePath = corePathRef.current;

      if (!targetZone || !mainPath) return;

      const totalLength = mainPath.getTotalLength();
      const paths = [glowPath, mainPath, corePath].filter(Boolean) as SVGPathElement[];

      paths.forEach((p) => {
        gsap.set(p, {
          strokeDasharray: totalLength,
          strokeDashoffset: totalLength,
        });
      });

      // Animate continuously across the multi-section zone
      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: targetZone,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1.2,
        },
      });
    },
    [targetZoneId],
    containerRef
  );

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-visible w-full h-full">
      <svg
        viewBox="0 0 1440 5300"
        fill="none"
        preserveAspectRatio="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-90"
      >
        {/* Layer 1: Ambient Red Glow */}
        <path
          ref={glowPathRef}
          d={MULTI_SECTION_PATH}
          stroke="#DA291C"
          strokeWidth="32"
          strokeLinecap="round"
          opacity="0.3"
          className="filter blur-[12px]"
        />

        {/* Layer 2: Main Solid Manchester United Crimson Line */}
        <path
          ref={mainPathRef}
          d={MULTI_SECTION_PATH}
          stroke="#DA291C"
          strokeWidth="16"
          strokeLinecap="round"
          className="filter drop-shadow-[0_0_18px_rgba(218,41,28,0.9)]"
        />

        {/* Layer 3: Radiant Core Filament */}
        <path
          ref={corePathRef}
          d={MULTI_SECTION_PATH}
          stroke="#FFA8A0"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
