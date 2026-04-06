import { Link } from "react-router-dom";
export default function Services() {
  const services = [
    {
      title: "Venta de Propiedades",
      description:
        "Te ayudamos a vender tu propiedad al mejor precio del mercado con estrategias de marketing profesional.",
      icon: "🏠"
    },
     {
      title: "Venta de Terrenos",
      description:
        "Te ayudamos a vender tu terreno al mejor precio del mercado con estrategias de marketing profesional.",
      icon: "🏠"
    },
    {
      title: "Renta de Propiedades",
      description:
        "Encuentra inquilinos confiables o la casa ideal para rentar de forma rápida y segura.",
      icon: "🔑"
    },
    {
      title: "Incorporación de Propiedades",
      description:
        "Publicamos tu propiedad en nuestra plataforma y la promocionamos para conseguir compradores o inquilinos.",
      icon: "📈"
    }
  ];

  

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Nuestros Servicios
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 shadow-lg rounded-2xl hover:shadow-2xl transition">
            <div className="text-4xl mb-4">{service.icon}</div>

            <h2 className="text-xl font-semibold mb-2">
              {service.title}
            </h2>

            <p className="text-gray-600">
              {service.description}
            </p>

            <Link to="/contact">
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >
              Más información
            </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16">
  <h2 className="text-2xl font-bold text-center mb-8">
    ¿Cómo trabajamos?
  </h2>

  <div className="grid md:grid-cols-3 gap-6 text-center">
    <div>
      <h3 className="font-semibold">1. Evaluación</h3>
      <p className="text-gray-600">
        Analizamos tu propiedad y el mercado.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">2. Publicación</h3>
      <p className="text-gray-600">
        Publicamos con fotos y descripción profesional.
      </p>
    </div>

    <div>
      <h3 className="font-semibold">3. Cierre</h3>
      <p className="text-gray-600">
        Te acompañamos hasta cerrar la venta o renta.
      </p>
    </div>
  </div>
</div>
    </div>

    
  );
}