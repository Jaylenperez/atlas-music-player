import React from "react";

export default function Playlist({ lightMode, tracks, selected, onSelect }) {
  return (
    <div className="w-full">
      <h2
        className={`mb-4 text-left text-2xl font-semibold ${
          lightMode ? "text-slate-950" : "text-sky-300"
        }`}
      >
        Playlist
      </h2>

      <div className="space-y-1">
        {tracks.map((track) => {
          const isSelected = selected?.id === track.id;
          return (
            <div
              key={track.id}
              onClick={() => onSelect(track)}
              className={`cursor-pointer rounded-md border-b ${lightMode ? "border-stone-600" : "border-white"} px-4 py-2 transition ${
                isSelected ? (lightMode ? "bg-gray-200" : "bg-indigo-900") : ""
              } ${lightMode ? "hover:bg-gray-200" : "hover:bg-indigo-900"} `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3
                    className={`text-lg font-medium ${
                      lightMode ? "text-gray-900" : "text-sky-400"
                    }`}
                  >
                    {track.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      lightMode ? "text-rose-800" : "text-fuchsia-500"
                    }`}
                  >
                    {track.artist}
                  </p>
                </div>
                <span
                  className={`text-sm ${
                    lightMode ? "text-gray-600" : "text-fuchsia-300"
                  }`}
                >
                  {/* convert seconds to mm:ss if you like, or just display */}
                  {Math.floor(track.duration / 60)}:
                  {String(track.duration % 60).padStart(2, "0")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
