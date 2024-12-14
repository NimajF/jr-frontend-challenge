import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProperty } from "../helpers/helpers";
import { Property } from "../types/Property";
import CreatePropertyForm from "../components/CreatePropertyForm";

const PropertyForm = () => {
  const navigate = useNavigate();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   await createProperty(formData as Property);
  //   navigate("/");
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Crear Propiedad</h1>
      <CreatePropertyForm />
    </div>
  );
};

export default PropertyForm;
