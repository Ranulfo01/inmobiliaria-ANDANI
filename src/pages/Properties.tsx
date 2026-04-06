import { useState } from "react"
import { properties } from "../data/properties"
import PropertyCard from "../components/PropertyCard"

    export default function Properties(){

        const [city,setCity] = useState("")
        const [minPrice,setMinPrice] = useState("")
        const [bedrooms,setBedrooms] = useState("")

        const filteredProperties = properties.filter((property)=>{

            return(

                (city === "" || property.location.includes(city)) && 
                (minPrice === "" || property.price >= Number(minPrice)) &&
                (bedrooms === "" || property.rooms === Number(bedrooms))    

                )

        })

            return(

        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Todas las propiedades
            </h1>
            <h2 className="text-x1 font-sans mb-6">
                Descrube la oportunidad de encontrar tu nuevo hogar. Ya se que estes buscando comprar casa o departamento
                en michoácan, tenemos la propiedad perfecta para ti y tu familia.  Navega por nuestra seccion de Casas y 
                departamentos, terrenos y locales en las mejores ubicaciones.
            </h2>

{/* FILTROS */}

            <div className="grid md:grid-cols-3 gap-4 mb-8">

             <input
                type="text"
                placeholder="Ciudad"
                className="border p-3 rounded text-black"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
            />

            <input
                type="number"
                placeholder="Precio mínimo"
                className="border p-3 rounded text-black"
                value={minPrice}
             onChange={(e)=>setMinPrice(e.target.value)}
            />

            <select
                className="border p-3 rounded text-black"
                value={bedrooms}
                onChange={(e)=>setBedrooms(e.target.value)}
            >

            <option value="">Habitaciones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>

        </select>

        </div>

{/* GRID */}

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-center">
                {filteredProperties.map((property)=>(
                    <PropertyCard
                        key={property.id}
                        property={property}
            />
        ))}

    </div>

</div>

)
}