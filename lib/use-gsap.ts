"use client";

import { useEffect, useLayoutEffect, useRef, RefObject } from "react";
import { registerGSAP, gsap } from "./gsap-config";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type GSAPContextCallback = (ctx: gsap.Context) => void | (() => void);

export function useGSAP(
  callback: GSAPContextCallback,
  dependencies: unknown[] = [],
  scope?: RefObject<HTMLElement | null> | HTMLElement | null
) {
  const isRegisteredRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (!isRegisteredRef.current) {
      registerGSAP();
      isRegisteredRef.current = true;
    }

    const targetScope = scope && "current" in scope ? scope.current : scope;
    const ctx = gsap.context((self) => {
      callback(self);
    }, targetScope || undefined);

    return () => {
      ctx.revert();
    };
  }, dependencies);
}
