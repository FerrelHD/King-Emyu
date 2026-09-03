"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";

export function Appointment() {
  const containerRef = useRef<HTMLElement | null>(null);
  const photoRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const photo = photoRef.current;
      const text = textRef.current;
      if (!container) return;

      if (photo) {
        gsap.fromTo(
          photo,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: photo,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    [],
    containerRef
  );

  return (
    <section
      ref={containerRef}
      id="appointment"
      className="relative min-h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 padding-x py-24 md:py-32 flex flex-col justify-between select-none border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-between flex-1">
        {/* Section Header Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-6 gap-4">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-flame font-semibold uppercase mb-1">
              ( CHAPTER 01 // 06 NOVEMBER 1986 )
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight uppercase text-flax-smoke-50">
              The Arrival & The Perch
            </h2>
          </div>
          <div className="font-mono text-xs text-flax-smoke-400 uppercase tracking-widest sm:text-right">
            ( OLD TRAFFORD &middot; INHERITED 19TH POSITION )
          </div>
        </div>

        {/* Frameless Editorial Grid: Authentic B&W Squad Photo + Monumental Doctrine */}
        <div className="my-auto py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authentic 1986 Squad Photo (Frameless, Clean) */}
          <div ref={photoRef} className="lg:col-span-7 flex flex-col space-y-3">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-black/40">
              <Image
                src="/images/squad-1986.jpg"
                alt="Manchester United 1986 Inherited Squad at Old Trafford"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter grayscale contrast-110 brightness-90 hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="flex items-center justify-between font-mono text-[11px] text-flax-smoke-400 uppercase pt-1">
              <span>MANCHESTER UNITED FIRST DIVISION SQUAD &middot; NOV 1986</span>
              <span className="text-flame font-bold">19TH / 22 TEAMS</span>
            </div>
          </div>

          {/* Right: The Doctrine & Declaration */}
          <div ref={textRef} className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="font-mono text-xs text-flame uppercase tracking-widest">
              ( THE DECLARATION )
            </div>

            <blockquote className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-flax-smoke-50 leading-snug">
              &ldquo;My greatest challenge was not what was happening at that moment. My challenge was knocking Liverpool right off their fucking perch.&rdquo;
            </blockquote>

            <p className="text-sm text-flax-smoke-300 font-body leading-relaxed font-normal">
              Appointed with United hovering near relegation, Ferguson rejected quick-fix signings. He dismantled the drinking culture, rebuilt scouting across Greater Manchester, and staked the club&apos;s destiny on the academy.
            </p>

            {/* Class of '92 Seedlist */}
            <div className="border-t border-white/10 pt-4">
              <div className="font-mono text-[10px] text-flax-smoke-400 uppercase tracking-widest mb-2">
                ( THE ACADEMY SEEDS // CLASS OF &apos;92 )
              </div>
              <div className="font-mono text-xs text-flax-smoke-200 uppercase tracking-wider leading-relaxed">
                Giggs &bull; Scholes &bull; Beckham &bull; G. Neville &bull; P. Neville &bull; Butt
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs text-flax-smoke-400 tracking-widest uppercase">
          <span>( 7 YEARS OF PURGATORY BEFORE THE FIRST CROWN )</span>
          <span>( 1993 PREMIER LEAGUE &rarr; )</span>
        </div>
      </div>
    </section>
  );
}
