// src/components/CurrentlyPlaying.jsx
import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";

export default function CurrentlyPlaying({ lightMode }) {
  return (
    <div className="flex h-full w-full flex-col justify-between px-4 py-4">
      {/* Top: cover art */}
      <div className="flex-shrink-0">
        <CoverArt />
      </div>

      {/* Middle: song title + play/pause/etc */}
      <div className="space-y-3">
        <SongTitle lightMode={lightMode} />
        <PlayControls />
      </div>

      {/* Bottom: volume slider */}
      <div className="flex-shrink-0">
        <VolumeControls />
      </div>
    </div>
  );
}
