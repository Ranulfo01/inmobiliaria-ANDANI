import type { Property } from "../types/property";
import { Link } from "react-router-dom";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <Link to={`/property/${property.id}`}>
      <div className="bg-fondCard rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl">

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

          <p className="text-primary text-sm sm:text-base">
            {property.location}
          </p>

          {/* INFO */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">

  <div className="bg-fondCard2 p-3 rounded-lg text-center">
    <p className="text-lg">🛏</p>
    <p className="text-xs text-gray-400">Cuartos</p>
    <p className="font-semibold">{property.rooms}</p>
  </div>

  <div className="bg-fondCard2 p-3 rounded-lg text-center">
    <p className="text-lg">🛁</p>
    <p className="text-xs text-gray-400">Baños</p>
    <p className="font-semibold">{property.bathrooms}</p>
  </div>

  <div className="bg-fondCard2 p-3 rounded-lg text-center">
    <p className="text-lg">📐</p>
    <p className="text-xs text-gray-400">Constr.</p>
    <p className="font-semibold">{property.m2const} m²</p>
  </div>

  <div className="bg-fondCard2 p-3 rounded-lg text-center">
    <p className="text-lg">🚗</p>
    <p className="text-xs text-gray-400">Estac.</p>
    <p className="font-semibold">{property.parking}</p>
  </div>

</div>

        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;