"use client";

import MuxPlayer from "@mux/mux-player-react/lazy";

export function VideoRenderer({ aspectRatio, muxPlaybackId }: { aspectRatio: string; muxPlaybackId: string }) {
  return (
    // <AspectRatio
    // 	className="group absolute min-w-full min-h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    // 	ratio={eval(aspectRatio)}
    // >
    // <div className="w-full h-full relative overflow-hidden">
    <MuxPlayer
      accentColor="#525a4a"
      autoPlay=""
      className="min-h-full min-w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      playbackId={muxPlaybackId}
      style={{ aspectRatio, fontSize: 0 }}
      theme="minimal"
    />
    // </div>
    // </AspectRatio>
  );
}
