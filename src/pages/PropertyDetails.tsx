import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../helpers/helpers";
import { Property } from "../types/Property";
import PropertyMap from "../components/PropertyMap";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const loadProperty = async () => {
      const response = await getPropertyById(id!);
      setProperty(response);
    };

    loadProperty();
  }, [id]);

  if (!property) return <p>Cargando...</p>;

  return (
    <div className="container mt-10 mx-auto p-4 w-2/3 max-sm:w-full">
      <span>
        <h1 className="text-2xl font-bold text-slate-600 mb-2">
          {property.title}
        </h1>
        <Link
          className="bg-blue-200 text-sm text-slate-600 p-2 rounded-sm hover:bg-blue-300"
          to={"/"}
        >
          Volver al inicio
        </Link>
      </span>
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 space-y-4 bg-slate-100 shadow-md">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Detalles de la Propiedad
          </h2>
          <p className="text-gray-700">
            <strong className="text-gray-900 font-medium">Dirección:</strong>{" "}
            {property.address}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900 font-medium">Precio:</strong>{" "}
            <span className="text-green-600 font-bold">
              ${property.price.toLocaleString()}
            </span>
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900 font-medium">Área:</strong>{" "}
            {property.area} m²
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold text-gray-800">Descripción</h3>
          <p className="text-gray-700 italic">
            {property.description || "No disponible."}
          </p>
        </div>
        <div>
          <div className="bg-slate-50 p-2 rounded-sm border border-slate-300">
            <h3 className="text-md font-semibold text-gray-800">Propietario</h3>
            <p className="text-gray-700">
              <strong className="text-gray-900 font-medium">Nombre:</strong>{" "}
              {property.owner.name}
            </p>
            <p className="text-gray-700">
              <strong className="text-gray-900 font-medium">Contacto:</strong>{" "}
              <a
                href={`mailto:${property.owner.contact}`}
                className="text-blue-500 hover:underline"
              >
                {property.owner.contact}
              </a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-md font-semibold text-gray-800">Coordenadas</h3>
          <p className="text-gray-700">
            <strong className="text-gray-900 font-medium underline decoration-2 decoration-blue-400">
              Latitud:
            </strong>{" "}
            {property.location.lat}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900 font-medium underline decoration-2 decoration-orange-500">
              Longitud:
            </strong>{" "}
            {property.location.lng}
          </p>
        </div>
      </div>
      <PropertyMap
        latitude={property.location.lat}
        longitude={property.location.lng}
      />
    </div>
  );
};

export default PropertyDetails;
