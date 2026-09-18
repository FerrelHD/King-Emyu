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
  const topMetaRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);
  const scrollCueRef = useRef<HTMLButtonElement | null>(null);

  const { scrollTo } = useLenisScroll();

  useGSAP(
    () => {
      if (!isReady || !containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".hero-word");

      // Setup initial states
      gsap.set(words, { yPercent: 120, opacity: 0 });
      if (topMetaRef.current) gsap.set(topMetaRef.current, { y: -12, opacity: 0 });
      if (paragraphRef.current) gsap.set(paragraphRef.current, { y: 20, opacity: 0 });
      if (metaRef.current) gsap.set(metaRef.current, { y: 20, opacity: 0 });
      if (scrollCueRef.current) gsap.set(scrollCueRef.current, { y: 20, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Background image calm fade
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.05 },
          { opacity: 0.28, scale: 1, duration: 2.2, ease: "power2.out" },
          0
        );
      }

      // 2. Top metadata subtle slide
      if (topMetaRef.current) {
        tl.to(topMetaRef.current, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, 0.15);
      }

      // 3. Clean word-by-word reveal
      tl.to(
        words,
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.06,
          ease: "power4.out",
        },
        0.25
      );

      // 4. Paragraph description fade
      if (paragraphRef.current) {
        tl.to(
          paragraphRef.current,
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );
      }

      // 5. Bottom stats and scroll cue
      if (metaRef.current && scrollCueRef.current) {
        tl.to(
          [metaRef.current, scrollCueRef.current],
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.5"
        );
      }

      // Scroll Parallax for background
      if (containerRef.current && imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 12,
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
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#0A0A0A] text-flax-smoke-50 padding-x pt-36 md:pt-44 pb-14 select-none overflow-hidden"
    >
      {/* Background Archive Image with Quiet Warm Vignette */}
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
          className="object-cover object-center filter grayscale contrast-125 brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-transparent to-[#0A0A0A]/95" />
      </div>

      <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-between relative z-10 flex-1">
        {/* Top Editorial Label - Quiet and Uncluttered */}
        <div
          ref={topMetaRef}
          className="flex items-center justify-between font-mono text-xs tracking-wider text-flax-smoke-400"
        >
          <div className="flex items-center gap-2">
            <span className="text-flame font-medium">Prologue</span>
            <span className="text-flax-smoke-600">&middot;</span>
            <span>The Architect of Manchester United</span>
          </div>
          <div className="hidden sm:block text-flax-smoke-500 tracking-widest uppercase text-[11px]">
            Old Trafford &mdash; 1986 to 2013
          </div>
        </div>

        {/* Monumental Headline with Vast Breathing Space */}
        <div className="my-auto py-16 md:py-24 max-w-4xl">
          <div className="overflow-hidden py-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase font-display text-flax-smoke-50">
              <span className="inline-block hero-word will-change-transform">26</span>{" "}
              <span className="inline-block hero-word will-change-transform">Years.</span>{" "}
              <span className="inline-block hero-word will-change-transform">38</span>{" "}
              <span className="inline-block hero-word will-change-transform">Trophies.</span>
            </h1>
          </div>

          <div className="overflow-hidden py-1 mt-1 sm:mt-2">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase font-display text-flame">
              <span className="inline-block hero-word will-change-transform">One</span>{" "}
              <span className="inline-block hero-word will-change-transform">Manager.</span>
            </h1>
          </div>

          <div className="mt-8 md:mt-12 max-w-xl">
            <p
              ref={paragraphRef}
              className="text-base sm:text-lg text-flax-smoke-300 font-normal leading-relaxed font-body"
            >
              From nineteenth position in 1986 to thirty-eight major honors &mdash; Sir Alex Ferguson built modern sport&apos;s most relentless dynasty through uncompromising vision and culture.
            </p>
          </div>
        </div>

        {/* Minimal Bottom Statistics Row without Boxed Borders */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pt-8">
          <div
            ref={metaRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-14 w-full md:w-auto"
          >
            <div>
              <div className="text-2xl md:text-3xl font-bold font-display text-flax-smoke-50">1,500</div>
              <div className="font-mono text-[11px] text-flax-smoke-400 tracking-wider uppercase mt-1">Matches</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold font-display text-flax-smoke-50">894</div>
              <div className="font-mono text-[11px] text-flax-smoke-400 tracking-wider uppercase mt-1">Victories</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold font-display text-flame">13</div>
              <div className="font-mono text-[11px] text-flax-smoke-400 tracking-wider uppercase mt-1">League Titles</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold font-display text-flax-smoke-50">59.7%</div>
              <div className="font-mono text-[11px] text-flax-smoke-400 tracking-wider uppercase mt-1">Win Ratio</div>
            </div>
          </div>

          {/* Minimalist Scroll Cue */}
          <button
            ref={scrollCueRef}
            onClick={handleScrollClick}
            className="group inline-flex items-center gap-2.5 font-mono text-xs text-flax-smoke-400 hover:text-flax-smoke-100 transition-colors duration-300 tracking-widest uppercase cursor-pointer"
            aria-label="Scroll to The Appointment section"
          >
            <span>Explore Chronicle</span>
            <span className="text-flame group-hover:translate-y-0.5 transition-transform duration-300 text-sm">
              &darr;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
