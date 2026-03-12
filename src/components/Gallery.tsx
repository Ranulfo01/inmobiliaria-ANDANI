interface Props {
  images: string[]
}

export default function Gallery({ images }: Props) {

  return (

    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[450px]">

      {/* imagen grande */}

      <img
        src={images[0]}
        className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg"
      />

      {/* imagenes pequeñas */}

      <img src={images[1]} className="w-full h-full object-cover rounded-lg" />

      <img src={images[2]} className="w-full h-full object-cover rounded-lg" />

      <img src={images[3]} className="w-full h-full object-cover rounded-lg" />

      <img src={images[4]} className="w-full h-full object-cover rounded-lg" />

    </div>

  )
}