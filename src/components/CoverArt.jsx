// src/components/CoverArt.jsx
import cover from "../assets/placeholder.svg";

export function CoverArt() {
  return (
    <div className="flex justify-center md:justify-start">
      <img
        src={cover}
        alt="Cover Art"
        className="/* always 1:1 */ /* mobile: fill available width */ /* ≥640px: max 18rem wide */ /* ≥768px: max 20rem wide */ /* ≥1024px: max 24rem wide */ /* ≥1280px: max 30rem wide (arbitrary) */ aspect-square w-full rounded-md object-cover sm:w-72 md:w-80 lg:w-96 xl:w-[50rem]"
      />
    </div>
  );
}
