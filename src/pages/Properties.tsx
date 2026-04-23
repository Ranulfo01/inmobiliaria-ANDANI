import { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import { getProperties } from "../services/propertyService";
import type { Property } from "../types/property";

export default function Properties() {

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  const [city, setCity] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  //  TRAER DATOS DEL BACKEND
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

  //  FILTROS
  const filteredProperties = properties.filter((property) => {
    return (
      (city === "" || property.location.toLowerCase().includes(city.toLowerCase())) &&
      (minPrice === "" || property.price >= Number(minPrice)) &&
      (bedrooms === "" || property.rooms >= Number(bedrooms))
    );
  });

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl text-textSecondary mb-6">
        Todas las propiedades
      </h1>

      <h2 className="text-lg text-textSecondary mb-6">
        Descubre la oportunidad de encontrar tu nuevo hogar.
      </h2>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-400">
          Cargando propiedades...
        </p>
      )}

      {/* FILTROS */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <input
          type="text"
          placeholder="Ciudad"
          className="border p-3 rounded text-black"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="number"
          placeholder="Precio mínimo"
          className="border p-3 rounded text-black"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <select
          className="border p-3 rounded text-black"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="">Habitaciones</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>

      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredProperties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
          />
        ))}

      </div>

    </div>
  );
}