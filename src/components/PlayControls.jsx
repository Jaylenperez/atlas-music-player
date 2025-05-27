// src/components/PlayControls.jsx
import { useState } from "react";

export function PlayControls({ lightMode }) {
  const [speed, setSpeed] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const speeds = [1, 1.5, 2];

  const nextSpeed = () => {
    const currentIndex = speeds.indexOf(speed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setSpeed(speeds[nextIndex]);
  };

  // helper for button text color + hover
  const iconBtn =
    "rounded p-2 transition " +
    (lightMode
      ? "text-gray-800 hover:bg-gray-200"
      : "text-sky-400 hover:bg-indigo-900");

  return (
    <div className="flex w-full items-center justify-between">
      {/* Speed Button */}
      <button
        onClick={nextSpeed}
        className={`rounded px-2 py-1 text-sm font-medium transition ${
          lightMode
            ? "text-gray-800 hover:bg-gray-200"
            : "text-sky-400 hover:bg-indigo-900"
        }`}
        aria-label="Change playback speed"
      >
        {speed}X
      </button>

      {/* Rewind Icon */}
      <button className={iconBtn} aria-label="Rewind">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <polygon points="11 19 2 12 11 5 11 19" />
          <polygon points="22 19 13 12 22 5 22 19" />
        </svg>
      </button>

      {/* Play / Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
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

      {/* Fast Forward Icon */}
      <button className={iconBtn} aria-label="Fast forward">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <polygon points="13 19 22 12 13 5 13 19" />
          <polygon points="2 19 11 12 2 5 2 19" />
        </svg>
      </button>

      {/* Shuffle Icon */}
      <button className={iconBtn} aria-label="Shuffle">
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
}
