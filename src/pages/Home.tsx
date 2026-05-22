import PropertyCard from "../components/PropertyCard";
import PropertyCardDest from "../components/PropertyCardDest";
import TestimonialCarousel from "../components/TestimonialCarousel";
import { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";

const API = import.meta.env.VITE_API_URL;

// TIPADO
interface Property {
  _id: string;
  title: string;
  price: number;
  location: string;
  images: {
    url: string;
    public_id: string;
  }[];
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
      await fetch(`${API}/properties/${id}`, {
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
      {/* Escritorio*/}

      <h2 className="hidden md:block text-2xl font-serif text-textSecondary mb-10 text-center">
        "Tu próximo capítulo comienza aquí" 
        <br/> 
        <br/>
        Bienvenido a <span className=" text-justify font-bold">ANDANI.</span> Creemos que una propiedad no es solo un espacio, 
        sino el escenario donde se construyen tus mejores momentos. Por eso, hemos seleccionado minuciosamente residencias 
        exclusivas que combinan arquitectura de vanguardia, confort y la más alta plusvalía. 
        <br/> 
        <br/> 
        Estás a un paso de estrenar el hogar que refleja tu éxito, permítenos guiarte a tu próximo destino.
      </h2>

       {/*CELULAR*/}
       <h2 className="bock md:hidden text-lg font-serif text-textSecondary mb-8 text-center leading-8 px-">
        "Tu próximo capitulo comienza aqui"
        <br/>
        Bienvenido a <span className="font-bold">ANDANI </span>
        Descubre propiedades exclusivas diseñadas para brindar confort, estilo y alta plusvalía.
        <br/>
        <br/>
        Tu nuevo hogar te espera.
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
          Selección Premium del Mes
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
              property={property}
            />
          ))}
        </div>
      </div>

      {/* TESTIMONIOS */}
      <div className="mt-20">
        <h2 className="text-2xl font-serif text-textSecondary mb-6 text-center">
          Testimonios de clientes de Andani
        </h2>

        <TestimonialCarousel />
      </div>

    </div>
  );
};

export default Home;