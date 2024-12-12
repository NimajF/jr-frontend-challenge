import { Link } from "react-router-dom";
import { Property } from "../types/Property";

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="bg-slate-50 border cursor-pointer transition-all duration-200 rounded shadow-sm p-4 hover:shadow-lg">
      <img
        src={property.images[0] || "https://via.placeholder.com/150"}
        alt={property.title}
        className="w-full h-32 object-cover mb-2 rounded-md"
      />
      <h2 className="text-lg font-bold font-sans truncate">{property.title}</h2>
      <p className="text-sm text-gray-800 mb-2 ">
        <span className="font-semibold">Fecha de publicación:</span>{" "}
        {new Date(property.createdAt).toLocaleDateString()}
      </p>
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
      <Link
        to={`/properties/${property.id}`}
        className="block text-center font-semibold bg-blue-400 text-white py-2 px-4 rounded-sm hover:bg-blue-500 transition-all"
      >
        VISITAR
      </Link>
    </div>
  );
};

export default PropertyCard;
