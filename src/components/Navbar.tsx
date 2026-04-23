// barra de navegación de la aplicación Principal
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

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
        <div className="hidden md:flex space-x-6 text-[#F2F2F2] items-center">

          <Link to="/" className="hover:text-amber-400">Inicio</Link>
          <Link to="/properties" className="hover:text-amber-400">Propiedades</Link>
          <Link to="/services" className="hover:text-amber-400">Servicios</Link>
          <Link to="/contact" className="hover:text-amber-400">Contacto</Link>

          {/* 🔐 LOGIN */}
          {!user && (
            <Link to="/login" className="hover:text-amber-400">
              Login
            </Link>
          )}

          {/* 👑 ADMIN */}
          {user?.role === "admin" && (
            <Link to="/admin" className="text-yellow-400 font-semibold">
              Admin
            </Link>
          )}

          {/* 🚪 LOGOUT */}
          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}

        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-[#555555] px-6 pb-4 space-y-3 text-white">

          <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link to="/properties" onClick={() => setOpen(false)}>Propiedades</Link>
          <Link to="/services" onClick={() => setOpen(false)}>Servicios</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contacto</Link>

          {!user && (
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          )}

          {user?.role === "admin" && (
            <Link to="/admin" onClick={() => setOpen(false)}>
              Admin
            </Link>
          )}

          {user && (
            <button
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
              className="bg-red-500 px-3 py-1 rounded w-full text-left"
            >
              Logout
            </button>
          )}

        </div>
      )}
    </nav>
  );
}