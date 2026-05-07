import { NavLink, Outlet } from "react-router-dom";

export default function AdminPanel() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Panel de Administración
        </h1>

        {/* ACCIONES */}
        <div className="flex gap-2">
          <NavLink
            to="/create"
            className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-lg shadow text-sm md:text-base"
          >
            + Nueva Propiedad
          </NavLink>
        </div>

      </div>

      {/* NAV ADMIN */}
      <div className="flex flex-wrap gap-3 mb-8">

        <NavLink
          to="/admin/properties"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-sm md:text-base transition ${
              isActive
                ? "bg-blue-700 text-white shadow"
                : "bg-blue-600 hover:bg-blue-700 text-white"}`}>
          🏠 Propiedades
        </NavLink>

        <NavLink
          to="/admin/contacts"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-sm md:text-base transition ${
              isActive
                ? "bg-green-700 text-white shadow"
                : "bg-green-600 hover:bg-green-700 text-white"}`}>
          📩 Contactos
        </NavLink>

      </div>

      {/* CONTENIDO */}
      <div className="bg-[#1f1f1f] rounded-2xl p-4 md:p-6 shadow-lg min-h-[400px]">
        <Outlet />
      </div>

    </div>
  );
}