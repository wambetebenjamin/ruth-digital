"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CountUpStatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

/** GSAP count up on scroll, the results stat cards. */
export default function CountUpStat({ value, prefix = "", suffix = "", decimals }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const places = decimals ?? (Number.isInteger(value) ? 0 : 1);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value.toFixed(places));
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const counter = { current: 0 };
    const context = gsap.context(() => {
      gsap.to(counter, {
        current: value,
        duration: 1.9,
        ease: "power2.out",
        snap: { current: places === 0 ? 1 : 0.01 },
        onUpdate: () => {
          setDisplay(counter.current.toFixed(places));
        },
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          once: true,
        },
      });
    }, element);

    return () => {
      context.revert();
    };
  }, [value, places]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
    </span>
  );
}
