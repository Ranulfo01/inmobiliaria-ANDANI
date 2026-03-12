import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold text-amber-400 mb-10">
        ANDANI Inmobiliaria
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

    </div>
  );
};

export default Home;