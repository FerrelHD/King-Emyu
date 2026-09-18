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
      className="relative h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 overflow-hidden select-none flex flex-col justify-between py-12 md:py-16 padding-x"
    >
      <div className="max-w-4xl mx-auto w-full h-full flex flex-col justify-between flex-1">
        {/* Top Header */}
        <div className="flex items-center justify-between font-mono text-xs text-flax-smoke-400 tracking-wider">
          <div className="flex items-center gap-2">
            <span className="text-flame font-medium">Epilogue</span>
            <span className="text-flax-smoke-600">&middot;</span>
            <span>12 May 2013</span>
          </div>
          <div className="hidden sm:block text-flax-smoke-500 uppercase tracking-widest text-[11px]">
            The Final Address &middot; Center Circle, Old Trafford
          </div>
        </div>

        {/* Main Centerpiece Word-By-Word Speech */}
        <div className="my-auto text-center py-8 flex flex-col justify-center">
          <div className="font-mono text-[11px] tracking-widest text-flax-smoke-500 uppercase mb-8">
            The Last Words to the Stretford End
          </div>

          <div
            ref={quoteRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight leading-snug max-w-3xl mx-auto"
          >
            {words.map((word, i) => {
              const isHighlight =
                i >= words.length - 9; // "Your job now is to stand by our new manager."
              return (
                <span
                  key={i}
                  className={`quote-word inline-block mr-2 sm:mr-3 opacity-15 transition-colors duration-300 ${
                    isHighlight ? "highlight-word font-black" : ""
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Dignified Editorial Sign-off */}
          <div ref={signRef} className="mt-12 sm:mt-16 flex flex-col items-center">
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-flax-smoke-50">
              Sir Alex Ferguson CBE
            </h3>
            <p className="font-mono text-xs text-flax-smoke-400 tracking-widest uppercase mt-1.5">
              Manager, Manchester United &middot; 1986 &mdash; 2013
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between font-mono text-xs text-flax-smoke-500 tracking-wider">
          <span>Match 1,500 &middot; 26 Years, 194 Days</span>
          <span>Old Trafford, Manchester</span>
        </div>
      </div>
    </section>
  );
}
