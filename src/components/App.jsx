// src/App.jsx
import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function App() {
  return (
    <div className="flex h-screen flex-col overflow-x-hidden bg-indigo-950 md:flex-row">
      {/* Left: always shows cover → controls → volume */}
      <div className="flex w-full flex-col justify-between p-4 md:w-1/2 md:p-8">
        <CurrentlyPlaying />
      </div>

      {/* Right: playlist can scroll internally if it ever overflows */}
      <div className="w-full overflow-y-auto border-t border-gray-200 p-4 md:w-1/2 md:border-t-0 md:border-l md:p-8">
        <Playlist />
      </div>
    </div>
  );
}
