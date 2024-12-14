import { useState, useEffect } from "react";
import { Property } from "../types/Property";
import validateForm from "../utils/formValidator";
const CreatePropertyForm = () => {
  const [formData, setFormData] = useState<Partial<Property>>({
    title: "",
    address: "",
    type: "",
    price: 0,
    status: "",
    isActive: true,
    area: 0,
  });
  const [openPanel, setOpenPanel] = useState<number | null>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isFormSubmittable, setIsFormSubmittable] = useState<boolean | null>(
    false
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData as Property);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", formData);
    }
  };

  const togglePanel = (panelNumber: number) => {
    setOpenPanel(openPanel === panelNumber ? null : panelNumber);
  };

  useEffect(() => {
    if (isFormSubmittable) {
      setErrors(validateForm(formData as Property));
    }
  }, [isFormSubmittable, formData]);

  return (
    <form
      onSubmit={handleSubmit}
      id="accordion-collapse"
      className="w-full max-w-xl mx-auto mt-10"
      data-accordion="collapse"
    >
      <div>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="bg-slate-50 flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            onClick={() => togglePanel(1)}
            aria-expanded={openPanel === 1}
            aria-controls="accordion-collapse-body-1"
          >
            <span>Información General</span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${
            openPanel === 1 ? "block" : "hidden"
          } border border-gray-200 p-5`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Título
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ingresa el nombre de la propiedad"
                className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Ingresa la dirección"
                className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.address && (
                <p className="text-sm text-red-500">{errors.address}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="bg-slate-50 flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            onClick={() => togglePanel(2)}
            aria-expanded={openPanel === 2}
            aria-controls="accordion-collapse-body-2"
          >
            <span>Precio</span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`${
            openPanel === 2 ? "block" : "hidden"
          } border border-gray-200 p-5`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Precio
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Ingresa el precio"
              className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-28 rounded-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.price && (
              <p className="text-sm text-red-500">{errors.price}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="bg-slate-50 flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100"
            onClick={() => togglePanel(3)}
            aria-expanded={openPanel === 3}
            aria-controls="accordion-collapse-body-3"
          >
            <span>Detalles Adicionales</span>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${
            openPanel === 3 ? "block" : "hidden"
          } border border-gray-200 p-5`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="area"
                className="block text-sm font-medium text-gray-700"
              >
                Área (m²)
              </label>
              <input
                type="number"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Ingresa el area en m²"
                className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.area && (
                <p className="text-sm text-red-500">{errors.area}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Tipo
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Ingresa el tipo de propiedad"
                className="text-sm mt-1 text-slate-700 bg-slate-100 border border-slate-200 p-2 block w-full rounded-sm focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.type && (
                <p className="text-sm text-red-500">{errors.type}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="block bg-green-400 w-full mt-5 p-3 text-white rounded-sm hover:bg-green-500"
      >
        CREAR PROPIEDAD
      </button>
    </form>
  );
};
export default CreatePropertyForm;
