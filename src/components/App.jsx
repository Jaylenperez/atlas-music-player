// src/App.jsx
import React, { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function App() {
  // lightMode state toggles between dark and light themes
  const [lightMode, setLightMode] = useState(false);

  return (
    // Flex layout, full-screen height, responsive on mobile
    <div
      className={`${
        lightMode
          ? "bg-red-50 text-gray-900" /* Background for light & dark mode */
          : "bg-indigo-950 text-white" /* text color switch based on lightmode */
      } flex h-screen flex-col overflow-x-hidden md:flex-row`}
    >
      {/* dark/light mode button to switch themes */}
      <button
        onClick={() => setLightMode(!lightMode)}
        className={`absolute top-4 right-4 rounded px-3 py-1 text-sm font-medium ${
          lightMode ? "bg-slate-400 text-gray-800" : "bg-gray-800 text-gray-200"
        } transition`}
      >
        {lightMode ? "Dark Mode" : "Light Mode"}
      </button>

      {/* Currently playing panel (left side) */}
      <div className="flex w-full flex-col justify-between p-4 md:w-1/2 md:p-8">
        <CurrentlyPlaying lightMode={lightMode} />
      </div>

      {/* Playlist panel (right side) */}
      <div className="w-full overflow-y-auto border-t border-gray-200 p-4 md:w-1/2 md:border-t-0 md:border-l md:p-8">
        <Playlist lightMode={lightMode} />
      </div>
    </div>
  );
}
