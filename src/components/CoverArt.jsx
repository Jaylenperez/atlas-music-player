import cover from "../assets/placeholder.svg";

export function CoverArt() {
  return (
    <div className="w-full md:w-auto">
      <img
        src={cover}
        alt="Cover Art"
        className="aspect-square w-full rounded-md object-cover md:h-140 md:w-auto"
      />
    </div>
  );
}
