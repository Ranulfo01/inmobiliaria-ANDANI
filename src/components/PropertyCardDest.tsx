import type { Property } from "../types/property";
import { Link } from "react-router-dom";

interface Props {
  property: Property;
  onDelete?: (id: string) => void; 
}

const PropertyCardDest = ({ property, onDelete }: Props) => {
  return (
    <div>
      {/* CARD CLICKABLE */}
      <Link to={`/property/${property._id}`}>
        <div className="bg-[#3d3b3a] rounded-xl overflow-hidden shadow-lg hover:scale-110 transition duration-300">

          <img
            src={property.images?.[0]}
            alt={property.title}
            className="h-60 w-full object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold">{property.title}</h3>

            <p className="text-amber-400 text-lg font-bold mt-2">
              $
              {property.price
                ? Number(property.price).toLocaleString()
                : "Sin precio"}
            </p>

            <p className="text-gray-400">{property.location}</p>

            <div className="flex flex-wrap gap-2 mt-2 text-gray-400 text-sm">
              <p>{property.rooms} Cuartos</p>
              <p>{property.bathrooms} Baños</p>
              <p>{property.m2const} m²</p>
              <p>{property.parking} Estac.</p>
            </div>
          </div>
        </div>
      </Link>

      {/* 🔥 BOTÓN FUERA DEL LINK */}
      {onDelete && (
        <button
          onClick={() => onDelete(property._id)}
          className="bg-red-500 text-white p-2 rounded mt-3 w-full hover:bg-red-600"
        >
          Eliminar
        </button>
      )}
    </div>
  );
};

export default PropertyCardDest;