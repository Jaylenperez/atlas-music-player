// src/components/CoverArt.jsx
export function CoverArt({ src, alt = "Cover Art" }) {
  return (
    <div className="flex justify-center md:justify-start">
      <img
        src={src}
        alt={alt}
        className="aspect-square w-full rounded-md object-cover sm:w-72 md:w-80 lg:w-96 xl:w-[50rem]"
      />
    </div>
  );
}
