// src/components/CurrentlyPlaying.tsx
import React, { useEffect, useState } from "react";
import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import PlayControls from "./PlayControls";
import { VolumeControls } from "./VolumeControls";

/** same minimal shape as playlist items */
interface PlaylistSong {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}
/** full song payload (includes cover) */
interface Song extends PlaylistSong {
  cover: string;
  song: string;
}

interface Props {
  lightMode: boolean;
  track: PlaylistSong;
  playlist: PlaylistSong[];
  onSelect: (t: PlaylistSong) => void;
}

const CurrentlyPlaying: React.FC<Props> = ({
  lightMode,
  track,
  playlist,
  onSelect,
}) => {
  const [fullSong, setFullSong] = useState<Song | null>(null);

  // fetch cover (and other fields) whenever track changes
  useEffect(() => {
    fetch(`/api/v1/songs/${track.id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Song fetch failed");
        return r.json();
      })
      .then((data: Song) => setFullSong(data))
      .catch((_) => setFullSong(null));
  }, [track.id]);

  // fallback while loading
  const coverSrc = fullSong?.cover ?? "/placeholder.svg";

  // find our position in the list
  const idx = playlist.findIndex((t) => t.id === track.id);
  const isFirst = idx <= 0;
  const isLast = idx === playlist.length - 1;

  const handleBack = () => {
    if (!isFirst) onSelect(playlist[idx - 1]);
  };
  const handleForward = () => {
    if (!isLast) onSelect(playlist[idx + 1]);
  };

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
          <PlayControls
            lightMode={lightMode}
            onBack={handleBack}
            onForward={handleForward}
            disableBack={isFirst}
            disableForward={isLast}
          />
        </div>
      )}

      <div className="flex-shrink-0">
        <VolumeControls lightMode={lightMode} />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
