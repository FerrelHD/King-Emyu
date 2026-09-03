"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

interface TacticalBlueprintProps {
  isActive: boolean;
}

export function TacticalBlueprint({ isActive }: TacticalBlueprintProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cornerPathRef = useRef<SVGPathElement | null>(null);
  const flickPathRef = useRef<SVGPathElement | null>(null);
  const goalPathRef = useRef<SVGPathElement | null>(null);
  const goalBeaconRef = useRef<SVGCircleElement | null>(null);

  useGSAP(
    () => {
      if (!isActive) return;

      const corner = cornerPathRef.current;
      const flick = flickPathRef.current;
      const goal = goalPathRef.current;
      const beacon = goalBeaconRef.current;

      if (!corner || !flick || !goal || !beacon) return;

      const l1 = corner.getTotalLength();
      const l2 = flick.getTotalLength();
      const l3 = goal.getTotalLength();

      gsap.set([corner, flick, goal], {
        strokeDasharray: (i, t) => t.getTotalLength(),
        strokeDashoffset: (i, t) => t.getTotalLength(),
      });
      gsap.set(beacon, { scale: 0, opacity: 0, transformOrigin: "center center" });

      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

      // Step 1: Beckham corner delivery from TOP-LEFT corner flag
      tl.to(corner, { strokeDashoffset: 0, duration: 1.2 }, 0.2);

      // Step 2: Sheringham header glance
      tl.to(flick, { strokeDashoffset: 0, duration: 0.6 }, 1.3);

      // Step 3: Solskjær volley strike into net
      tl.to(goal, { strokeDashoffset: 0, duration: 0.5 }, 1.8);

      // Step 4: Goal flash beacon
      tl.to(beacon, { scale: 1.8, opacity: 1, duration: 0.4, ease: "back.out(2)" }, 2.2)
        .to(beacon, { scale: 1, duration: 0.3 }, 2.6);
    },
    [isActive],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#121211] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-5 sm:p-6 flex flex-col justify-between select-none"
    >
      {/* Blueprint Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 font-mono text-[10px] text-flax-smoke-400 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-flame animate-pulse" />
          <span className="text-flax-smoke-100 font-bold">( TACTICAL BLUEPRINT // 90+3&apos; CAMP NOU )</span>
        </div>
        <span className="text-flame font-bold">( 92:17 )</span>
      </div>

      {/* SVG Pitch Canvas */}
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-black/80 border border-white/10">
        <svg
          viewBox="0 0 500 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Pitch Outer Boundaries */}
          <rect x="20" y="15" width="460" height="250" stroke="#26231c" strokeWidth="1" strokeDasharray="3 3" />

          {/* Goal Frame (Top Center) */}
          <rect x="190" y="15" width="120" height="15" stroke="#575245" strokeWidth="1.5" fill="#141414" />
          <line x1="200" y1="15" x2="200" y2="30" stroke="#3b372e" strokeWidth="1" />
          <line x1="220" y1="15" x2="220" y2="30" stroke="#3b372e" strokeWidth="1" />
          <line x1="240" y1="15" x2="240" y2="30" stroke="#3b372e" strokeWidth="1" />
          <line x1="260" y1="15" x2="260" y2="30" stroke="#3b372e" strokeWidth="1" />
          <line x1="280" y1="15" x2="280" y2="30" stroke="#3b372e" strokeWidth="1" />
          <line x1="300" y1="15" x2="300" y2="30" stroke="#3b372e" strokeWidth="1" />

          {/* 6-Yard Box */}
          <rect x="160" y="15" width="180" height="45" stroke="#26231c" strokeWidth="1" />

          {/* Penalty Box (18-Yard) */}
          <rect x="90" y="15" width="320" height="110" stroke="#3b372e" strokeWidth="1.2" />

          {/* Penalty Arc */}
          <path d="M 190,125 A 60 60 0 0 0 310,125" stroke="#26231c" strokeWidth="1" strokeDasharray="3 3" fill="none" />

          {/* Penalty Spot */}
          <circle cx="250" cy="85" r="2" fill="#3b372e" />

          {/* Top-Left Corner Arc (Byline Corner Flag) */}
          <path d="M 20,35 A 20 20 0 0 0 40,15" stroke="#DA291C" strokeWidth="2" fill="none" />

          {/* Tactical Action 1: Beckham Outswing Corner from TOP-LEFT CORNER FLAG */}
          <path
            ref={cornerPathRef}
            d="M 24,18 Q 130,115 270,78"
            stroke="#DA291C"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="filter drop-shadow-[0_0_6px_rgba(218,41,28,0.8)]"
          />

          {/* Tactical Action 2: Sheringham Header Flick */}
          <path
            ref={flickPathRef}
            d="M 270,78 Q 255,58 236,44"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            className="filter drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
          />

          {/* Tactical Action 3: Solskjær Volley into Roof of Net */}
          <path
            ref={goalPathRef}
            d="M 236,44 L 225,18"
            stroke="#FFDD00"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            className="filter drop-shadow-[0_0_8px_rgba(255,221,0,0.9)]"
          />

          {/* Flash Goal Beacon at Goalmouth */}
          <circle
            ref={goalBeaconRef}
            cx="225"
            cy="18"
            r="7"
            fill="#FFDD00"
            stroke="#FFFFFF"
            strokeWidth="2"
          />

          {/* Player Node 1: Beckham at Top-Left Corner Flag */}
          <circle cx="24" cy="18" r="4" fill="#DA291C" />
          <text x="32" y="30" fill="#DA291C" fontSize="9" fontFamily="monospace" fontWeight="bold">
            [1] BECKHAM (CORNER)
          </text>

          {/* Player Node 2: Sheringham in the box */}
          <circle cx="270" cy="78" r="4" fill="#FFFFFF" />
          <text x="280" y="82" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">
            [2] SHERINGHAM (FLICK)
          </text>

          {/* Player Node 3: Solskjær at far post */}
          <circle cx="236" cy="44" r="4" fill="#FFDD00" />
          <text x="246" y="47" fill="#FFDD00" fontSize="9" fontFamily="monospace" fontWeight="bold">
            [3] SOLSKJÆR (VOLLEY)
          </text>

          {/* Goal Marker Label */}
          <text x="145" y="10" fill="#FFDD00" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="1">
            GOAL (92:17) &bull; 2-1
          </text>
        </svg>
      </div>

      {/* Blueprint Legend / Telemetry */}
      <div className="mt-3 pt-3 border-t border-white/10 grid grid-cols-3 gap-2 font-mono text-[9px] text-flax-smoke-400 uppercase">
        <div>
          <span className="text-flame font-bold">PHASE 1: </span>
          <span>Byline corner (0.00s)</span>
        </div>
        <div>
          <span className="text-flax-smoke-100 font-bold">PHASE 2: </span>
          <span>Downward glance (+1.12s)</span>
        </div>
        <div>
          <span className="text-[#FFDD00] font-bold">PHASE 3: </span>
          <span>Toe-poke into roof (+1.85s)</span>
        </div>
      </div>
    </div>
  );
}
