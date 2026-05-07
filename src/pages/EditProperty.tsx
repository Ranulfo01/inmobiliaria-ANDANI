import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

//  TIPO CORRECTO DE IMAGEN
type ImageType = {
  url: string;
  public_id: string;
};

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

  //  IMÁGENES CORRECTAS
  const [images, setImages] = useState<ImageType[]>([]);
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);
  const [newImages, setNewImages] = useState<FileList | null>(null);

  const [loading, setLoading] = useState(true);

  //  Cargar propiedad
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`${API}/properties/${id}`);
        const data = await res.json();

        setForm({
          title: data.title,
          price: data.price.toString(),
          location: data.location,
          rooms: data.rooms.toString(),
          bathrooms: data.bathrooms.toString(),
          m2const: data.m2const.toString(),
          m2terr: data.m2terr.toString(),
          parking: data.parking.toString(),
          status: data.status,
          description: data.description
        });

        setImages(data.images || []);
      } catch (error) {
        console.error(error);
        alert("Error cargando propiedad");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  //  Inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  //  Nuevas imágenes
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewImages(e.target.files);
    }
  };

  //  ELIMINAR IMAGEN (CLAVE)
  const handleRemoveImage = (index: number) => {
    const imgToRemove = images[index];

    // guardar public_id para backend
    setImagesToDelete(prev => [...prev, imgToRemove.public_id]);

    // quitar del estado visual
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  //  Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const data = new FormData();

    // campos
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    //  enviar imágenes a eliminar
    data.append("imagesToDelete", JSON.stringify(imagesToDelete));

    //  nuevas imágenes
    if (newImages && newImages.length > 0) {
      Array.from(newImages).forEach((img) => {
        data.append("images", img);
      });
    }

    try {
      const res = await fetch(`${API}/properties/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: data
      });

      const text = await res.text();

      if (!res.ok) {
        throw new Error(text);
      }

      alert("Propiedad actualizada correctamente");
      navigate("/admin");

    } catch (error) {
      console.error(error);
      alert("Error al actualizar propiedad");
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-400">Cargando...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">
        Editar Propiedad
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-6">

        {/* FORM */}
        <div className="grid md:grid-cols-2 gap-4">

          <input name="title" value={form.title} onChange={handleChange} placeholder="Título" className="p-3 rounded text-black"/>

          <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Precio" className="p-3 rounded text-black"/>

          <input name="location" value={form.location} onChange={handleChange} placeholder="Ubicación" className="p-3 rounded text-black"/>

          <input name="rooms" type="number" value={form.rooms} onChange={handleChange} placeholder="Cuartos" className="p-3 rounded text-black"/>

          <input name="bathrooms" type="number" value={form.bathrooms} onChange={handleChange} placeholder="Baños" className="p-3 rounded text-black"/>

          <input name="m2const" type="number" value={form.m2const} onChange={handleChange} placeholder="m² construcción" className="p-3 rounded text-black"/>

          <input name="m2terr" type="number" value={form.m2terr} onChange={handleChange} placeholder="m² terreno" className="p-3 rounded text-black"/>

          <input name="parking" type="number" value={form.parking} onChange={handleChange} placeholder="Estacionamientos" className="p-3 rounded text-black"/>

          <select name="status" value={form.status} onChange={handleChange} className="p-3 rounded text-black">
            <option value="nueva">Nueva</option>
            <option value="usada">Usada</option>
            <option value="destacada">Destacada</option>
          </select>

        </div>

        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Descripción" className="p-3 rounded text-black"/>

        {/*  IMÁGENES EXISTENTES */}
        <div>
          <h2 className="text-xl mb-2">Imágenes actuales</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={img.url}
                  className="rounded h-32 w-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => handleRemoveImage(i)}
                  className="absolute top-1 right-1 bg-red-600 px-2 py-1 text-xs rounded"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        {/*  NUEVAS IMÁGENES */}
        <input type="file" multiple onChange={handleImageChange} />

        <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded">
          Guardar cambios
        </button>

      </form>
    </div>
  );
}