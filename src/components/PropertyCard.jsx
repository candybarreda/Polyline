const PropertyCard = ({ image, title, price, location }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">

      {/* Imagen */}
      <div className="relative">
        <img
          src={image}
          alt="property"
          className="w-full h-56 object-cover"
        />

        <span className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 text-sm rounded-full">
          Proyectos
        </span>
      </div>

      {/* Contenido */}
      <div className="p-4">

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-500 text-sm mb-3">
          📍 {location}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">
            
          </span>

          <button className="text-sm bg-blue-500 text-white px-3 py-1 rounded-lg">
            View
          </button>
        </div>

      </div>

    </div>
  )
}

export default PropertyCard