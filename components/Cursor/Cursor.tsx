"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("[data-cursor], a, button, [role='button']") as HTMLElement | null;

      if (interactiveEl) {
        const customText = interactiveEl.getAttribute("data-cursor");
        if (customText) {
          setCursorText(customText);
          setIsHovering(true);
        } else if (interactiveEl.tagName === "A" || interactiveEl.tagName === "BUTTON") {
          setCursorText("VIEW");
          setIsHovering(true);
        }
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference flex items-center justify-center transition-all duration-300 ease-out ${
        !isVisible ? "opacity-0" : "opacity-100"
      } ${
        isHovering
          ? "w-14 h-14 bg-white text-black"
          : "w-3 h-3 bg-white"
      }`}
    >
      <span
        ref={labelRef}
        className={`font-mono text-[9px] font-bold tracking-widest text-black transition-opacity duration-200 uppercase select-none ${
          isHovering && cursorText ? "opacity-100" : "opacity-0"
        }`}
      >
        {cursorText}
      </span>
    </div>
  );
}
