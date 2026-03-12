import type { Property } from "../types/property";
import { Link } from "react-router-dom";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  return (
    <Link to={`/property/${property.id}`}>
    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-110 transition duration-350">
      <img
        src={property.image}
        alt={property.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-5" >
        <h3 className="text-xl font-semibold">{property.title}</h3>

        <p className="text-amber-400 text-lg font-bold mt-2">
          ${property.price.toLocaleString()}
        </p>
        <p className="text-gray-400">{property.location}</p>
        <div className="flex align-text-top">
            <p className="text-gray-400 mr-2">{property.rooms} Cuartos</p>
            <p className="text-gray-400 mr-2">{property.bathrooms} Baños</p>
            <p className="text-gray-400 mr-2">{property.m2const} m2</p>
            <p className="text-gray-400 mr-2">{property.parking} Estac.</p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default PropertyCard;