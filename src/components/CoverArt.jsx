import cover from "../assets/placeholder.svg";

export function CoverArt() {
  return (
    <div className="pb-5">
      <img src={cover} alt="Cover Art" className="size-100" />
    </div>
  );
}
