import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      <h1 className="text-4xl font-bold text-amber-400 mb-10">
        ANDANI Tu mejor aliado en la adquisición de una propiedad. 
      </h1>
      <h2 className="text-2xl font-serif text-amber-800 mb-10 text-center">
        "Tu proximo Capitulo Comienza aqui" 
      </h2>
      <div>
        <h2 className="text-2xl font-serif text-white mb-2 text-center">
          Casas destacadas de la semana
        </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
            ))}
          </div>
      </div>

    </div>
  );
};

export default Home;