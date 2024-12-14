import { Property } from "../types/Property";

export default function validateForm(
  formData: Property
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!formData.title) errors.title = "El título es obligatorio.";
  if (!formData.address) errors.address = "La dirección es obligatoria.";
  if (!formData.type) errors.type = "El tipo es obligatorio.";
  if (!formData.price || formData.price <= 0)
    errors.price = "El precio debe ser mayor a 0.";
  if (!formData.area || formData.area <= 0)
    errors.area = "El área debe ser mayor a 0.";

  return errors;
}
