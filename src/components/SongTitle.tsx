// src/components/SongTitle.tsx
import React from "react";

export interface SongTitleProps {
  lightMode: boolean;
  title: string;
  artist: string;
}

export const SongTitle: React.FC<SongTitleProps> = ({
  lightMode,
  title,
  artist,
}) => (
  <div className="w-full">
    <h2
      className={`text-left text-2xl font-bold ${
        lightMode ? "text-slate-950" : "text-sky-400"
      }`}
    >
      {title}
    </h2>
    <p
      className={`text-left text-lg ${
        lightMode ? "text-yellow-950" : "text-fuchsia-500"
      }`}
    >
      {artist}
    </p>
  </div>
);
