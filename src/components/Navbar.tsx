//barra de navegacion de la aplicaión Principal.
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className="bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-amber-400 tracking-widest"
        >
          ANDANI BIENES RAICES
        </Link>

        <div className="space-x-6 text-white">
          <Link to="/" className="hover:text-amber-400 transition">
            Inicio
          </Link>
          <Link to="/properties" className="hover:text-amber-400 transition">
            Propiedades
          </Link>
          <Link to="/servicios" className="hover:text-amber-400 transition">
            Servicios
          </Link>
          <Link to="/contact" className="hover:text-amber-400 transition">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;