"use client";

import React, { useRef } from "react";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

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
          end: "+=180%",
        },
      });

      tl.to(wordSpans, {
        opacity: 1,
        color: (i, target) => {
          return target.classList.contains("highlight-word") ? "#DA291C" : "#fbfaf7";
        },
        stagger: 0.08,
        ease: "none",
      });

      if (sign) {
        tl.fromTo(
          sign,
          { opacity: 0, y: 20 },
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
      className="relative h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 overflow-hidden select-none flex flex-col justify-between py-10 md:py-14 padding-x border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-flame font-semibold uppercase tracking-wider">
            <span>( EPILOGUE // 12 MAY 2013 )</span>
          </div>
          <div className="font-mono text-xs tracking-widest text-flax-smoke-400 uppercase hidden sm:block">
            ( THE FINAL ADDRESS &middot; OLD TRAFFORD )
          </div>
        </div>

        {/* Main Centerpiece Word-By-Word Speech */}
        <div className="my-auto text-center py-6 flex flex-col justify-center">
          <div className="font-mono text-[10px] tracking-[0.3em] text-flax-smoke-400 uppercase mb-5">
            ( THE LAST SPEECH &middot; CENTER CIRCLE )
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

          {/* Dignified Editorial Sign-off (No Fake AI SVG) */}
          <div ref={signRef} className="mt-8 sm:mt-12 flex flex-col items-center">
            <div className="w-10 h-[1px] bg-flame mb-4" />
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-flax-smoke-50 uppercase">
              Sir Alexander Chapman Ferguson CBE
            </h3>
            <p className="font-mono text-xs text-flax-smoke-400 tracking-[0.2em] uppercase mt-1">
              Manager, Manchester United &middot; 1986 &mdash; 2013
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-flax-smoke-400 tracking-widest uppercase">
          <span>( MATCH 1,500 &middot; 26 YEARS, 194 DAYS )</span>
          <span>( 38 SILVERWARE HEIRS )</span>
        </div>
      </div>
    </section>
  );
}
