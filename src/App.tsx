import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import Properties from "./pages/Properties";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import CreateProperty from "./pages/CreateProperty";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import EditProperty from "./pages/EditProperty";
import AdminContacts from "./pages/AdminContacts";
import AdminRoute from "./routes/AdminRoute";
import AdminProperties from "./pages/AdminProperties";

function App() {
  return (
    <div className="bg-primary min-h-screen text-textMain">
      <Navbar />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          }
        >
          {/*RUTA POR DEFECTO */}
          <Route index element={<AdminProperties />} />

          {/*  SUBRUTAS */}
          <Route path="properties" element={<AdminProperties />} />
          <Route path="contacts" element={<AdminContacts />} />
        </Route>

        {/* OTROS */}
        <Route path="/create" element={<CreateProperty />} />
        <Route path="/edit/:id" element={<EditProperty />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;