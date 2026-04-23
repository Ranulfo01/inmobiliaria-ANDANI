import PropertyCard from "../components/PropertyCard";
import PropertyCardDest from "../components/PropertyCardDest";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";

// TIPADO
interface Property {
  _id: string;
  title: string;
  price: number;
  location: string;
  images: string[];
  status: string;
  rooms: number;
  bathrooms: number;
  m2const: number;
  parking: number;
}

const Home = () => {

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProperties()
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  //  DELETE
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("¿Eliminar propiedad?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/api/properties/${id}`, {
        method: "DELETE"
      });

      //  actualizar estado sin recargar
      setProperties(prev => prev.filter(p => p._id !== id));

    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  // FILTROS
  const destacadas = properties.filter(p => p.status === "destacada");
  const nuevas = properties.filter(p => p.status === "nueva");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-textSecondary mb-10 text-center">
        ANDANI Tu mejor aliado en la adquisición de una propiedad.
      </h1>

      <h2 className="text-2xl font-serif text-textSecondary mb-10 text-center">
        "Tu próximo capítulo comienza aquí"
      </h2>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-400">
          Cargando propiedades...
        </p>
      )}

      {/* DESTACADAS */}
      <div>
        <h2 className="text-2xl font-serif text-textSecondary mb-4 text-center">
          Casas destacadas de la semana
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destacadas.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
              onDelete={handleDelete} //
            />
          ))}
        </div>
      </div>

      {/* NUEVAS */}
      <div className="mt-10">
        <h2 className="text-2xl font-serif text-textSecondary mb-4 text-center">
          Casas totalmente nuevas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nuevas.map((property) => (
            <PropertyCardDest
              key={property._id}
              property={property} onDelete={handleDelete} //
            />
          ))}
        </div>
      </div>

      {/* TESTIMONIOS */}
      <div className="mt-20">
        <h2 className="text-2xl font-serif text-textSecondary mb-6 text-center">
          Testimonios de clientes
        </h2>

        <TestimonialCarousel />
      </div>

    </div>
  );
};

export default Home;