import React, { useEffect, useState } from "react";
import useDropdown from "../useDropdown";
import Rezultat from "./Rezultat";

const SearchParams = () => {
  const [manufacturers, setManufacturers] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);

  const [ManufacturerDropdown, selectedManufacturer] = useDropdown(
    "Proizvođač", 
    manufacturers
  );

  useEffect(() => {
    const fetchManufacturers = async () => {
      try {
        const response = await fetch("http://demo8927968.mockable.io/proizvodac");
        if (!response.ok) throw new Error("Error with response");
        const data = await response.json();
        setManufacturers(data.proizvodac);
      } catch (err) {
        console.error("Error during pulling manufacturers:", err);
      }
    };

    fetchManufacturers();
  }, []);

  useEffect(() => {
    const fetchModels = async () => {
      if (selectedManufacturer) {
        try {
          const response = await fetch(
            `http://demo8927968.mockable.io/proizvodac/${selectedManufacturer}`
          );
          if (!response.ok) throw new Error("Error with response");
          const data = await response.json();
          setFilteredModels(data.modeli);
        } catch (err) {
          console.error("Error during pulling models:", err);
        }
      } else {
        setFilteredModels([]);
      }
    };

    fetchModels();
  }, [selectedManufacturer]);

  return (
    <div>
      <ManufacturerDropdown />
      <Rezultat models={filteredModels} make={selectedManufacturer} />
    </div>
  );
};

export default SearchParams;
