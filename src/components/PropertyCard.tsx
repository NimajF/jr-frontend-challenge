import { Link } from "react-router-dom";
import { Property } from "../types/Property";

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className=" cursor-pointer transition-all duration-200 rounded shadow-sm hover:shadow-lg overflow-hidden group">
      <div className="w-full h-36">
        <img
          src={property.images[0] || "https://via.placeholder.com/150"}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold font-sans truncate">
          {property.title}
        </h2>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-semibold">Fecha de publicación:</span>{" "}
          {new Date(property.createdAt).toLocaleDateString()}
        </p>
        <div className="rounded-sm mb-1">
          <p className="text-sm text-gray-800 mb-1">{property.address}</p>
          <p className="text-sm text-gray-800 mb-1 capitalize">
            {property.type} - ${property.price}
          </p>
          <p className="text-sm text-gray-800 mb-1">
            {property.status === "sale" ? "En venta" : "En alquiler"},{" "}
            {property.isActive ? "Activo" : "Inactivo"}
          </p>
          <p className="text-sm text-gray-800 mb-1">
            <span className="font-semibold">Área:</span> {property.area} m²
          </p>
        </div>
        <Link
          to={`/properties/${property.id}`}
          className="block text-center bg-blue-400 text-white py-2 px-4 rounded-sm hover:bg-blue-500 transition-all"
        >
          VISITAR
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
