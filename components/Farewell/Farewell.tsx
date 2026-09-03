"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";
import { FergieSignature } from "./FergieSignature";

const SPEECH_TEXT =
  "I would like to remind you that when we had bad times here, the club stood by me, all my staff stood by me, the players stood by me. Your job now is to stand by our new manager.";

export function Farewell() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const signRef = useRef<HTMLDivElement | null>(null);

  const words = SPEECH_TEXT.split(" ");

  useGSAP(
    () => {
      const section = sectionRef.current;
      const quote = quoteRef.current;
      const sign = signRef.current;
      if (!section || !quote) return;

      const wordSpans = quote.querySelectorAll(".quote-word");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          start: "top top",
          end: "+=220%",
        },
      });

      tl.to(wordSpans, {
        opacity: 1,
        color: (i, target) => {
          return target.classList.contains("highlight-word") ? "#DA291C" : "#FFFFFF";
        },
        stagger: 0.08,
        ease: "none",
      });

      if (sign) {
        tl.fromTo(
          sign,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
      }
    },
    [],
    sectionRef
  );

  return (
    <section
      ref={sectionRef}
      id="farewell"
      className="relative h-screen w-full bg-[#050505] text-[#FAFAFA] overflow-hidden select-none flex flex-col justify-between py-8 md:py-12 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-4xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#DA291C]" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#DA291C] font-semibold uppercase">
              EPILOGUE // 12 MAY 2013
            </span>
          </div>
          <div className="font-mono text-xs tracking-widest text-[#8E8E93] uppercase hidden sm:block">
            THE FAREWELL ADDRESS &middot; OLD TRAFFORD
          </div>
        </div>

        {/* Main Centerpiece Word-By-Word Speech & Signature */}
        <div className="my-auto text-center py-4 flex flex-col justify-center">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#8E8E93] uppercase mb-4">
            FINAL ORATION &middot; CENTER CIRCLE
          </div>

          <div
            ref={quoteRef}
            className="text-lg sm:text-2xl md:text-3xl font-bold font-display tracking-tight leading-relaxed uppercase max-w-3xl mx-auto"
          >
            {words.map((word, i) => {
              const isHighlight =
                i >= words.length - 9; // "Your job now is to stand by our new manager."
              return (
                <span
                  key={i}
                  className={`quote-word inline-block mr-1.5 sm:mr-2.5 opacity-15 transition-colors duration-300 ${
                    isHighlight ? "highlight-word font-black" : ""
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Animated Ferguson Signature */}
          <div ref={signRef} className="mt-6">
            <FergieSignature />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#1A1A1A] pt-4 font-mono text-xs text-[#6E6E73] tracking-widest uppercase">
          <span>MATCH 1,500 &middot; 26 YEARS, 194 DAYS AT THE HELM</span>
          <span>CLOSING COLOPHON &darr;</span>
        </div>
      </div>
    </section>
  );
}
