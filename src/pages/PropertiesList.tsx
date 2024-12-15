import { useEffect, useState } from "react";
import { getProperties } from "../helpers/helpers";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../types/Property";
import SortSelect from "../components/SortSelect";
import { Link } from "react-router-dom";
import ParallaxBG from "../components/ParallaxBG";

const PropertiesList = () => {
  const [displayProperties, setDisplayProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadProperties = async (page: number) => {
    try {
      const newProperties = await getProperties(page);
      if (newProperties.length === 0) {
        setHasMore(false);
      } else {
        setDisplayProperties((prev) => {
          const combined = [...prev, ...newProperties];
          const uniqueProperties = combined.filter(
            (property, index, self) =>
              self.findIndex((p) => p.id === property.id) === index
          );
          return uniqueProperties;
        });
      }
    } catch (error) {
      console.error("Error loading properties:", error);
    }
  };

  useEffect(() => {
    loadProperties(currentPage);
  }, [currentPage]);

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filterAndSortProperties = () => {
    let filtered = displayProperties.filter(
      (property) =>
        property.title.toLowerCase().includes(searchTerm) ||
        property.address.toLowerCase().includes(searchTerm)
    );

    if (sortOption === "price-asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const visibleProperties = filterAndSortProperties();

  return (
    <div className="flex flex-col justify-center w-3/4 max-lg:w-full container mx-auto p-4 max-sm:p-0 mt-10">
      <ParallaxBG />
      <h1 className="max-sm:text-center text-5xl font-bold mb-5 text-red-600">
        Propiedades
      </h1>
      <p className="max-sm:text-center text-gray-700 text-md mb-6">
        Aquí encontrarás una selección exclusiva de inmuebles que han confiado
        en nosotros para ayudarte a encontrar el hogar o la inversión perfecta.
        ¡Explora y descubre el lugar de tus sueños!
      </p>
      <div className="flex flex-row max-sm:mb-10 text-md text-gray-700 rounded-md bg-gradient-to-r from-slate-100 p-6 w-1/2 md:w-full max-sm:w-full">
        <p className="flex-grow">
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
        <div className="px-4 w-full flex justify-evenly items-center gap-x-2">
          <input
            type="text"
            placeholder="Buscar por título o dirección..."
            value={searchTerm}
            onChange={handleSearch}
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
      <div className="max-sm:p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {visibleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {visibleProperties.length === 0 && (
        <p className="text-center text-gray-700 mt-10">
          No se encontraron propiedades.
        </p>
      )}
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Cargar Más
          </button>
        </div>
      )}
      {!hasMore && displayProperties.length > 0 && (
        <p className="text-center text-gray-700 mt-10">
          No hay más propiedades disponibles.
        </p>
      )}
    </div>
  );
};

export default PropertiesList;
