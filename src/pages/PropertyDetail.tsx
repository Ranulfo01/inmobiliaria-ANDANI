import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import Gallery from "../components/Gallery";

export default function PropertyDetail() {

  const { id } = useParams()

  const property = properties.find(
    (p) => p.id === Number(id)
  )

  if (!property) {
    return <h2>Propiedad no encontrada</h2>
  }

  return (

    <div className="max-w-6xl mx-auto p-6">

      {/* HEADER */}

      <div className="flex justify-between items-center bg-gray-800 text-white p-6 rounded">

        <h1 className="text-2xl font-bold">
          {property.title}
        </h1>

        <h2 className="text-2xl font-semibold text-yellow-400">
          ${property.price.toLocaleString()}
        </h2>

      </div>

      {/* GALERIA */}

      <div className="mt-6">
        <Gallery images={property.images} />
      </div>

      {/* CONTENIDO */}

      <div className="grid grid-cols-2 gap-10 mt-10">

        <div>

          <h2 className="text-xl font-bold mb-4">
            ¿Por qué comprar esta casa?
          </h2>

          <p className="text-gray-600 leading-relaxed text-justify">
            {property.description}
          </p>

        </div>

        {/* CARACTERISTICAS */}

        <div>

          <h2 className="text-xl font-bold mb-4">
            Características
          </h2>

          <ul className="space-y-2">

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

      <div className="mt-8 border-t pt-6">

        <h3 className="font-bold text-lg">
          ¿Te interesó esta casa? 
        </h3>
          <h3 className="font-bold text-lg">
          Contactanos 
        </h3>

        <p>📞 443 328 8380</p>
        <p>✉ carosolorio6@gmail.com</p>

      </div>

    </div>
  )
}