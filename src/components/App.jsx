// src/App.jsx
import React, { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div
      className={`${
        lightMode ? "bg-gray-100 text-gray-900" : "bg-indigo-950 text-white"
      } flex h-screen flex-col overflow-x-hidden md:flex-row`}
    >
      {/* toggle button */}
      <button
        onClick={() => setLightMode(!lightMode)}
        className={`absolute top-4 right-4 rounded px-3 py-1 text-sm font-medium ${
          lightMode ? "bg-slate-400 text-gray-800" : "bg-gray-800 text-gray-200"
        } transition`}
      >
        {lightMode ? "Dark Mode" : "Light Mode"}
      </button>

      {/* left panel */}
      <div className="flex w-full flex-col justify-between p-4 md:w-1/2 md:p-8">
        <CurrentlyPlaying />
      </div>

      {/* right panel */}
      <div className="w-full overflow-y-auto border-t border-gray-200 p-4 md:w-1/2 md:border-t-0 md:border-l md:p-8">
        <Playlist lightMode={lightMode} />
      </div>
    </div>
  );
}
