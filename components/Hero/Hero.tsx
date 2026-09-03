"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/lib/use-gsap";
import { gsap } from "@/lib/gsap-config";
import { useLenisScroll } from "../Providers/SmoothScrollProvider";

interface HeroProps {
  isReady: boolean;
}

export function Hero({ isReady }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const titleLine1Ref = useRef<HTMLHeadingElement | null>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);
  const scrollCueRef = useRef<HTMLButtonElement | null>(null);

  const { scrollTo } = useLenisScroll();

  useGSAP(
    () => {
      if (!isReady) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.06 },
          { opacity: 0.35, scale: 1, duration: 2.0, ease: "power3.out" },
          0
        );
      }

      const lines = [titleLine1Ref.current, titleLine2Ref.current].filter(Boolean);

      tl.fromTo(
        lines,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.15,
          ease: "power4.out",
        },
        0.2
      );

      if (paragraphRef.current) {
        tl.fromTo(
          paragraphRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          0.6
        );
      }

      if (metaRef.current && scrollCueRef.current) {
        tl.fromTo(
          [metaRef.current, scrollCueRef.current],
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
          0.8
        );
      }

      if (containerRef.current && imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    [isReady],
    containerRef
  );

  const handleScrollClick = () => {
    scrollTo("#appointment", { duration: 1.4 });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#0A0A0A] text-[#FAFAFA] px-6 sm:px-10 md:px-16 pt-24 md:pt-28 pb-10 select-none overflow-hidden"
    >
      {/* Background Archive Image with Subtle Duotone Gradient */}
      <div
        ref={imageRef}
        className="absolute inset-0 pointer-events-none opacity-0 z-0 overflow-hidden"
      >
        <Image
          src="/images/fergie-hero.jpg"
          alt="Sir Alex Ferguson Tunnel at Old Trafford"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-[#0A0A0A]/90" />
      </div>

      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between relative z-10 flex-1">
        {/* Top Editorial Subtitle */}
        <div className="flex items-center justify-between border-b border-[#222222]/80 pb-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.25em] text-[#DA291C] font-semibold">
              CHRONICLE // 1986&ndash;2013
            </span>
          </div>
          <div className="text-[11px] font-mono tracking-widest text-[#8E8E93] uppercase hidden sm:block">
            AN UNPARALLELED DYNASTY IN MODERN SPORT
          </div>
        </div>

        {/* Main Title: Strictly 2 Clean Lines without clipping */}
        <div className="my-auto py-8 md:py-12 max-w-5xl">
          {/* Line 1: 26 YEARS. 38 TROPHIES. */}
          <div className="overflow-visible">
            <h1
              ref={titleLine1Ref}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.1] uppercase font-display text-[#FAFAFA] whitespace-nowrap"
            >
              26 Years. 38 Trophies.
            </h1>
          </div>

          {/* Line 2: ONE MANAGER. */}
          <div className="overflow-visible mt-2 sm:mt-3">
            <h1
              ref={titleLine2Ref}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-black tracking-tight leading-[1.1] uppercase font-display text-[#DA291C] whitespace-nowrap"
            >
              One Manager.
            </h1>
          </div>

          {/* Clean 2-line Description */}
          <div className="mt-5 md:mt-6 max-w-xl">
            <p
              ref={paragraphRef}
              className="text-sm sm:text-base text-[#A1A1A6] font-normal leading-relaxed font-body"
            >
              From 19th position in 1986 to thirty-eight major honors — Sir Alex Ferguson forged football&apos;s most relentless dynasty through uncompromising vision and discipline.
            </p>
          </div>
        </div>

        {/* Bottom Metadata Strip & Scroll Cue */}
        <div className="pt-6 border-t border-[#222222]/80 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Core Stats Bar */}
          <div
            ref={metaRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 w-full md:w-auto"
          >
            <div>
              <div className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider">Matches</div>
              <div className="text-xl md:text-2xl font-bold font-display text-white mt-0.5">1,500</div>
            </div>
            <div>
              <div className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider">Victories</div>
              <div className="text-xl md:text-2xl font-bold font-display text-white mt-0.5">894</div>
            </div>
            <div>
              <div className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider">League Titles</div>
              <div className="text-xl md:text-2xl font-bold font-display text-[#DA291C] mt-0.5">13</div>
            </div>
            <div>
              <div className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider">Win Rate</div>
              <div className="text-xl md:text-2xl font-bold font-display text-white mt-0.5">59.67%</div>
            </div>
          </div>

          {/* Scroll Cue */}
          <button
            ref={scrollCueRef}
            onClick={handleScrollClick}
            data-cursor="SCROLL"
            className="group flex items-center gap-3 text-xs font-mono tracking-widest text-[#8E8E93] hover:text-white transition-colors duration-300 uppercase self-end md:self-auto py-1"
            aria-label="Scroll to The Appointment section"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DA291C] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DA291C]" />
            </span>
            <span className="text-[11px]">SCROLL TO EXPLORE</span>
            <div className="w-4 h-7 rounded-full border border-[#444444] flex items-start justify-center p-1 group-hover:border-[#DA291C] transition-colors">
              <div className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
