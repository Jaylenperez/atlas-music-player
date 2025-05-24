import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center space-y-6 p-4">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
