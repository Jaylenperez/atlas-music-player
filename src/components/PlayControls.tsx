// src/components/PlayControls.tsx
import React, { useState } from "react";

export interface PlayControlsProps {
  lightMode: boolean;
  isPlaying: boolean;
  onPlayToggle: () => void;
  onBack: () => void;
  onForward: () => void;
  disableBack: boolean;
  disableForward: boolean;
  shuffleEnabled: boolean;
  onShuffleToggle: () => void;
}

const PlayControls: React.FC<PlayControlsProps> = ({
  lightMode,
  isPlaying,
  onPlayToggle,
  onBack,
  onForward,
  disableBack,
  disableForward,
  shuffleEnabled,
  onShuffleToggle,
}) => {
  // internal speed state
  const [speed, setSpeed] = useState<0.5 | 1 | 2>(1);
  const speeds: Array<0.5 | 1 | 2> = [0.5, 1, 2];
  const nextSpeed = () => {
    const idx = speeds.indexOf(speed);
    setSpeed(speeds[(idx + 1) % speeds.length]);
  };

  const baseBtn = "rounded p-2 transition";
  const iconBtn =
    baseBtn +
    " " +
    (lightMode
      ? "text-gray-800 hover:bg-gray-200"
      : "text-sky-400 hover:bg-indigo-900");
  const disabledStyle = "opacity-50 pointer-events-none";

  return (
    <div className="flex w-full items-center justify-between">
      {/* 1) Speed */}
      <button
        onClick={nextSpeed}
        className={`rounded px-2 py-1 text-sm font-medium transition ${
          lightMode
            ? "text-gray-800 hover:bg-gray-200"
            : "text-sky-400 hover:bg-indigo-900"
        }`}
        aria-label="Change playback speed"
      >
        {speed}×
      </button>

      {/* 2) Back */}
      <button
        onClick={onBack}
        disabled={disableBack}
        className={`${iconBtn} ${disableBack ? disabledStyle : ""}`}
        aria-label="Previous song"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <polygon points="11 19 2 12 11 5 11 19" />
        </svg>
      </button>

      {/* 3) Play / Pause */}
      <button
        onClick={onPlayToggle}
        className={`${iconBtn} flex h-10 w-10 items-center justify-center border border-gray-300 p-2`}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <rect x="14" y="4" width="4" height="16" rx="1" />
            <rect x="6" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        )}
      </button>

      {/* 4) Forward */}
      <button
        onClick={onForward}
        disabled={disableForward}
        className={`${iconBtn} ${disableForward ? disabledStyle : ""}`}
        aria-label="Next song"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <polygon points="13 19 22 12 13 5 13 19" />
        </svg>
      </button>

      {/* 5) Shuffle */}
      <button
        onClick={onShuffleToggle}
        className={
          shuffleEnabled
            ? `${baseBtn} text-green-400 hover:text-green-500`
            : iconBtn
        }
        aria-label="Toggle shuffle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="m18 14 4 4-4 4" />
          <path d="m18 2 4 4-4 4" />
          <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
          <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
          <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
        </svg>
      </button>
    </div>
  );
};

export default PlayControls;
