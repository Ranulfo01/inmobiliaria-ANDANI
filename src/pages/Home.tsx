import PropertyCard from "../components/PropertyCard";
import PropertyCardDest from "../components/PropertyCardDest";
import { properties } from "../data/properties";
import  TestimonialCarousel  from "../components/TestimonialCarousel"


const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      <h1 className="text-4xl font-bold text-textSecondary mb-10">
        ANDANI Tu mejor aliado en la adquisición de una propiedad. 
      </h1>
      <h2 className="text-2xl font-serif text-textSecondary mb-10 text-center">
        "Tu proximo Capitulo Comienza aqui" 
      </h2>
      <div>
        <h2 className="text-2xl font-serif text-textSecondary mb-2 text-center">
          Casas destacadas de la semana
        </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.filter((property)=>property.condition==="destacada").map((property) => (
            <PropertyCard key={property.id} property={property} />
            ))}
          </div>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-serif text-textSecondary mb-2 text-center">
          Casas Totalmente Nuevas
        </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.filter((property)=>property.condition==="nueva").map((property) => (
            <PropertyCardDest key={property.id} property={property} />
            ))}
          </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-serif text-textSecondary mb-2 text-center">
          Testimonios de los clientes
        </h2>
        <TestimonialCarousel/>
      </div>

    </div>
  );
};

export default Home;