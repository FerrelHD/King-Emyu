"use client";

import React, { useState } from "react";
import { Preloader } from "@/components/Preloader/Preloader";
import { Header } from "@/components/Navigation/Header";
import { Hero } from "@/components/Hero/Hero";
import { Appointment } from "@/components/Appointment/Appointment";
import { Treble1999 } from "@/components/Treble1999/Treble1999";
import { NumbersGrid } from "@/components/NumbersGrid/NumbersGrid";
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

      {/* Prologue: The Architect / Hero */}
      <Hero isReady={isLoaded} />

      {/* Chapter 01: The Arrival & The Perch (1986-1992) */}
      <Appointment />

      {/* Chapter 02: The Treble (May 1999) */}
      <Treble1999 />

      {/* Chapter 03: The Scale of Dominance (The Numbers) */}
      <NumbersGrid />

      {/* Chapter 04: The Final Address (12 May 2013) */}
      <Farewell />

      {/* Colophon & Closing Credits */}
      <Closing />
    </main>
  );
}
