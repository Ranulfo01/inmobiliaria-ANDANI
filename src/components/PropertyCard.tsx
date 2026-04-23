import { Link } from "react-router-dom";

export interface Property {
  _id: string;
  title: string;
  price: number;
  location: string;
  images: string[];
  status: string;
  rooms: number;
  bathrooms: number;
  m2const: number;
  m2terr?: number;
  parking: number;
  description?: string;
}

//  AGREGAR PROPS
interface Props {
  property: Property;
  onDelete?: (id: string) => void;
}

const handleDelete = async (id: string) => {
  const confirmDelete = confirm("¿Eliminar propiedad?");
  if (!confirmDelete) return;

  try {
    await fetch(`http://localhost:5000/api/properties/${id}`, {
      method: "DELETE"
    });

    alert("Propiedad eliminada");

    //  recargar lista
    window.location.reload();

  } catch (error) {
    console.error(error);
    alert("Error al eliminar");
  }
};


const PropertyCard = ({ property }: Props) => {
  return (

    <div className="bg-fondCard rounded-xl overflow-hidden shadow-lg">
    <Link to={`/property/${property._id}`}>
      <div className="bg-fondCard rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105 hover:shadow-2xl">

        {/* IMAGEN */}
        <img
          src={property.images?.[0] || "/no-image.jpg"}
          alt={property.title}
          className="h-48 sm:h-56 md:h-60 w-full object-cover"
        />

        {/* CONTENIDO */}
        <div className="p-4 sm:p-5">
          
          <h3 className="text-lg sm:text-xl font-semibold line-clamp-2">
            {property.title}
          </h3>

          <p className="text-amber-400 text-lg sm:text-xl font-bold mt-2">
            ${property.price?.toLocaleString() || "0"}
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


      <button
          onClick={() => handleDelete(property._id)} className="bg-red-500 text-white p-2 rounded mt-2">
              Eliminar
        </button>
    </div>
  );
};

export default PropertyCard;