"use client";

import type React from "react";

import * as m from "motion/react-m";

export function AnimatedPanelRenderer({ children, index = 0 }: { children: React.ReactNode; index: number }) {
  return (
    <m.div
      className="rounded-lg border border-border bg-card text-card-foreground shadow-sm"
      initial="outOfView"
      transition={{
        delay: index * 0.2,
        ease: "easeInOut",
      }}
      variants={{
        inView: {
          opacity: 1,
          scale: 1,
        },
        outOfView: {
          opacity: 0,
          scale: 0.92,
        },
      }}
      viewport={{ amount: 0, margin: "-100px" }}
      whileInView="inView"
    >
      {children}
    </m.div>
  );
}

export function AnimatedRenderer({ children }: { children: React.ReactNode }) {
  return (
    <m.section
      initial="outOfView"
      transition={{
        delay: 0.1,
        ease: "easeInOut",
      }}
      variants={{
        inView: {
          opacity: 1,
          scale: 1,
        },
        outOfView: {
          opacity: 0,
          scale: 0.95,
        },
      }}
      viewport={{ amount: 0, margin: "-84px" }}
      whileInView="inView"
    >
      {children}
    </m.section>
  );
}
