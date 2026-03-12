import { useParams } from "react-router-dom"
import { properties } from "../data/properties";

export default function PropertyDetail() {
    const { id } =useParams()

    const property = properties.find((p) => p.id === Number(id))

    if(!property){
        return <h2>Propiedad no Encontrada</h2>
    }

    return (
        <div className="max-w6x1 mx-auto p-6">
            {/*HEADER*/}
            <div className="flex justify-around items-center bg-gray-800 text-white p-6 rounded">
                <h1 className="text 2xl font-bold">
                    {property.title}
                </h1>
                <h2 className="text 2xl font-semibold text-yellow-400">
                    ${property.price.toLocaleString()}
                </h2>
            </div>
            {/*GALERIA*/}
            <div className="grid grid-cols-4 gap-4 mt-6">
                <img src={property.image} className="col-span-2 h-400px w-full object-cover rounded" />
                <div className="grid grid-rows-2 gap-4">
                    <img src={property.image} className="h.full object-cover rounded" />
                    <img src={property.image} className="h.full object-cover rounded" />
                </div>
                <div className="grid grid-rows-2 gap-4">
                    <img src={property.image} className="h.full object-cover rounded" />
                    <img src={property.image} className="h.full object-cover rounded" />
                </div>
            </div>
            {/*CONTENIDO*/}
            <div className="grid grid-cols-2 gap-10 mt-10">
            <div>
                <h2 className="text-1 font-bold mb-4">
                    ¿Por que debes de Comprar esta Casa?
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                    {property.description}
                </p>
            </div>
            {/*CARACTERISTICAS*/}
            <div>
                <h2 className="text-1 font-bold mb-4">
                    Caracteristicas de la Casa.
                </h2>
                <ul className="space-y2">
                    <li> ✔ {property.rooms} Cuartos.</li>
                    <li> ✔ {property.bathrooms} Baños.</li>
                    <li> ✔ Moderna Cocina.</li>
                    <li> ✔ Amplio Estudio.</li>
                    <li> ✔ {property.m2const} Metros cuadrados de Construcción.</li>
                    <li> ✔ {property.m2terr} Metros cuadrados de Terreno.</li>
                    <li> ✔ Espacio para {property.parking} vehículos.</li>

                </ul>
            </div>

            </div>
            {/*CONTACTO*/}
            <div className="mt-8 border-t pt-6">
                <h3 className="font-bold text-lg">
                    ¿Te intereso comprar esta casa?
                </h3>
                <p>📞 443 328 8380 </p>
                <p>✉ carosolorio6@gmail.com</p>
            </div>
       
        </div>
    )
}