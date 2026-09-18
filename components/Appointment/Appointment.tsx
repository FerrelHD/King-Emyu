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
      className="relative min-h-screen w-full bg-[#0A0A0A] text-flax-smoke-50 padding-x py-32 md:py-48 flex flex-col justify-between select-none"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col justify-between flex-1">
        {/* Section Header Tag - Clean and Restrained */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-flame tracking-wider uppercase mb-2">
              Chapter 01 &mdash; 06 November 1986
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight uppercase text-flax-smoke-50">
              The Arrival & The Perch
            </h2>
          </div>
          <div className="font-mono text-xs text-flax-smoke-500 uppercase tracking-widest">
            Inherited 19th of 22 Teams
          </div>
        </div>

        {/* Spacious Editorial Grid: Authentic B&W Squad Photo + Monumental Doctrine */}
        <div className="my-auto py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Authentic 1986 Squad Photo */}
          <div ref={photoRef} className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-black/40">
              <Image
                src="/images/squad-1986.jpg"
                alt="Manchester United 1986 Inherited Squad at Old Trafford"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center filter grayscale contrast-115 brightness-90 hover:scale-[1.01] transition-transform duration-700"
              />
            </div>
            <div className="flex items-center justify-between font-mono text-[11px] text-flax-smoke-400 tracking-wider">
              <span>First Division Squad &middot; Old Trafford, 1986</span>
              <span className="text-flame font-semibold">19th Position</span>
            </div>
          </div>

          {/* Right: The Doctrine & Declaration */}
          <div ref={textRef} className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <blockquote className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-flax-smoke-50 leading-snug">
              &ldquo;My greatest challenge was not what was happening at that moment. My challenge was knocking Liverpool right off their perch.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-flax-smoke-300 font-body leading-relaxed font-normal">
              Appointed with United hovering in the relegation zone, Ferguson rejected quick-fix signings. He dismantled a toxic drinking culture, restructured scouting across Greater Manchester, and staked the club&apos;s destiny on youth.
            </p>

            {/* Class of '92 Seedlist */}
            <div className="pt-2">
              <div className="font-mono text-[11px] text-flax-smoke-400 uppercase tracking-widest mb-2">
                The Foundation &middot; Class of &apos;92
              </div>
              <div className="font-mono text-xs text-flax-smoke-200 tracking-wider leading-relaxed">
                Giggs &middot; Scholes &middot; Beckham &middot; G. Neville &middot; P. Neville &middot; Butt
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note - Minimal & Clean */}
        <div className="flex items-center justify-between font-mono text-xs text-flax-smoke-500 tracking-wider">
          <span>Seven years of patience before the first league crown</span>
          <span>1993 Premier League &rarr;</span>
        </div>
      </div>
    </section>
  );
}
