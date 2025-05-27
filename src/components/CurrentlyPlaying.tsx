// src/components/CurrentlyPlaying.tsx
import React, { useEffect, useRef, useState } from "react";
import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import PlayControls from "./PlayControls";
import { VolumeControls } from "./VolumeControls";

/** minimal playlist shape */
export interface PlaylistSong {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}
/** full song payload */
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
  const [shuffleEnabled, setShuffleEnabled] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // fetch song details (cover + song URL)
  useEffect(() => {
    fetch(`/api/v1/songs/${track.id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Song fetch failed");
        return r.json();
      })
      .then((data: Song) => setFullSong(data))
      .catch(() => setFullSong(null));
  }, [track.id]);

  // when fullSong changes, initialize audio
  useEffect(() => {
    if (!fullSong) return;
    // pause existing audio
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(fullSong.song);
    audio.volume = volume / 100;
    audioRef.current = audio;
    // auto-play on song change
    audio.play().catch(() => {});

    return () => {
      audio.pause();
    };
  }, [fullSong]);

  // update volume on change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const coverSrc = fullSong?.cover ?? "/placeholder.svg";

  const idx = playlist.findIndex((t) => t.id === track.id);
  const isFirst = idx <= 0;
  const isLast = idx === playlist.length - 1;

  const handleBack = () => {
    if (!isFirst) onSelect(playlist[idx - 1]);
  };
  const handleForward = () => {
    if (shuffleEnabled) {
      const rand = Math.floor(Math.random() * playlist.length);
      onSelect(playlist[rand]);
    } else if (!isLast) {
      onSelect(playlist[idx + 1]);
    }
  };
  const toggleShuffle = () => setShuffleEnabled((s) => !s);

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
            disableForward={!shuffleEnabled && isLast}
            shuffleEnabled={shuffleEnabled}
            onShuffleToggle={toggleShuffle}
          />
        </div>
      )}

      <div className="flex-shrink-0">
        <VolumeControls
          lightMode={lightMode}
          volume={volume}
          onVolumeChange={setVolume}
        />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
