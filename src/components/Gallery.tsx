import { useState, useEffect, useCallback } from "react";

interface Props {
  images: string[];
}

export default function Gallery({ images }: Props) {

  const [selected, setSelected] = useState<number | null>(null);

  const nextImage = useCallback(() => {
    if (selected === null || images.length === 0) return;
    setSelected((prev) => ((prev ?? 0) + 1) % images.length);
  }, [selected, images]);

  const prevImage = useCallback(() => {
    if (selected === null || images.length === 0) return;
    setSelected((prev) => ((prev ?? 0) - 1 + images.length) % images.length);
  }, [selected, images]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextImage, prevImage]);

  // ✅ Validación después de hooks
  if (!images || images.length === 0) {
    return <p className="text-white">No hay imágenes</p>;
  }

  return (
    <div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

        {/* IMAGEN GRANDE */}
        <img
          src={images[0]}
          onClick={() => setSelected(0)}
          className="w-full h-64 md:h-[400px] object-cover rounded-lg cursor-pointer"
        />

        {/* MINIATURAS */}
        <div className="grid grid-cols-2 gap-2">
          {images.slice(1, 5).map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setSelected(index + 1)}
              className="w-full h-32 md:h-[190px] object-cover rounded-lg cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setSelected(null)}
          >
            ✕
          </button>

          <button
            className="absolute left-5 text-white text-4xl"
            onClick={prevImage}
          >
            ‹
          </button>

          <img
            src={images[selected]}
            className="max-h-[80vh] max-w-[90%] rounded-lg"
          />

          <button
            className="absolute right-5 text-white text-4xl"
            onClick={nextImage}
          >
            ›
          </button>

        </div>
      )}
    </div>
  );
}