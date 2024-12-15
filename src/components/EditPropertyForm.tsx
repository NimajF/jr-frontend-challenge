import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Property } from "../types/Property";
import {
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "../helpers/helpers";
import validateForm from "../utils/formValidator";

const EditProperty = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<Partial<Property>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperty = async () => {
      const data = await getPropertyById(id!);
      setFormData(data);
    };
    fetchProperty();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" || name === "area" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData as Property);
    if (Object.keys(validationErrors).length === 0) {
      await updateProperty(id!, formData);
      navigate(`/properties/${id}`);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDelete = async () => {
    if (id && confirm("¿Estás seguro de que deseas eliminar esta propiedad?")) {
      await deleteProperty(id);
      navigate("/");
    }
  };

  return (
    <div className="container w-1/3 max-lg:w-1/2 max-md:w-full mx-auto mt-10 mb-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-gray-700 mb-6 text-center">
        Editar Propiedad
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Título</label>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            placeholder="Título de la propiedad"
            className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Dirección</label>
          <input
            type="text"
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            placeholder="Dirección de la propiedad"
            className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Precio</label>
          <input
            type="number"
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
            placeholder="Precio"
            className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Área (m²)</label>
          <input
            type="number"
            name="area"
            value={formData.area || ""}
            onChange={handleChange}
            placeholder="Área en m²"
            className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.area && <p className="text-red-500 text-sm">{errors.area}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Tipo</label>
          <select
            name="type"
            value={formData.type || ""}
            onChange={handleChange}
            className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value={formData.type}>{formData.type}</option>
            <option value="house">Casa</option>
            <option value="apartment">Apartamento</option>
            <option value="office">Oficinas</option>
          </select>
          {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Estado</label>
          <select
            name="status"
            value={formData.status || ""}
            onChange={handleChange}
            className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecciona el estado</option>
            <option value="sale">En Venta</option>
            <option value="rent">En Alquiler</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive || false}
            onChange={(e) =>
              setFormData({ ...formData, isActive: e.target.checked })
            }
            className="mr-2"
          />
          <label className="text-gray-700 font-medium">Activo</label>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Descripción</label>
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Descripción de la propiedad"
            rows={3}
            className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-sm transition"
          >
            Eliminar Propiedad
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm transition"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProperty;
