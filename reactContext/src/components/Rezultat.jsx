import { Link, useNavigate } from "react-router-dom";
import "./Components.css";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Modal from "./Modal";

function Rezultat({ models, make }) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  if (models.length === 0) {
    return (
      <div className="rezultat-middle">
        <p>Nema automobila.</p>
      </div>
    );
  }

  const handleAddToCart = (vehicle) => {
    addToCart(vehicle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rezultat-middle">
      <h2>Popis automobila: </h2>
      <ul>
        {models.map((product) => (
          <li key={product.id} className="list-item">
            <p>{product.model}</p>
            <Link to={`/proizvodac/${make}/${product.id}`}>
              <button>Detalji</button>
            </Link>
            <button onClick={() => handleAddToCart(product)}>
              Dodaj u košaricu
            </button>
          </li>
        ))}
      </ul>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>Proizvod je dodan u košaricu!</p>
        <button onClick={() => navigate("/cart")}>Vidi košaricu</button>
        <button onClick={handleCloseModal}>Nastavi kupovati</button>
      </Modal>
    </div>
  );
}

export default Rezultat;
