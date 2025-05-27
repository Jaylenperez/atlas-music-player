// src/components/VolumeControls.jsx
import { useState } from "react";

export function VolumeControls({ lightMode }) {
  const [volume, setVolume] = useState(60);

  return (
    <div className="flex w-full items-center gap-2">
      {/* speaker icon */}
      <button
        className="rounded p-2 text-sky-400 transition hover:bg-indigo-900"
        aria-label="Volume"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
          <path d="M16 9a5 5 0 0 1 0 6" />
          <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
        </svg>
      </button>

      {/* themed slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        aria-label="Volume slider"
        className={`h-1 w-full cursor-pointer ${
          lightMode ? "accent-rose-600" : "accent-fuchsia-400"
        }`}
      />
    </div>
  );
}
