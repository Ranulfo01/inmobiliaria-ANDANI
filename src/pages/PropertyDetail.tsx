import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Property } from "../types/property";

const API = import.meta.env.VITE_API_URL;

export default function PropertyDetail() {

  const { id } = useParams();

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`${API}/properties/${id}`)
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
    return <p className="text-center mt-10 text-gray-400">Cargando propiedad...</p>;
  }

  if (!property) {
    return <p className="text-center mt-10 text-gray-400">Propiedad no encontrada</p>;
  }

  return (
    <>
      {/* MODAL */}
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
              setActiveImage(property.images[newIndex]?.url);
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
              setActiveImage(property.images[newIndex]?.url);
            }}
            className="absolute right-5 text-white text-4xl"
          >
            ›
          </button>

        </div>
      )}

      {/* CONTENIDO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-white ">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#2d2d2d] p-5 rounded-xl gap-3 shadow">

          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {property.title}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              📍 {property.location}
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl text-amber-400 font-semibold">
            ${property.price.toLocaleString()}
          </h2>

        </div>

        {/* GALERÍA */}
        <div className="mt-6">

          {/* IMAGEN PRINCIPAL */}
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden rounded-xl shadow">
            <img
              src={property.images?.[currentIndex]?.url || "https://via.placeholder.com/800"}
              onClick={() => setActiveImage(property.images[currentIndex]?.url)}
              className="w-full h-full object-cover cursor-pointer transition"
            />
          </div>

          {/* MINIATURAS */}
          <div className="mt-3 flex md:grid md:grid-cols-5 gap-3 overflow-x-auto md:overflow-visible pb-2">

            {property.images?.map((img, index) => (
              <img
                key={index}
                src={img.url}
                onClick={() => {
                  setCurrentIndex(index);
                  setActiveImage(img.url);
                }}
                className={`h-20 w-28 md:w-full object-cover rounded-lg cursor-pointer border-2 transition
                  ${currentIndex === index ? "border-amber-800" : "border-transparent"}
                `}
              />
            ))}

          </div>

        </div>

        {/* INFO */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* DESCRIPCIÓN */}
          <div className="bg-[#2d2d2d] rounded-lg text-center p-4">
            <h2 className="text-xl font-semibold mb-3">
              Descripción
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {property.description || "Sin descripción"}
            </p>
          </div>

          {/* CARACTERÍSTICAS */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Características
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

              <div className="bg-[#2d2d2d] p-4 rounded-lg text-center">
                🛏
                <p className="font-bold text-lg">{property.rooms}</p>
                <span className="text-sm text-gray-400">Cuartos</span>
              </div>

              <div className="bg-[#2d2d2d] p-4 rounded-lg text-center">
                🛁
                <p className="font-bold text-lg">{property.bathrooms}</p>
                <span className="text-sm text-gray-400">Baños</span>
              </div>

              <div className="bg-[#2d2d2d] p-4 rounded-lg text-center">
                🚗
                <p className="font-bold text-lg">{property.parking}</p>
                <span className="text-sm text-gray-400">Parking</span>
              </div>

              <div className="bg-[#2d2d2d] p-4 rounded-lg text-center">
                📐
                <p className="font-bold text-lg">{property.m2const} m²</p>
                <span className="text-sm text-gray-400">Construcción</span>
              </div>

              <div className="bg-[#2d2d2d] p-4 rounded-lg text-center">
                🌳
                <p className="font-bold text-lg">{property.m2terr || "-"}</p>
                <span className="text-sm text-gray-400">Terreno</span>
              </div>

              <div className="bg-[#2d2d2d] p-4 rounded-lg text-center">
                🏷
                <p className="font-bold text-lg capitalize">{property.status}</p>
                <span className="text-sm text-gray-400">Estado</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}