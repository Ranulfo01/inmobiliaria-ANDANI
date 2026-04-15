import { useState } from "react"

type FormType = {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {

  const [form, setForm] = useState<FormType>({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: "", email: "", phone: "", message: "" })
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6">

      <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">

        {/* LADO IZQUIERDO */}
        <div className="bg-fondCard text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Hablemos 👋
          </h2>
          <p className="text-blue-100 mb-6">
            ¿Interesado en una propiedad? Escríbenos y te ayudamos a encontrar tu hogar ideal.
          </p>

          <div className="space-y-3 text-sm">
            <p>📍 Morelia, Michoacán</p>
            <p>📞 443 328 8380</p>
            <p>✉ contacto@andani.com</p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="p-10">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Contáctanos
          </h2>

          {sent && (
            <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4 text-center">
              ✅ Mensaje enviado correctamente
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* NOMBRE */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">👤</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                required
                className="text-black w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">✉</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
                className=" text-black w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

             {/* NUMERO */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">📞</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Numero de Telefeno"
                required
                className="text-black w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>


            {/* MENSAJE */}
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">💬</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Escribe tu mensaje..."
                rows={5}
                required
                className="text-black w-full pl-10 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* BOTÓN */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg bg-fondCard text-white transition-all ${
                loading
                  ? "bg-gray-400"
                  : "bg-blue-600 hover:bg-fondCard2 hover:scale-[1.02]"
              }`}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </button>

          </form>
        </div>
      </div>
    </div>
  )
}