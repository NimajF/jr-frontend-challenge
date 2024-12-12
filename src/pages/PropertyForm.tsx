import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../helpers/helpers";
import { Property } from "../types/Property";

const PropertyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Partial<Property>>({
    title: "",
    address: "",
    price: 0,
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProperty(formData as Property);
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Crear Propiedad</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Crear
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
