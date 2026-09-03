"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/Preloader/Preloader";
import { Header } from "@/components/Navigation/Header";
import { Hero } from "@/components/Hero/Hero";
import { Appointment } from "@/components/Appointment/Appointment";
import { Rebuild } from "@/components/Rebuild/Rebuild";
import { FirstTitle } from "@/components/FirstTitle/FirstTitle";
import { TheClimb } from "@/components/TheClimb/TheClimb";
import { Treble1999 } from "@/components/Treble1999/Treble1999";
import { TheThreeTeams } from "@/components/TheThreeTeams/TheThreeTeams";
import { NumbersGrid } from "@/components/NumbersGrid/NumbersGrid";
import { LegacyTimeline } from "@/components/LegacyTimeline/LegacyTimeline";
import { Farewell } from "@/components/Farewell/Farewell";
import { Closing } from "@/components/Closing/Closing";
import { refreshScrollTrigger } from "@/lib/lenis";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
    setTimeout(() => {
      refreshScrollTrigger();
    }, 100);
  };

  return (
    <main className="relative w-full min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Editorial Navigation Header */}
      <Header />

      {/* Intro Preloader Counter (1986 -> 2013) */}
      <Preloader onLoadingComplete={handleLoadingComplete} />

      {/* Act I: The Beginning / Hero */}
      <Hero isReady={isLoaded} />

      {/* Act I &middot; Chapter 01: The Appointment (1986) */}
      <Appointment />

      {/* Act I &middot; Chapter 02: The Rebuild & Class of '92 (Horizontal Cards) */}
      <Rebuild />

      {/* Act II &middot; Chapter 01: First Title (1993) */}
      <FirstTitle />

      {/* Act II &middot; Chapter 02: The Climb (1993-1999 SVG Chart) */}
      <TheClimb />

      {/* Act II &middot; Chapter 03: The Treble 1999 (Pinned Centerpiece) */}
      <Treble1999 />

      {/* Act III &middot; Chapter 01: The Three Dynasties (Interactive Vertical Tabs) */}
      <TheThreeTeams />

      {/* Act III &middot; Chapter 02: The Numbers (Scrubbed Metric Grid) */}
      <NumbersGrid />

      {/* Act III &middot; Chapter 03: Legacy Timeline (1999-2013 Milestones) */}
      <LegacyTimeline />

      {/* Epilogue &middot; The Farewell (Word-by-Word Speech) */}
      <Farewell />

      {/* Colophon & Closing Credits */}
      <Closing />
    </main>
  );
}
