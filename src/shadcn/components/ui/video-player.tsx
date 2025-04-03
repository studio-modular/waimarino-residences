"use client";

import { cn } from "@/shadcn/utils";
import { Pause, Play, Volume1, Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useRef, useState } from "react";

import { Button } from "./button";

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const CustomSlider = ({
  className,
  onChange,
  value,
}: {
  className?: string;
  onChange: (value: number) => void;
  value: number;
}) => {
  return (
    <m.div
      className={cn("relative w-full h-1 bg-white/20 rounded-full cursor-pointer", className)}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        onChange(Math.min(Math.max(percentage, 0), 100));
      }}
    >
      <m.div
        animate={{ width: `${value}%` }}
        className="absolute top-0 left-0 h-full bg-white rounded-full"
        initial={{ width: 0 }}
        style={{ width: `${value}%` }}
        transition={{ damping: 30, stiffness: 300, type: "spring" }}
      />
    </m.div>
  );
};

const VideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      const newVolume = value / 100;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(isFinite(progress) ? progress : 0);
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (value: number) => {
    if (videoRef.current && videoRef.current.duration) {
      const time = (value / 100) * videoRef.current.duration;
      if (isFinite(time)) {
        videoRef.current.currentTime = time;
        setProgress(value);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isMuted) {
        setVolume(0);
      } else {
        setVolume(1);
        videoRef.current.volume = 1;
      }
    }
  };

  const setSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackSpeed(speed);
    }
  };

  return (
    <m.div
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full mx-auto rounded-xl overflow-hidden bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      transition={{ duration: 0.5 }}
    >
      <video className="w-full" loop onClick={togglePlay} onTimeUpdate={handleTimeUpdate} ref={videoRef} src={src} />

      <AnimatePresence>
        {showControls && (
          <m.div
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            className="absolute bottom-0 mx-auto max-w-xl left-0 right-0 p-4 m-2 bg-[#11111198] backdrop-blur-md rounded-2xl"
            exit={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "circInOut", type: "spring" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white text-sm">{formatTime(currentTime)}</span>
              <CustomSlider className="flex-1" onChange={handleSeek} value={progress} />
              <span className="text-white text-sm">{formatTime(duration)}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <m.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    className="text-white hover:bg-[#111111d1] hover:text-white"
                    onClick={togglePlay}
                    size="icon"
                    variant="ghost"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                </m.div>
                <div className="flex items-center gap-x-1">
                  <m.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      className="text-white hover:bg-[#111111d1] hover:text-white"
                      onClick={toggleMute}
                      size="icon"
                      variant="ghost"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : volume > 0.5 ? (
                        <Volume2 className="h-5 w-5" />
                      ) : (
                        <Volume1 className="h-5 w-5" />
                      )}
                    </Button>
                  </m.div>

                  <div className="w-24">
                    <CustomSlider onChange={handleVolumeChange} value={volume * 100} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {[0.5, 1, 1.5, 2].map((speed) => (
                  <m.div key={speed} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      className={cn(
                        "text-white hover:bg-[#111111d1] hover:text-white",
                        playbackSpeed === speed && "bg-[#111111d1]",
                      )}
                      onClick={() => setSpeed(speed)}
                      size="icon"
                      variant="ghost"
                    >
                      {speed}x
                    </Button>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export default VideoPlayer;
