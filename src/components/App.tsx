import React, { useState, useEffect } from "react";
import { CurrentlyPlaying } from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  // ← new state for the full playlist and the selected item
  const [playlist, setPlaylist] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    fetch("/api/v1/playlist")
      .then((res) => res.json())
      .then((data) => {
        setPlaylist(data);
        if (data.length > 0) setSelectedTrack(data[0]);
      })
      .catch((err) => console.error("Failed to load playlist:", err));
  }, []);

  return (
    <div
      className={`${
        lightMode ? "bg-red-50 text-gray-900" : "bg-indigo-950 text-white"
      } flex h-screen flex-col overflow-x-hidden md:flex-row`}
    >
      <button
        onClick={() => setLightMode(!lightMode)}
        className={`absolute top-4 right-4 rounded px-3 py-1 text-sm font-medium ${
          lightMode ? "bg-slate-400 text-gray-800" : "bg-gray-800 text-gray-200"
        } transition`}
      >
        {lightMode ? "Dark Mode" : "Light Mode"}
      </button>

      <div className="flex w-full flex-col justify-between p-4 md:w-1/2 md:p-8">
        {/* pass the entire track object (including cover, duration, etc.) */}
        {selectedTrack && (
          <CurrentlyPlaying lightMode={lightMode} track={selectedTrack} />
        )}
      </div>

      <div className="w-full overflow-y-auto border-t border-gray-200 p-4 md:w-1/2 md:border-t-0 md:border-l md:p-8">
        <Playlist
          lightMode={lightMode}
          tracks={playlist}
          selected={selectedTrack}
          onSelect={setSelectedTrack}
        />
      </div>
    </div>
  );
}
