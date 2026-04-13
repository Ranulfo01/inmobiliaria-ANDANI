import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import Gallery from "../components/Gallery";

export default function PropertyDetail() {
  const { id } = useParams();

  const property = properties.find(
    (p) => p.id === Number(id)
  );

  if (!property) {
    return <h2 className="text-center mt-10">Propiedad no encontrada</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-800 text-white p-4 sm:p-6 rounded gap-2">

        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          {property.title}
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-400">
          ${property.price.toLocaleString()}
        </h2>

      </div>

      {/* GALERIA */}
      <div className="mt-6">
        <Gallery images={property.images} />
      </div>

      {/* CONTENIDO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10">

        {/* DESCRIPCIÓN */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            ¿Por qué comprar esta casa?
          </h2>

          <p className="text-gray-400 leading-relaxed text-justify text-sm sm:text-base">
            {property.description}
          </p>
        </div>

        {/* CARACTERISTICAS */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            Características
          </h2>

          <ul className="grid grid-cols-2 gap-2 text-sm sm:text-base text-gray-300">

            <li>✔ {property.rooms} Cuartos</li>
            <li>✔ {property.bathrooms} Baños</li>
            <li>✔ Cocina moderna</li>
            <li>✔ Estudio</li>
            <li>✔ {property.m2const} m² construcción</li>
            <li>✔ {property.m2terr} m² terreno</li>
            <li>✔ {property.parking} estacionamientos</li>

          </ul>
        </div>

      </div>

      {/* CONTACTO */}
      <div className="mt-10 border-t border-gray-700 pt-6">

        <h3 className="font-bold text-lg mb-2">
          ¿Te interesó esta casa?
        </h3>

        <p className="text-gray-400 mb-4">
          Contáctanos para más información
        </p>

        <div className="space-y-2 text-sm sm:text-base">
          <p>📞 443 328 8380</p>
          <p>✉ carosolorio6@gmail.com</p>
        </div>

        {/* BOTÓN WHATSAPP */}
        <a
          href="https://wa.me/524433288380"
          target="_blank"
          className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Contactar por WhatsApp
        </a>

      </div>

    </div>
  );
}