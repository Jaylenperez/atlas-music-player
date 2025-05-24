// src/App.jsx
import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-1/2 flex-col justify-between p-8 font-sans">
        <CurrentlyPlaying />
        <Footer />
      </div>

      <div className="w-1/2 overflow-y-auto border-l border-gray-200 p-8">
        <Playlist />
      </div>
    </div>
  );
}
