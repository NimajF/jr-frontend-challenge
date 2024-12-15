import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPropertyById } from "../helpers/helpers";
import { Property } from "../types/Property";
import PropertyMap from "../components/PropertyMap";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProperty = async () => {
      try {
        const response = await getPropertyById(id!);
        setProperty(response);
      } catch (err) {
        navigate("/not-found");
      }
    };

    loadProperty();
  }, [id]);

  if (!property) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <div className="container mx-auto p-4 mt-10 w-2/3 max-lg:w-full">
      <div className="relative w-full h-[350px] rounded-sm overflow-hidden shadow-sm mb-6">
        <img
          src={property.images[0] || "https://via.placeholder.com/800x400"}
          alt={`Imágen de la propiedad ${property.title}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mb-4">
        <Link
          to="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 transition duration-300"
        >
          ← Volver al Inicio
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col col-span-2 bg-slate-50 rounded-sm shadow-md p-6">
          {property.owner.name === "benjamin-francisco" && (
            <Link
              to={`/properties/edit/${property.id}`}
              className="self-end inline-flex items-center gap-2 bg-transparent border border-slate-300 text-slate-500 px-4 py-2 rounded-sm hover:bg-indigo-600 transition-all duration-200 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 27 25"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  d="M11 4h2a2 2 0 012 2v3a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2zM4 13a3 3 0 013-3h10a3 3 0 013 3v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5z"
                />
              </svg>
              Editar
            </Link>
          )}
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Detalles de la Propiedad
          </h2>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-gray-800">
              {property.title}
            </h3>
            <p className="text-lg text-gray-700">
              <strong className="font-medium text-gray-800">Dirección:</strong>{" "}
              {property.address}
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-medium text-gray-800">Precio:</strong>{" "}
              <span className="text-green-500 font-bold text-xl">
                ${property.price.toLocaleString()}
              </span>
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-medium text-gray-800">Área:</strong>{" "}
              {property.area} m²
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-medium text-gray-800">Tipo:</strong>{" "}
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-medium text-gray-800">Estado:</strong>{" "}
              {property.status === "sale" ? "En Venta" : "En Alquiler"}
            </p>
            <p className="text-lg text-gray-700">
              <strong className="font-medium text-gray-800">
                Disponibilidad:
              </strong>{" "}
              {property.isActive ? "✅ Activo" : "❌ Inactivo"}
            </p>
          </div>
        </div>

        <div className="bg-slate-50  rounded-sm shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Información del Propietario
          </h3>
          <p className="text-gray-700 mb-2">
            <strong className="font-medium text-gray-900">Nombre:</strong>{" "}
            {property.owner.name}
          </p>
          <p className="text-gray-700 mb-4">
            <strong className="font-medium text-gray-900">Contacto:</strong>{" "}
            <a
              href={`mailto:${property.owner.contact}`}
              className="text-blue-500 hover:underline"
            >
              {property.owner.contact}
            </a>
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fechas Importantes
          </h3>
          <p className="text-gray-700">
            <strong className="font-medium text-gray-900">Creado el:</strong>{" "}
            {new Date(property.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <strong className="font-medium text-gray-900">
              Última actualización:
            </strong>{" "}
            {new Date(property.updatedAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="mt-6 bg-slate-50  rounded-sm shadow-md p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Descripción
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          {property.description ||
            "No hay una descripción disponible para esta propiedad."}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ubicación en el Mapa
        </h3>
        <PropertyMap
          latitude={property.location.lat}
          longitude={property.location.lng}
        />
        <p className="text-sm text-gray-600 mt-2">
          Latitud: {property.location.lat}, Longitud: {property.location.lng}
        </p>
      </div>
    </div>
  );
};

export default PropertyDetails;
