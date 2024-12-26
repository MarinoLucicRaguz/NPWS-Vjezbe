import { useState } from "react";

const useDropdown = (label, options, disabled) => {
  const [selected, setSelected] = useState("");

  const Dropdown = () => (
    <label>
      {label}:
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        disabled={disabled}
      >
        <option value="">Odaberi</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  return [Dropdown, selected];
};

export default useDropdown;
