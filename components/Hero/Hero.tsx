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
  const underlineRef = useRef<SVGPathElement | null>(null);

  const { scrollTo } = useLenisScroll();

  useGSAP(
    () => {
      if (!isReady || !containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".hero-word");

      // Setup initial states
      gsap.set(words, { yPercent: 140, opacity: 0, rotateZ: 2 });
      if (topMetaRef.current) gsap.set(topMetaRef.current, { y: -15, opacity: 0 });
      if (paragraphRef.current) gsap.set(paragraphRef.current, { y: 24, opacity: 0 });
      if (metaRef.current) gsap.set(metaRef.current, { y: 20, opacity: 0 });
      if (scrollCueRef.current) gsap.set(scrollCueRef.current, { y: 20, opacity: 0 });

      if (underlineRef.current) {
        const pathLength = underlineRef.current.getTotalLength();
        gsap.set(underlineRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
      }

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Background slow ambient reveal (voldogfood style)
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, scale: 1.06 },
          { opacity: 0.32, scale: 1, duration: 2.2, ease: "power2.out" },
          0
        );
      }

      // 2. Top metadata subtle slide-down
      if (topMetaRef.current) {
        tl.to(topMetaRef.current, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, 0.15);
      }

      // 3. Masked word-by-word kinetic slide up (voldogfood split-word formula)
      tl.to(
        words,
        {
          yPercent: 0,
          opacity: 1,
          rotateZ: 0,
          duration: 1.1,
          stagger: 0.07,
          ease: "power4.out",
        },
        0.25
      );

      // 4. Micro SVG drawn accent under "Manager."
      if (underlineRef.current) {
        tl.to(
          underlineRef.current,
          {
            strokeDashoffset: 0,
            duration: 1.0,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // 5. Paragraph description fade
      if (paragraphRef.current) {
        tl.to(
          paragraphRef.current,
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );
      }

      // 6. Bottom stats and minimal CTA cue
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
          yPercent: 15,
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
      className="relative min-h-screen w-full flex flex-col justify-between bg-[#0A0A0A] text-flax-smoke-50 padding-x pt-28 md:pt-32 pb-10 select-none overflow-hidden"
    >
      {/* Background Archive Image with Warm Vignette */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/40 to-[#0A0A0A]/95" />
      </div>

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between relative z-10 flex-1">
        {/* Top Editorial Subtitle with Ferrel's Signature Parentheses */}
        <div
          ref={topMetaRef}
          className="flex items-center justify-between border-b border-white/10 pb-5"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-flame font-semibold uppercase tracking-widest">
            <span>( CHRONICLE // 1986 &mdash; 2013 )</span>
          </div>
          <div className="text-[11px] font-mono tracking-widest text-flax-smoke-400 uppercase hidden sm:block">
            ( AN UNPARALLELED DYNASTY IN MODERN SPORT )
          </div>
        </div>

        {/* Main Title: Voldogfood Masked Split-Word Reveal */}
        <div className="my-auto py-8 md:py-12 max-w-5xl">
          {/* Line 1: 26 Years. 38 Trophies. */}
          <div className="overflow-hidden py-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] uppercase font-display text-flax-smoke-50">
              <span className="inline-block hero-word will-change-transform">26</span>{" "}
              <span className="inline-block hero-word will-change-transform">Years.</span>{" "}
              <span className="inline-block hero-word will-change-transform">38</span>{" "}
              <span className="inline-block hero-word will-change-transform">Trophies.</span>
            </h1>
          </div>

          {/* Line 2: One Manager with Local Micro SVG Underline */}
          <div className="overflow-hidden py-1 mt-1 sm:mt-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] uppercase font-display text-flame">
              <span className="inline-block hero-word will-change-transform">One</span>{" "}
              <span className="inline-block hero-word will-change-transform relative">
                Manager.
                {/* Voldogfood-inspired Micro SVG Draw Underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full overflow-visible pointer-events-none"
                  height="12"
                  viewBox="0 0 240 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={underlineRef}
                    d="M 3 9 C 60 14, 180 14, 237 5"
                    stroke="#DA291C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Clean 2-line Balanced Description */}
          <div className="mt-6 md:mt-8 max-w-[46ch]">
            <p
              ref={paragraphRef}
              className="text-sm sm:text-base text-flax-smoke-300 font-normal leading-relaxed font-body text-balance"
            >
              From 19th position in 1986 to thirty-eight major honors &mdash; Sir Alex Ferguson forged football&apos;s most relentless dynasty through uncompromising vision and discipline.
            </p>
          </div>
        </div>

        {/* Bottom Metadata Strip & Minimalist Scroll Cue */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Core Stats Bar */}
          <div
            ref={metaRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 w-full md:w-auto"
          >
            <div>
              <div className="font-mono text-[10px] text-flax-smoke-400 uppercase tracking-widest">( MATCHES )</div>
              <div className="text-xl md:text-2xl font-bold font-display text-flax-smoke-50 mt-1">1,500</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-flax-smoke-400 uppercase tracking-widest">( VICTORIES )</div>
              <div className="text-xl md:text-2xl font-bold font-display text-flax-smoke-50 mt-1">894</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-flax-smoke-400 uppercase tracking-widest">( TITLES )</div>
              <div className="text-xl md:text-2xl font-bold font-display text-flame mt-1">13</div>
            </div>
            <div>
              <div className="font-mono text-[10px] text-flax-smoke-400 uppercase tracking-widest">( WIN RATE )</div>
              <div className="text-xl md:text-2xl font-bold font-display text-flax-smoke-50 mt-1">59.67%</div>
            </div>
          </div>

          {/* Minimalist Button Scroll Cue (Ferrel Style) */}
          <button
            ref={scrollCueRef}
            onClick={handleScrollClick}
            className="group flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white hover:text-black transition-all duration-300 font-mono text-[11px] tracking-widest text-flax-smoke-100 uppercase self-end md:self-auto cursor-pointer"
            aria-label="Scroll to The Appointment section"
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="text-flame group-hover:text-black group-hover:translate-y-0.5 transition-transform duration-300">
              &darr;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
