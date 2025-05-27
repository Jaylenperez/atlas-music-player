// src/components/CurrentlyPlaying.tsx
import React, { useEffect, useRef, useState } from "react";
import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import PlayControls from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { PlaylistSong } from "./App";

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
  const [shuffleEnabled, setShuffleEnabled] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  // lifted playback speed
  const [playbackSpeed, setPlaybackSpeed] = useState<0.5 | 1 | 2>(1);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load song details
  useEffect(() => {
    fetch(`/api/v1/songs/${track.id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Song fetch failed");
        return r.json();
      })
      .then((data: Song) => setFullSong(data))
      .catch(() => setFullSong(null));
  }, [track.id]);

  // When fullSong changes, swap audio
  useEffect(() => {
    if (!fullSong) return;
    audioRef.current?.pause();
    const audio = new Audio(fullSong.song);
    audio.volume = volume / 100;
    audio.playbackRate = playbackSpeed;   // set initial speed
    audioRef.current = audio;
    audio.play().then(() => setIsPlaying(true)).catch(() => {});
    return () => {
      audio.pause();
    };
  }, [fullSong]);

  // Update volume live
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Update playbackRate when speed changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Playback handlers
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  // Back / Forward / Shuffle logic
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
          <PlayControls
            lightMode={lightMode}
            isPlaying={isPlaying}
            onPlayToggle={togglePlay}
            onBack={handleBack}
            onForward={handleForward}
            disableBack={isFirst}
            disableForward={!shuffleEnabled && isLast}
            shuffleEnabled={shuffleEnabled}
            onShuffleToggle={toggleShuffle}
            playbackSpeed={playbackSpeed}
            onSpeedChange={setPlaybackSpeed}
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
