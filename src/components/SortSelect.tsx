import { useState } from "react";

const SortSelect = ({
  options,
  onChange,
}: {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) => {
  const [selected, setSelected] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    onChange(value);
  };

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-3"
    >
      <option value="">Seleccione una opción</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;
