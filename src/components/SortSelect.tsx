interface SortSelectProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}
const SortSelect: React.FC<SortSelectProps> = ({ options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-3"
    >
      <option value="">Ordenar por</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelect;
