import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Property } from "../types/property";

export default function PropertyDetail() {

  const { id } = useParams();

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/api/properties/${id}`)
      .then(res => res.json())
      .then(data => {
        setProperty(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Cargando propiedad...</p>;
  }

  if (!property) {
    return <p className="text-center mt-10">Propiedad no encontrada</p>;
  }

  return (
    <>
      {/*  MODAL */}
      {activeImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">

          {/* CERRAR */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ✕
          </button>

          {/* IZQUIERDA */}
          <button
            onClick={() => {
              const newIndex =
                (currentIndex - 1 + property.images.length) %
                property.images.length;
              setCurrentIndex(newIndex);
              setActiveImage(property.images[newIndex]);
            }}
            className="absolute left-5 text-white text-4xl"
          >
            ‹
          </button>

          {/* IMAGEN */}
          <img
            src={activeImage}
            className="max-w-[90%] max-h-[80%] rounded-lg"
          />

          {/* DERECHA */}
          <button
            onClick={() => {
              const newIndex =
                (currentIndex + 1) % property.images.length;
              setCurrentIndex(newIndex);
              setActiveImage(property.images[newIndex]);
            }}
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>

        </div>
      )}

      {/* CONTENIDO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 text-white p-4 sm:p-6 rounded gap-2">

          <h1 className="text-xl sm:text-2xl font-bold">
            {property.title}
          </h1>

          <h2 className="text-xl sm:text-2xl text-yellow-400">
            ${property.price.toLocaleString()}
          </h2>

        </div>

        {/* IMÁGENES */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">

  {/* IMAGEN GRANDE */}
            <div className="md:col-span-2">
              <img
                src={property.images?.[0] || "https://via.placeholder.com/800"}
                onClick={() => {
                  setActiveImage(property.images[0]);
                  setCurrentIndex(0);
                }}
                className="w-full h-[300px] md:h-[420px] object-cover rounded-xl cursor-pointer"
              />
            </div>

            {/* MINIATURAS */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[300px] md:h-[420px]">

              {property.images?.slice(1, 5).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => {
                    setActiveImage(img);
                    setCurrentIndex(index + 1);
                  }}
                  className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 transition"
                />
              ))}

            </div>

          </div>

        {/* INFO */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div>
            <h2 className="text-xl font-bold mb-4">
              Descripción
            </h2>

            <p className="text-gray-400">
              {property.description || "Sin descripción"}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">
              Características
            </h2>

            <ul className="space-y-2 text-gray-300">
              <li>✔ {property.rooms} Cuartos</li>
              <li>✔ {property.bathrooms} Baños</li>
              <li>✔ {property.m2const} m² construcción</li>
              <li>✔ {property.m2terr || "-"} m² terreno</li>
              <li>✔ {property.parking} estacionamientos</li>
            </ul>
          </div>

        </div>

      </div>
    </>
  );
}