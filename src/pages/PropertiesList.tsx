import { useEffect, useState } from "react";
import { getProperties } from "../helpers/helpers";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../types/Property";
import SortSelect from "../components/SortSelect";
import { Link } from "react-router-dom";

const PropertiesList = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProperties();
      setProperties(response);
    };

    fetchData();
  }, []);

  const handleSortChange = (value: string) => {
    setSortOption(value);
    const sortedProperties = [...properties].sort((a, b) => {
      if (value === "price-asc") return a.price - b.price;
      if (value === "price-desc") return b.price - a.price;
      return 0;
    });
    setProperties(sortedProperties);
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <h1 className="text-5xl font-bold mb-5 text-red-600">Propiedades</h1>
      <p className="text-gray-700 text-md mb-6">
        Aquí encontrarás una selección exclusiva de inmuebles que han confiado
        en nosotros para ayudarte a encontrar el hogar o la inversión perfecta.
        ¡Explora y descubre el lugar de tus sueños!
      </p>
      <div className="flex flex-row max-sm:mb-10 text-lg text-gray-700 rounded-md bg-gradient-to-r from-slate-100 p-6 w-1/2 md:w-full max-sm:w-full">
        <p className="">
          ¿Quieres registrar tu propiedad?{" "}
          <span className="max-sm:mt-5 inline-block mt-2">
            <Link
              to="/properties/new"
              className="ml-5 text-gray-100 rounded-sm bg-green-400 p-3"
            >
              EMPIEZA AHORA
            </Link>
          </span>
        </p>
      </div>
      <div className="flex justify-end mb-4">
        <SortSelect
          options={[
            { value: "price-asc", label: "Precio: Menor a Mayor" },
            { value: "price-desc", label: "Precio: Mayor a Menor" },
          ]}
          onChange={handleSortChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesList;
