//barra de navegacion de la aplicaión Principal.
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#3d3b3a] border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Logo Empresa"
            className="w-12 h-12 rounded-full object-cover"
          />
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-[#F2F2F2] tracking-widest"
          >
            ANDANI
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="md:hidden text-primary text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex space-x-6 text-[#F2F2F2]">
          <Link to="/" className="hover:text-amber-400 transition">
            Inicio
          </Link>
          <Link to="/properties" className="hover:text-amber-400 transition">
            Propiedades
          </Link>
          <Link to="/services" className="hover:text-amber-400 transition">
            Servicios
          </Link>
          <Link to="/contact" className="hover:text-amber-400 transition">
            Contacto
          </Link>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-[#555555] px-6 pb-4 space-y-3 text-white">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-amber-400">
            Inicio
          </Link>
          <Link to="/properties" onClick={() => setOpen(false)} className="block hover:text-amber-400">
            Propiedades
          </Link>
          <Link to="/services" onClick={() => setOpen(false)} className="block hover:text-amber-400">
            Servicios
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-amber-400">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}