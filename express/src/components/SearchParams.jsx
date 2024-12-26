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
        const response = await fetch("http://localhost:5000/api/vehicles");
        if (!response.ok) throw new Error("Error with response");
        const data = await response.json();
        setManufacturers(data.brands);
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
            `http://localhost:5000/api/vehicles/${selectedManufacturer}`
          );
          if (!response.ok) throw new Error("Error with response");
          const data = await response.json();
          setFilteredModels(data);
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
