// src/components/App.tsx
import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";


export interface PlaylistSong {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

const App: React.FC = () => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState<PlaylistSong[]>([]);
  const [selectedTrack, setSelectedTrack] = useState<PlaylistSong | null>(null);

  useEffect(() => {
    fetch("/api/v1/playlist")
      .then((res) => res.json())
      .then((data: PlaylistSong[]) => {
        setPlaylist(data);
        if (data.length > 0) setSelectedTrack(data[0]);
      })
      .catch((err) => console.error("Failed to load playlist:", err));
  }, []);

  return (
    <div
      className={`${
        lightMode ? "bg-red-50 text-gray-900" : "bg-indigo-950 text-white"
      } flex h-screen flex-col overflow-x-hidden overflow-y-auto md:overflow-y-hidden md:flex-row`}
    >
      <button
        onClick={() => setLightMode((m) => !m)}
        className={`absolute top-4 right-4 rounded px-3 py-1 text-sm font-medium transition ${
          lightMode
            ? "bg-slate-400 text-gray-800"
            : "bg-gray-800 text-gray-200"
        }`}
      >
        {lightMode ? "Dark Mode" : "Light Mode"}
      </button>

      <div className="flex w-full flex-col justify-between p-4 md:w-1/2 md:p-8">
        {selectedTrack && (
          <CurrentlyPlaying
            lightMode={lightMode}
            track={selectedTrack}
            playlist={playlist}
            onSelect={setSelectedTrack}
          />
        )}
      </div>

      <div className="w-full border-t border-gray-200 p-4 md:w-1/2 md:border-t-0 md:border-l md:p-8 md:overflow-y-auto">
        <Playlist
          lightMode={lightMode}
          tracks={playlist}
          selected={selectedTrack}
          onSelect={setSelectedTrack}
        />
      </div>
    </div>
  );
};

export default App;
