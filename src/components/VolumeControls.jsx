import { useState } from "react";

export function VolumeControls() {
  const [volume, setVolume] = useState(60);

  return (
    <div className="flex w-full max-w-xs items-center gap-2">
      <button className="p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-volume2-icon lucide-volume-2"
        >
          <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
          <path d="M16 9a5 5 0 0 1 0 6" />
          <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
        </svg>
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        className="h-2 w-full cursor-pointer appearance-none bg-transparent"
        style={{
          background: `linear-gradient(to right, #6b7280 0%, #6b7280 ${volume}%, #e5e7eb ${volume}%, #e5e7eb 100%)`,
        }}
      />
    </div>
  );
}
