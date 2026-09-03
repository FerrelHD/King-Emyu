"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

export function FergieSignature() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stroke1Ref = useRef<SVGPathElement | null>(null);
  const stroke2Ref = useRef<SVGPathElement | null>(null);
  const stroke3Ref = useRef<SVGPathElement | null>(null);
  const stroke4Ref = useRef<SVGPathElement | null>(null);

  useGSAP(
    () => {
      const paths = [stroke1Ref.current, stroke2Ref.current, stroke3Ref.current, stroke4Ref.current].filter(
        Boolean
      ) as SVGPathElement[];

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      // Animate signature drawing when section is in view
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.8,
        stagger: 0.35,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    [],
    containerRef
  );

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center select-none pt-4">
      {/* Signature SVG Container */}
      <div className="relative w-64 sm:w-72 md:w-80 h-24 sm:h-28 overflow-visible">
        <svg
          viewBox="0 0 320 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-[0_0_8px_rgba(218,41,28,0.5)]"
        >
          {/* Stroke 1: Capital "A" & "lex" flourish */}
          <path
            ref={stroke1Ref}
            d="M 25,85 C 35,40 55,20 68,22 C 78,25 65,70 50,82 C 45,86 75,70 95,55 C 105,48 112,68 118,72"
            stroke="#FAFAFA"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stroke 2: Grand Capital "F" Loop and High Cross-Stroke */}
          <path
            ref={stroke2Ref}
            d="M 125,42 C 145,10 170,8 165,28 C 158,52 142,95 138,102 C 132,112 122,108 135,88 C 148,68 185,25 205,32"
            stroke="#DA291C"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stroke 3: "erguson" flowing cursive body */}
          <path
            ref={stroke3Ref}
            d="M 195,52 C 205,42 215,62 222,50 C 228,40 236,58 244,48 C 252,38 258,55 268,44 C 278,35 284,52 295,40"
            stroke="#FAFAFA"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Stroke 4: Energetic Underline Flourish & Dot */}
          <path
            ref={stroke4Ref}
            d="M 40,95 Q 160,82 290,68 M 305,62 A 2 2 0 1 1 305,66"
            stroke="#DA291C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Official Managerial Credential */}
      <div className="text-center mt-2">
        <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide">
          Sir Alexander Chapman Ferguson, CBE
        </div>
        <div className="font-mono text-[10px] text-[#8E8E93] tracking-widest uppercase mt-0.5">
          MANAGER &middot; MANCHESTER UNITED F.C. &middot; 1986&ndash;2013
        </div>
      </div>
    </div>
  );
}
