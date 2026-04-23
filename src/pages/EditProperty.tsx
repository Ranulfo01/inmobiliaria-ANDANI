import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface PropertyForm {
  title: string;
  price: string;
  location: string;
  rooms: string;
  bathrooms: string;
  m2const: string;
  m2terr: string;
  parking: string;
  status: string;
  description: string;
}

export default function EditProperty() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState<PropertyForm>({
    title: "",
    price: "",
    location: "",
    rooms: "",
    bathrooms: "",
    m2const: "",
    m2terr: "",
    parking: "",
    status: "nueva",
    description: ""
  });

  const [loading, setLoading] = useState(true);

  //  CARGAR DATOS
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/properties/${id}`);
        const data = await res.json();

        setForm({
          title: data.title || "",
          price: data.price?.toString() || "",
          location: data.location || "",
          rooms: data.rooms?.toString() || "",
          bathrooms: data.bathrooms?.toString() || "",
          m2const: data.m2const?.toString() || "",
          m2terr: data.m2terr?.toString() || "",
          parking: data.parking?.toString() || "",
          status: data.status || "nueva",
          description: data.description || ""
        });

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProperty();
  }, [id]);

  //  INPUTS
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  //  SUBMIT CORRECTO
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:5000/api/properties/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Propiedad actualizada correctamente");
      navigate("/admin");

    } catch (error) {
      console.error(error);
      alert("Error al actualizar");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Cargando...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl text-white mb-6">
        Editar Propiedad
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4">

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título"
          className="p-3 rounded text-black"
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Precio"
          className="p-3 rounded text-black"
        />

        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Ubicación"
          className="p-3 rounded text-black"
        />

        <input
          name="rooms"
          type="number"
          value={form.rooms}
          onChange={handleChange}
          placeholder="Cuartos"
          className="p-3 rounded text-black"
        />

        <input
          name="bathrooms"
          type="number"
          value={form.bathrooms}
          onChange={handleChange}
          placeholder="Baños"
          className="p-3 rounded text-black"
        />

        <input
          name="m2const"
          type="number"
          value={form.m2const}
          onChange={handleChange}
          placeholder="m² construcción"
          className="p-3 rounded text-black"
        />

        <input
          name="m2terr"
          type="number"
          value={form.m2terr}
          onChange={handleChange}
          placeholder="m² terreno"
          className="p-3 rounded text-black"
        />

        <input
          name="parking"
          type="number"
          value={form.parking}
          onChange={handleChange}
          placeholder="Estacionamientos"
          className="p-3 rounded text-black"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="p-3 rounded text-black"
        >
          <option value="nueva">Nueva</option>
          <option value="usada">Usada</option>
          <option value="destacada">Destacada</option>
        </select>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Descripción"
          className="p-3 rounded text-black"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          Guardar cambios
        </button>

      </form>

    </div>
  );
}