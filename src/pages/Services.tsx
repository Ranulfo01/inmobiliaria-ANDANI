import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Venta de Propiedades",
      description: "Estrategias de marketing de alto impacto para colocar tu inmueble frente a los compradores ideales.",
      icon: "🏠",
      tag: "Gestión"
    },
    {
      title: "Venta de Terrenos",
      description: "Valorización técnica y comercial para maximizar el retorno de inversión.",
      icon: "🌳",
      tag: "Gestión"
    },
    {
      title: "Renta de Propiedades",
      description: "Gestión integral de arrendamiento con filtros de seguridad.",
      icon: "🔑",
      tag: "Gestión"
    },
    {
      title: "Incorporación",
      description: "Integramos tu propiedad a nuestro portafolio con visibilidad.",
      icon: "📈",
      tag: "Inversión"
    }
  ];

  const steps = [
    { num: "01", title: "Evaluación", desc: "Analizamos tu propiedad y el mercado." },
    { num: "02", title: "Estrategia", desc: "Creamos contenido y la posicionamos." },
    { num: "03", title: "Cierre", desc: "Negociamos y cerramos la operación." }
  ];

  return (
    <div className="bg-primary min-h-screen text-black">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nuestros Servicios
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Soluciones inmobiliarias diseñadas para ayudarte a vender, rentar o invertir con seguridad.
        </p>
      </section>

      {/* SERVICIOS */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-amber-400 uppercase tracking-widest">
                  {service.tag}
                </span>

                <div className="text-3xl mt-3 mb-4">
                  {service.icon}
                </div>

                <h2 className="text-lg font-semibold mb-2 text-gray-200">
                  {service.title}
                </h2>

                <p className="text-gray-400 text-sm">
                  {service.description}
                </p>
              </div>

              <Link
                to="/contact"
                className="mt-6 text-sm text-amber-400 hover:underline"
              >
                Consultar →
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-[#181818] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-300">
            Cómo trabajamos
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-[#1f1f1f] p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <span className="text-amber-400 text-4xl  font-bold">
                  {step.num}
                </span>

                <h3 className="text-4xl font-semibold mt-2 mb-2 text-gray-300">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          ¿Listo para dar el siguiente paso?
        </h2>

        <Link to="/contact">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg shadow transition">
            Hablar con un asesor
          </button>
        </Link>

      </section>

    </div>
  );
}