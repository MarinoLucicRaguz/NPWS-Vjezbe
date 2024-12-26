import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Modal from "../components/Modal";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id, make } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/vehicles/${make}`);
        if (!response.ok) {
          throw new Error("Greška pri dohvaćanju podataka");
        }

        const data = await response.json();
        console.log(data)
        const selectedVehicle = data.find(
          (vehicle) => vehicle.id.toString() === id.toString()
        );

        if (!selectedVehicle) {
          throw new Error("Vozilo nije pronađeno.");
        }

        setVehicle(selectedVehicle);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id, make]);

  const handleAddToCart = () => {
    if (vehicle) {
      addToCart(vehicle);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Učitavanje...</p>;
  }

  if (error) {
    return <p>Greška: {error}</p>;
  }

  if (!vehicle) {
    return <p>Auto nije pronađeno</p>;
  }

  return (
    <div>
      <h2>Detalji o vozilu</h2>
      <p>Ime: {vehicle.model}</p>
      <p>Godina: {vehicle.year}</p>
      <p>Cijena: {vehicle.price} kn</p>
      <p>Opis: {vehicle.description}</p>
      <button onClick={handleAddToCart}>Dodaj u košaricu</button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>Proizvod je dodan u košaricu!</p>
        <button onClick={() => navigate("/cart")}>Vidi košaricu</button>
        <button onClick={handleCloseModal}>Nastavi kupovati</button>
      </Modal>
    </div>
  );
};

export default Details;
