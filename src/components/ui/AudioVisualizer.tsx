"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

// Fallback MP3 (used if no podcastUrl prop provided)
const FALLBACK_MP3 =
  "https://res.cloudinary.com/dbpoqqa9i/video/upload/fl_attachment:podcast1_du6wqo/v1755729599/podcast1_du6wqo.mp3";

interface AudioPlayerProps {
  podcastUrl?: string; // full URL (must be .mp3)
}

export default function AudioPlayer({ podcastUrl }: AudioPlayerProps) {
  const src = podcastUrl && podcastUrl.trim().length > 0 ? podcastUrl : FALLBACK_MP3;

  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPct, setProgressPct] = useState(0); // 0 – 100
  const [duration, setDuration] = useState(0); // seconds
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = useCallback(async () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    if (audioEl.paused) {
      try {
        await audioEl.play();
        setIsPlaying(true);
      } catch (e) {
        console.error("[AudioPlayer] Play failed", e);
      }
    } else {
      audioEl.pause();
      setIsPlaying(false);
    }
  }, []);

  const seek = (fraction: number) => {
    const audioEl = audioRef.current;
    if (!audioEl || !audioEl.duration) return;
    audioEl.currentTime = audioEl.duration * fraction;
  };

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const updateProgress = () => {
      if (!audioEl.duration) return;
      setCurrentTime(audioEl.currentTime);
      setDuration(audioEl.duration);
      setProgressPct((audioEl.currentTime / audioEl.duration) * 100);
    };

    const handleLoaded = () => {
      setDuration(audioEl.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgressPct(0);
      setCurrentTime(0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audioEl.addEventListener("timeupdate", updateProgress);
    audioEl.addEventListener("loadedmetadata", handleLoaded);
    audioEl.addEventListener("ended", handleEnded);
    audioEl.addEventListener("play", handlePlay);
    audioEl.addEventListener("pause", handlePause);

    return () => {
      audioEl.removeEventListener("timeupdate", updateProgress);
      audioEl.removeEventListener("loadedmetadata", handleLoaded);
      audioEl.removeEventListener("ended", handleEnded);
      audioEl.removeEventListener("play", handlePlay);
      audioEl.removeEventListener("pause", handlePause);
    };
  }, [src]);

  // Simple circle progress (SVG)
  const R = 28;
  const CIRC = 2 * Math.PI * R;
  const dash = CIRC - (progressPct / 100) * CIRC;

  return (
    <div className="mt-6">
      <h3 className="mb-3 font-semibold text-gray-900">Play as podcast</h3>
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause podcast" : "Play podcast"}
          className="relative w-16 h-16 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            className="absolute inset-0 -rotate-90"
          >
            <circle
              cx="32"
              cy="32"
              r={R}
              fill="none"
              stroke="#333"
              strokeWidth="4"
            />
            <circle
              cx="32"
              cy="32"
              r={R}
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeDasharray={CIRC}
              strokeDashoffset={dash}
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-linear"
            />
          </svg>
          {isPlaying ? (
            <div className="flex gap-1 z-10">
              <span className="w-[6px] h-6 bg-white rounded-sm" />
              <span className="w-[6px] h-6 bg-white rounded-sm" />
            </div>
          ) : (
            <div className="w-0 h-0 z-10 border-l-[18px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
          )}
        </button>

        <div className="flex flex-col">
          <span className="text-sm font-mono text-gray-700">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <div
            className="mt-2 h-2 w-56 bg-gray-200 rounded cursor-pointer relative overflow-hidden"
            onClick={(e) => {
              const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
              const frac = (e.clientX - rect.left) / rect.width;
              seek(Math.min(1, Math.max(0, frac)));
            }}
          >
            <div
              className="h-full bg-black transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="mt-1 text-[11px] text-gray-500 truncate max-w-[14rem]">
            Source: {src.endsWith(".mp3") ? src.split("/").pop() : "Audio"}
          </span>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        crossOrigin="anonymous"
        className="hidden"
      />
    </div>
  );
}