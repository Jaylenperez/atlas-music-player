// src/components/SongTitle.jsx
export function SongTitle({ lightMode, title, artist }) {
  return (
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
}
