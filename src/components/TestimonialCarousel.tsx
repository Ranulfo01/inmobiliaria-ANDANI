import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


// Tipo de dato para los testimonios
type Testimonial = {
  name: string;
  text: string;
  role: string;
};

export default function TestimonialCarousel() {
  
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Ramírez",
      text: "Vendí mi casa en menos de 2 semanas, excelente servicio.",
      role: "Vendedor",
    },
    {
      name: "María López",
      text: "Encontré la casa perfecta para mi familia, todo muy profesional.",
      role: "Compradora",
    },
    {
      name: "José Hernández",
      text: "Publicaron mi propiedad y recibí muchos interesados rápidamente.",
      role: "Propietario",
    },
    {
      name: "Ana Torres",
      text: "Muy buena atención y acompañamiento durante todo el proceso.",
      role: "Cliente",
    },
    {
      name: "Francisco Mendoza",
      text: "Excelente información brindada en tiempo y forma, muy buen acompañamiento por parte de las asesoras 100% recomendado el servicio para vender y comprar .",
      role: "propietario",
    }
  ];

  return (
    <div className="bg-gray-400 py-16 rounded-lg">

      <h2 className="text-3xl font-bold text-center mb-10">
        Lo que dicen nuestros clientes de Andani Bienes Raices
      </h2>

      <div className="max-w-5xl mx-auto px-4">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="bg-slate-200 p-8 rounded-2xl shadow-lg text-center">

                <p className="text-gray-600 mb-4 italic">
                  "{item.text}"
                </p>

                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <span className="text-sm text-gray-500">
                  {item.role}
                </span>

                <div className="mt-3 text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}