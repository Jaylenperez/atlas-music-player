import cover from "../assets/placeholder.svg";

export function CoverArt() {
  return (
    <div>
      <img
        src={cover}
        alt="Cover Art"
        className="aspect-square h-160 rounded-md object-cover"
      />
    </div>
  );
}
