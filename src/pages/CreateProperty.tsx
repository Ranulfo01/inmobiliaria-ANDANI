import { useState } from "react";

const API = import.meta.env.VITE_API_URL

export default function CreateProperty() {

  const [form, setForm] = useState({
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

  const [images, setImages] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);

  //  INPUTS
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  //  IMÁGENES
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //console.log("IMÁGENES SELECCIONADAS:", e.target.files);
      setImages(e.target.files);
    }
  };

  //  SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    //console.log(" SUBMIT EJECUTADO");
    e.preventDefault();
    setLoading(true);

    const data = new FormData();

    //  campos
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    //  imágenes
    if (images && images.length > 0) {
      Array.from(images).forEach((img) => {
        data.append("images", img); 
      });
    }

    try {

      const token = localStorage.getItem("token");
          //console.log(token);

      const res = await fetch(`${API}/properties`, {
        method: "POST",
        headers:{
          Authorization: `Bearer ${token}`
        },
        body: data
      });



      // debug real
      const text = await res.text();
      //console.log(" RESPUESTA BACKEND:", text);

      if (!res.ok) {
        throw new Error(text);
      }

      const result = JSON.parse(text);

      console.log("PROPIEDAD CREADA:", result);

      alert("Propiedad creada correctamente ");

      // limpiar formulario
      setForm({
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

      setImages(null);

    } catch (error: unknown) {

      if (error instanceof Error) {
        console.error(" ERROR:", error.message);
        alert("Error:\n" + error.message);
      } else {
        console.error(" ERROR DESCONOCIDO:", error);
        alert("Error desconocido");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl text-white mb-6">
        Crear Propiedad
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-4">

        <input name="title" placeholder="Título" value={form.title} onChange={handleChange} className="p-3 rounded text-black"/>

        <input name="price" type="number" placeholder="Precio" value={form.price} onChange={handleChange} className="p-3 rounded text-black"/>

        <input name="location" placeholder="Ubicación" value={form.location} onChange={handleChange} className="p-3 rounded text-black"/>

        <input name="rooms" type="number" placeholder="Cuartos" value={form.rooms} onChange={handleChange} className="p-3 rounded text-black"/>

        <input name="bathrooms" type="number" placeholder="Baños" value={form.bathrooms} onChange={handleChange} className="p-3 rounded text-black"/>

        <input name="m2const" type="number" placeholder="m² construcción" value={form.m2const} onChange={handleChange} className="p-3 rounded text-black"/>

        <input name="m2terr" type="number" placeholder="m² terreno" value={form.m2terr} onChange={handleChange} className="p-3 rounded text-black"/>

        <input name="parking" type="number" placeholder="Estacionamientos" value={form.parking} onChange={handleChange} className="p-3 rounded text-black"/>

        <select name="status" value={form.status} onChange={handleChange} className="p-3 rounded text-black">
          <option value="nueva">Nueva</option>
          <option value="usada">Usada</option>
          <option value="destacada">Destacada</option>
        </select>

        <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange} className="p-3 rounded text-black"/>

        {/* IMÁGENES */}
      <input type="file" multiple name="images" onChange={handleImageChange} />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 p-3 rounded text-white hover:bg-green-600 transition"
        >
          {loading ? "Subiendo..." : "Crear propiedad"}
        </button>

      </form>

    </div>
  );
}