import { useEffect, useState } from "react";
import { getProperties } from "../helpers/helpers";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../types/Property";
import SortSelect from "../components/SortSelect";
import { Link } from "react-router-dom";
import ParallaxBG from "../components/ParallaxBG";

const PropertiesList = () => {
  const [originalProperties, setOriginalProperties] = useState<Property[]>([]);
  const [displayProperties, setDisplayProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProperties();
      setOriginalProperties(response);
      setDisplayProperties(response);
    };

    fetchData();
  }, []);

  const handleSortChange = (value: string) => {
    setSortOption(value);
    console.log("Orden seleccionado:", value);
  };

  const filterProperties = (term: string) => {
    const filtered = originalProperties.filter(
      (property) =>
        property.title.toLowerCase().includes(term.toLowerCase()) ||
        property.address.toLowerCase().includes(term.toLowerCase())
    );
    return filtered;
  };

  const sortProperties = (properties: Property[], option: string) => {
    return [...properties].sort((a, b) => {
      if (option === "price-asc") return a.price - b.price;
      if (option === "price-desc") return b.price - a.price;
      return 0;
    });
  };

  useEffect(() => {
    let filtered = filterProperties(searchTerm);
    if (sortOption) {
      filtered = sortProperties(filtered, sortOption);
    }
    setDisplayProperties(filtered);
  }, [searchTerm, sortOption, originalProperties]);

  return (
    <div className="container mx-auto p-4 mt-10">
      <ParallaxBG />
      <h1 className="text-5xl font-bold mb-5 text-red-600">Propiedades</h1>
      <p className="text-gray-700 text-md mb-6">
        Aquí encontrarás una selección exclusiva de inmuebles que han confiado
        en nosotros para ayudarte a encontrar el hogar o la inversión perfecta.
        ¡Explora y descubre el lugar de tus sueños!
      </p>
      <div className="flex flex-row max-sm:mb-10 text-md text-gray-700 rounded-md bg-gradient-to-r from-slate-100 p-6 w-1/2 md:w-full max-sm:w-full">
        <p className="">
          ¿Quieres registrar tu propiedad?{" "}
          <span className="max-sm:mt-5 inline-block mt-2">
            <Link
              to="/properties/new"
              className="ml-5 rounded-sm p-3 transition-all duration-75 bg-green-500 text-white hover:bg-green-400"
            >
              EMPIEZA AHORA
            </Link>
          </span>
        </p>
      </div>
      <div className="flex justify-end mb-4 mt-5">
        <div className="w-full flex justify-evenly items-center gap-x-2">
          <input
            type="text"
            placeholder="Buscar por título o dirección..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-sm w-2/3 text-sm h-12 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <SortSelect
            options={[
              { value: "price-asc", label: "Precio: Menor a Mayor" },
              { value: "price-desc", label: "Precio: Mayor a Menor" },
            ]}
            onChange={handleSortChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {displayProperties.length === 0 && (
        <p className="text-center text-gray-700 mt-10">
          No se encontraron propiedades.
        </p>
      )}
    </div>
  );
};

export default PropertiesList;
