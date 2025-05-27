// src/components/CurrentlyPlaying.jsx
import { CoverArt } from "./CoverArt";
import { SongTitle } from "./SongTitle";
import { PlayControls } from "./PlayControls";
import { VolumeControls } from "./VolumeControls";
import { useEffect, useState } from "react";

export default function CurrentlyPlaying({ lightMode, track }) {
  const [lyrics, setLyrics] = useState("");

  // optional: fetch your lyrics endpoint once per track
  useEffect(() => {
    fetch("/api/v1/lyrics")
      .then((r) => r.json())
      .then((data) => setLyrics(data.lyrics))
      .catch((err) => console.error("Lyrics fetch failed", err));
  }, [track.id]);

  return (
    <div className="flex h-full w-full flex-col justify-between px-4 py-4">
      <div className="flex-shrink-0">
        <CoverArt src={track.cover} />
      </div>

      <div className="space-y-3">
        {/* show the real title/artist */}
        <SongTitle
          lightMode={lightMode}
          title={track.title}
          artist={track.artist}
        />
        <PlayControls lightMode={lightMode} />
      </div>

      <div className="flex-shrink-0">
        <VolumeControls lightMode={lightMode} />
      </div>

      {/* bonus: display a snippet of lyrics */}
      {lyrics && (
        <pre className="mt-4 max-h-40 overflow-y-auto text-xs whitespace-pre-wrap">
          {lyrics}
        </pre>
      )}
    </div>
  );
}
