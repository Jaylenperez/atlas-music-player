import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";

export default function CurrentlyPlaying() {
  return (
    <div className="pt-.5 flex h-full w-full flex-col items-start space-y-3 px-4 pt-0 pb-4">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}
