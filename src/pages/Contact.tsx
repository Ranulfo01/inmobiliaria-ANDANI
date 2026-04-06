import { useState } from "react";
//import api from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contacts", form);
      alert("Mensaje enviado correctamente");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      alert("Error al enviar mensaje");
    }
  };

  return (
    <div className="bg-black min-h-screen py-10 px-4">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl font-bold mb-4">
          Contáctanos
        </h1>
        <p className="text-gray-200">
          ¿Quieres vender, rentar o publicar tu propiedad? 
          Estamos aquí para ayudarte.
        </p>
      </div>

      {/* Contenido */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* INFO */}
        <div className="bg-slate-300 p-8 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold">
            Información de contacto
          </h2>

          <div>
            <p className="font-semibold">📞 Teléfono</p>
            <p className="text-gray-600">+52 443 123 4567</p>
          </div>

          <div>
            <p className="font-semibold">📧 Email</p>
            <p className="text-gray-600">contacto@inmobiliaria.com</p>
          </div>

          <div>
            <p className="font-semibold">📍 Ubicación</p>
            <p className="text-gray-600">Michoacán, México</p>
          </div>

          <div className="pt-4 text-gray-500">
            Te responderemos en menos de 24 horas.
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="bg-slate-300 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">
            Envíanos un mensaje
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={form.name}
              onChange={handleChange}
              className=" text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Teléfono"
              value={form.phone}
              onChange={handleChange}
              className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              value={form.message}
              onChange={handleChange}
              className="text-black w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              required
            />

            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
              Enviar mensaje
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}