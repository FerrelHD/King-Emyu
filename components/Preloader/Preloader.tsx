"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export function Preloader({ onLoadingComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const [isDone, setIsDone] = useState(false);
  const onLoadingCompleteRef = useRef(onLoadingComplete);
  onLoadingCompleteRef.current = onLoadingComplete;

  useEffect(() => {
    const numberEl = numberRef.current;
    const container = containerRef.current;
    const progressBar = progressBarRef.current;
    const label = labelRef.current;

    if (!numberEl || !container) {
      setIsDone(true);
      onLoadingCompleteRef.current();
      return;
    }

    const counterObj = { year: 1986 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Upward curtain wipe exit
        gsap.to(container, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          onComplete: () => {
            setIsDone(true);
            onLoadingCompleteRef.current();
          },
        });
      },
    });

    // Animate year counter from 1986 to 2013
    tl.to(
      counterObj,
      {
        year: 2013,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          if (numberEl) {
            numberEl.textContent = Math.round(counterObj.year).toString();
          }
        },
      },
      "+=0.1"
    );

    // Progress bar scale
    if (progressBar) {
      tl.to(
        progressBar,
        {
          scaleX: 1,
          duration: 1.8,
          ease: "power2.inOut",
        },
        "<"
      );
    }

    // Fade out text elements before wipe
    tl.to([numberEl, label, progressBar], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
    });

    // Fallback safety timeout (max 3s)
    const safetyTimer = setTimeout(() => {
      setIsDone(true);
      onLoadingCompleteRef.current();
    }, 3200);

    return () => {
      clearTimeout(safetyTimer);
      tl.kill();
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="fixed inset-0 z-[9000] flex flex-col justify-between bg-[#0A0A0A] text-[#FAFAFA] p-8 md:p-16 select-none touch-none pointer-events-auto"
    >
      {/* Top Bar Metadata */}
      <div className="flex justify-between items-center text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#8E8E93]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#DA291C] animate-pulse" />
          <span>OLD TRAFFORD HISTORICAL ARCHIVE</span>
        </div>
        <div>DOSSIER: FERGUSON ERA</div>
      </div>

      {/* Centerpiece Year Counter */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="text-[11px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#8E8E93] mb-4">
          INITIATING CHRONOLOGY
        </div>
        <div className="overflow-hidden">
          <span
            ref={numberRef}
            className="block text-[18vw] font-black tracking-tighter leading-none text-[#FAFAFA] font-display"
          >
            1986
          </span>
        </div>
        <div
          ref={labelRef}
          className="text-xs md:text-sm font-mono tracking-widest text-[#8E8E93] uppercase mt-2"
        >
          26 Years &middot; 38 Trophies &middot; 1,500 Matches
        </div>

        {/* Minimal Progress Line */}
        <div className="w-48 md:w-80 h-[2px] bg-[#222222] mt-8 overflow-hidden rounded-full">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-[#DA291C] origin-left scale-x-0"
          />
        </div>
      </div>

      {/* Bottom Footer Metadata */}
      <div className="flex justify-between items-center text-[10px] md:text-xs font-mono text-[#6E6E73] tracking-widest uppercase">
        <span>06.11.1986 &mdash; 19.05.2013</span>
        <span>INDEX REF: SAF-38</span>
      </div>
    </div>
  );
}
