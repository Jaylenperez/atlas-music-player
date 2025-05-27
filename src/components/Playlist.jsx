// src/components/Playlist.jsx
import React, { useState } from "react";

const tracks = [
  { title: "Don't Call", artist: "Desire", length: "4:35" },
  { title: "Ready To Let Go", artist: "Cage The Elephant", length: "3:08" },
  { title: "Snap Out Of It", artist: "Arctic Monkeys", length: "3:13" },
  { title: "Psychic City", artist: "YACHT, Classixx", length: "4:11" },
  { title: "Outside", artist: "MorMor", length: "3:58" },
  { title: "Tek It", artist: "Cafune", length: "3:12" },
  { title: "Blue", artist: "A Perfect Circle", length: "4:14" },
  { title: "Money Honey", artist: "Lady Gaga", length: "2:50" },
  {
    title: "Dirty Little Secret",
    artist: "The All-American Rejects",
    length: "3:14",
  },
];

export default function Playlist({ lightMode }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Playlist heading */}
      <h2
        className={`mb-4 text-left text-2xl font-semibold ${
          lightMode ? "text-slate-950" : "text-sky-300"
        }`}
      >
        Playlist
      </h2>

      {/* Track list */}
      <div className="space-y-1">
        {tracks.map((track, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`cursor-pointer rounded-md border-b ${lightMode ? "border-stone-600" : "border-white"} /* light=brown, dark=white */ px-4 py-2 transition ${
              idx === selectedIndex
                ? lightMode
                  ? "bg-gray-200"
                  : "bg-indigo-900"
                : ""
            } ${lightMode ? "hover:bg-gray-200" : "hover:bg-indigo-900"} `}
          >
            <div className="flex items-center justify-between">
              <div>
                {/* Song title */}
                <h3
                  className={`text-lg font-medium ${
                    lightMode ? "text-gray-900" : "text-sky-400"
                  }`}
                >
                  {track.title}
                </h3>
                {/* Artist */}
                <p
                  className={`text-sm ${
                    lightMode ? "text-rose-800" : "text-fuchsia-500"
                  }`}
                >
                  {track.artist}
                </p>
              </div>
              {/* Length */}
              <span
                className={`text-sm ${
                  lightMode ? "text-gray-600" : "text-fuchsia-300"
                }`}
              >
                {track.length}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
