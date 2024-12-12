import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../helpers/helpers";
import { Property } from "../types/Property";

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{property.title}</h1>
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p>
        <strong>Dirección:</strong> {property.address}
      </p>
      <p>
        <strong>Precio:</strong> ${property.price}
      </p>
      <p>
        <strong>Área:</strong> {property.area} m²
      </p>
      <p>
        <strong>Descripción:</strong> {property.description}
      </p>
      <p>
        <strong>Propietario:</strong> {property.owner.name} (
        {property.owner.contact})
      </p>
      <p>
        <strong>Coordenadas:</strong> {property.location.lat},{" "}
        {property.location.lng}
      </p>
    </div>
  );
};

export default PropertyDetails;
