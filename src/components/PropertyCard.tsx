import type { Property } from "../types/property";
import { Link } from "react-router-dom";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl">

        {/* IMAGEN */}
        <img
          src={property.image}
          alt={property.title}
          className="h-48 sm:h-56 md:h-60 w-full object-cover"
        />

        {/* CONTENIDO */}
        <div className="p-4 sm:p-5">
          
          <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">
            {property.title}
          </h3>

          <p className="text-amber-400 text-lg sm:text-xl font-bold mt-2">
            ${property.price.toLocaleString()}
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            {property.location}
          </p>

          {/* INFO */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-xs sm:text-sm text-gray-400">
            <span>🛏 Cuartos {property.rooms}</span>
            <span>🛁 Baños {property.bathrooms}</span>
            <span>📐 Construcción {property.m2const} m²</span>
            <span>🚗 Estacionamiento {property.parking}</span>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;