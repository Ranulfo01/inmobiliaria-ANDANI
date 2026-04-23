import { useEffect, useState } from "react";
import type { Property } from "../types/property";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // TRAER PROPIEDADES
  const fetchProperties = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/properties");
      const data = await res.json();
      setProperties(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // ELIMINAR PROPIEDAD (CON TOKEN)
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("¿Eliminar propiedad?");
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/api/properties/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // eliminar del estado sin recargar
      setProperties((prev) => prev.filter((p) => p._id !== id));

    } catch (err) {
      console.error(err);
      alert("Error al eliminar");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Cargando admin...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-white">
          Panel de Administración
        </h1>

        <button
          onClick={() => navigate("/create")}
          className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg shadow"
        >
          + Nueva Propiedad
        </button>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {properties.map((property) => (
          <div
            key={property._id}
            className="bg-[#2d2d2d] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >

            {/* IMAGEN */}
            <img
              src={property.images?.[0] || "/no-image.jpg"}
              className="w-full h-48 object-cover"
            />

            {/* CONTENIDO */}
            <div className="p-4">

              <h2 className="text-lg font-semibold text-white line-clamp-1">
                {property.title}
              </h2>

              <p className="text-amber-400 font-bold text-lg mt-1">
                ${property.price.toLocaleString()}
              </p>

              <p className="text-gray-400 text-sm">
                {property.location}
              </p>

              {/* INFO */}
              <div className="flex justify-between text-sm text-gray-300 mt-3">
                <span>🛏 {property.rooms}</span>
                <span>🛁 {property.bathrooms}</span>
                <span>🚗 {property.parking}</span>
              </div>

              {/* BOTONES */}
              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => navigate(`/edit/${property._id}`)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                >
                  Editar
                </button>

                <button
                  onClick={() => handleDelete(property._id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded"
                >
                  Eliminar
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* VACÍO */}
      {properties.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No hay propiedades aún
        </p>
      )}

    </div>
  );
}