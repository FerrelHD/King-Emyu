"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

// Mathematically C1-continuous Bezier trajectory using SVG 'S' (Smooth Curveto)
// Guaranteed zero kinks, zero broken angles, and pure organic flowing curves
const SMOOTH_CONTINUOUS_PATH =
  "M 1180 40 C 880 420, 280 850, 240 1350 S 720 2050, 1200 2550 S 580 3250, 250 3750 S 850 4450, 1200 4900 S 680 5400, 720 5700";

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

      // Luxurious, slow-paced and silky-smooth scroll scrub
      // Extended scroll duration across the full journey so it never rushes
      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: targetZone,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 2.4, // Silky, cushioned inertia (bukan kecepetan / tersentak)
          invalidateOnRefresh: true,
        },
      });
    },
    [targetZoneId],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-visible w-full h-full select-none"
    >
      <svg
        viewBox="0 0 1440 5750"
        fill="none"
        preserveAspectRatio="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-90"
      >
        {/* Layer 1: Ambient Red Glow (Soft aura) */}
        <path
          ref={glowPathRef}
          d={SMOOTH_CONTINUOUS_PATH}
          stroke="#DA291C"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
          className="filter blur-[14px]"
        />

        {/* Layer 2: Main Solid Manchester United Crimson Line */}
        <path
          ref={mainPathRef}
          d={SMOOTH_CONTINUOUS_PATH}
          stroke="#DA291C"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="filter drop-shadow-[0_0_16px_rgba(218,41,28,0.85)]"
        />

        {/* Layer 3: Radiant Core Filament */}
        <path
          ref={corePathRef}
          d={SMOOTH_CONTINUOUS_PATH}
          stroke="#FFA8A0"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
