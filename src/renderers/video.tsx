"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";
import { useInView } from "motion/react";
import { useRef } from "react";

export function VideoRenderer({ aspectRatio, muxPlaybackId }: { aspectRatio: string; muxPlaybackId: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.2, initial: false, once: false });
  return (
    <div className="w-full h-full relative overflow-hidden cursor-pointer" ref={ref}>
      <MuxPlayer
        accentColor="#525a4a"
        autoPlay="muted"
        className="min-h-full min-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        loading="viewport"
        loop
        muted
        paused={!isInView}
        playbackId={muxPlaybackId}
        style={{ aspectRatio, fontSize: 0 }}
        theme="minimal"
      />
    </div>
  );
}
