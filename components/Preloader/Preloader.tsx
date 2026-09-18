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

  useEffect(() => {
    onLoadingCompleteRef.current = onLoadingComplete;
  }, [onLoadingComplete]);

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
      <div className="flex justify-between items-center text-[10px] md:text-xs font-mono uppercase tracking-widest text-flax-smoke-400">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-flame" />
          <span>Manchester United Archive</span>
        </div>
        <div className="text-flax-smoke-500">Sir Alex Ferguson</div>
      </div>

      {/* Centerpiece Year Counter */}
      <div className="flex flex-col items-center justify-center my-auto">
        <div className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-flax-smoke-400 mb-3">
          Chronology
        </div>
        <div className="overflow-hidden">
          <span
            ref={numberRef}
            className="block text-[18vw] font-black tracking-tighter leading-none text-flax-smoke-50 font-display"
          >
            1986
          </span>
        </div>
        <div
          ref={labelRef}
          className="text-xs md:text-sm font-mono tracking-widest text-flax-smoke-400 uppercase mt-3"
        >
          26 Years &middot; 38 Trophies &middot; 1,500 Matches
        </div>

        {/* Minimal Progress Line */}
        <div className="w-44 md:w-72 h-[1.5px] bg-white/10 mt-8 overflow-hidden rounded-full">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-flame origin-left scale-x-0"
          />
        </div>
      </div>

      {/* Bottom Footer Metadata */}
      <div className="flex justify-between items-center text-[10px] md:text-xs font-mono text-flax-smoke-500 tracking-widest uppercase">
        <span>06 Nov 1986 &mdash; 19 May 2013</span>
        <span>Old Trafford, Manchester</span>
      </div>
    </div>
  );
}
