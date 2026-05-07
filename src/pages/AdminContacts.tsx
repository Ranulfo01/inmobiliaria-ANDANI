import { useEffect, useState } from "react"

const API = import.meta.env.VITE_API_URL

type Contact = {
  _id: string
  name: string
  email: string
  phone: string
  message: string
  createdAt: string
}

export default function AdminContacts() {

  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${API}/contact`)
      const data = await res.json()
      setContacts(data)
    } catch (error) {
        console.error(error)
      console.error("Error al cargar contactos")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <p className="text-center mt-10">Cargando contactos...</p>
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Panel de Contactos
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-xl">

        <table className="min-w-full text-sm text-left">

          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-4">Nombre</th>
              <th className="p-4">Email</th>
              <th className="p-4">Teléfono</th>
              <th className="p-4">Mensaje</th>
              <th className="p-4">Fecha</th>
            </tr>
          </thead>

          <tbody>

            {contacts.map((c) => (
              <tr key={c._id} className="border-t hover:bg-gray-50">

                <td className="p-4 font-medium text-black">{c.name}</td>

                <td className="p-4 text-blue-600">{c.email}</td>

                <td className="p-4 text-black">{c.phone}</td>

                <td className="p-4 max-w-xs truncate text-black">
                  {c.message}
                </td>

                <td className="p-4 text-gray-500">
                  {new Date(c.createdAt).toLocaleDateString()}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}