// src/App.jsx
import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function App() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-indigo-950 md:flex-row">
      {/* On mobile: full width & stacked; on md+: left half */}
      <div className="flex w-full flex-col justify-between p-4 font-sans md:w-1/2 md:p-8">
        <CurrentlyPlaying />
      </div>

      {/* On mobile: full width below; on md+: right half */}
      <div className="w-full overflow-y-auto border-t border-gray-200 p-4 md:w-1/2 md:border-t-0 md:border-l md:p-8">
        <Playlist />
      </div>
    </div>
  );
}
