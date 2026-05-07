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
    setOpen(false);
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Propiedades", path: "/properties" },
    { name: "Servicios", path: "/services" },
    { name: "Contacto", path: "/contact" },
  ];

  return (
    <nav className="bg-[#3d3b3a]/95 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <div className="flex items-center space-x-3 group">
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="Logo Empresa"
            className="w-10 h-10 rounded-full object-cover border-2 border-amber-400 group-hover:scale-110 transition-transform duration-300"
          />
          <Link
            to="/"
            className="text-xl md:text-2xl font-black text-[#F2F2F2] tracking-tighter hover:text-amber-400 transition-colors"
          >
            ANDANI
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA (MEJORADO) */}
        <button
          className="md:hidden text-[#F2F2F2] focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-[#F2F2F2] items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="hover:text-amber-400 transition-all duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-zinc-700">
            {!user ? (
              <Link to="/login" className="bg-amber-500 hover:bg-amber-600 text-black px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
                Login
              </Link>
            ) : (
              <>
                {user.role === "admin" && (
                  <Link to="/admin" className="text-amber-400 font-bold border border-amber-400/50 px-3 py-1 rounded-md hover:bg-amber-400/10 transition">
                    Admin
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-zinc-400 hover:text-red-400 text-sm font-bold uppercase transition"
                >
                  Salir
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL (ANIMADO) */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#2c2a29] px-6 py-6 flex flex-col space-y-4 border-t border-zinc-800">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setOpen(false)}
              className="text-lg text-[#F2F2F2] hover:text-amber-400"
            >
              {link.name}
            </Link>
          ))}
          
          <hr className="border-zinc-800" />

          {!user ? (
            <Link to="/login" onClick={() => setOpen(false)} className="text-center bg-amber-500 text-black py-3 rounded-xl font-bold">
              Iniciar Sesión
            </Link>
          ) : (
            <div className="flex flex-col space-y-4">
              {user.role === "admin" && (
                <Link to="/admin" onClick={() => setOpen(false)} className="text-amber-400 font-bold">
                  Panel Admin
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="bg-red-500/10 text-red-500 py-3 rounded-xl font-bold hover:bg-red-500 hover:text-white transition"
              >
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}