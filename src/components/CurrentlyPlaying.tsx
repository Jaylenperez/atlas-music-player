// src/components/CurrentlyPlaying.tsx
import React, { useEffect, useState } from "react";
import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";

interface PlaylistSong {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

interface Song extends PlaylistSong {
  cover: string;
  song: string;
}

interface CurrentlyPlayingProps {
  lightMode: boolean;
  track: PlaylistSong;
}

export const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  lightMode,
  track,
}) => {
  // we'll store the full Song here once we fetch it
  const [fullSong, setFullSong] = useState<Song | null>(null);

  useEffect(() => {
    // every time `track.id` changes, fetch its details
    fetch(`/api/v1/songs/${track.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load song details");
        return res.json();
      })
      .then((data: Song) => setFullSong(data))
      .catch((err) => {
        console.error(err);
        setFullSong(null);
      });
  }, [track.id]);

  // while loading, you can show a spinner or fallback image
  const coverSrc = fullSong?.cover ?? "/placeholder.svg";

  return (
    <div className="flex h-full w-full flex-col justify-between px-4 py-4">
      <div className="flex-shrink-0">
        <CoverArt src={coverSrc} />
      </div>

      {fullSong && (
        <div className="space-y-3">
          <SongTitle
            lightMode={lightMode}
            title={fullSong.title}
            artist={fullSong.artist}
          />
          <PlayControls lightMode={lightMode} />
        </div>
      )}

      <div className="flex-shrink-0">
        <VolumeControls lightMode={lightMode} />
      </div>
    </div>
  );
};
