import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* LOGO / EMPRESA */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Andani Bienes Raices
          </h2>
          <p className="text-sm text-gray-400">
            Encuentra la casa de tus sueños o vende tu propiedad con nosotros.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Inicio</Link></li>
            <li><Link to="/services" className="hover:text-white">Servicios</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contacto</Link></li>
          </ul>
        </div>

        {/* SERVICIOS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li>Venta de propiedades</li>
            <li>Renta de propiedades</li>
            <li>Publicación de inmuebles</li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Michoacán, México</li>
            <li>📞 +52 443 328 8380</li>
            <li>📧 contacto@inmobiliaria.com</li>
          </ul>
        </div>

        <div className="flex space-x-4 mt-4 items-center">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
            <a href="#" className="hover:text-white">YouTube</a>
        </div>
        <a href="https://wa.me/524433288380"
         target="_blank"
         className="block mt-3 bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600">
             Contactar por WhatsApp
        </a>
      </div>
        

      {/* LINEA INFERIOR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Andani Bienes Raices — Todos los derechos reservados
      </div>

    </footer>
  );
}