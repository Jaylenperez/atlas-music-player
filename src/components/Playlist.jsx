import React, { useState } from "react";

const tracks = [
  { title: "Painted in Blue", artist: "Soul Canvas", length: "5:55" },
  { title: "Tidal Drift", artist: "Echoes of the Sea", length: "8:02" },
  { title: "Fading Shadows", artist: "The Emberlight", length: "3:01" },
  { title: "Cosmic Drift", artist: "Solar Flare", length: "5:01" },
  { title: "Urban Serenade", artist: "Midnight Groove", length: "4:54" },
  { title: "Whispers in the Wind", artist: "Rust & Ruin", length: "6:13" },
  { title: "Electric Fever", artist: "Neon Jungle", length: "8:41" },
  { title: "Edge of the Abyss", artist: "Steel Horizon", length: "2:27" },
  { title: "Golden Haze", artist: "Velvet Waves", length: "3:15" },
  { title: "Shatter the Silence", artist: "Thunderclap Echo", length: "8:22" },
];

export default function Playlist({ lightMode }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full">
      <h2 className="mb-4 text-left text-2xl font-semibold text-sky-300">
        Playlist
      </h2>
      <div className="space-y-1">
        {tracks.map((track, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`cursor-pointer rounded-md border-b px-4 py-2 transition ${
              idx === selectedIndex
                ? lightMode
                  ? "bg-gray-300"
                  : "bg-indigo-900"
                : ""
            } ${lightMode ? "hover:bg-gray-300" : "hover:bg-indigo-900"} `}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-sky-400">
                  {track.title}
                </h3>
                <p className="text-sm text-fuchsia-500">{track.artist}</p>
              </div>
              <span className="text-sm text-fuchsia-300">{track.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
