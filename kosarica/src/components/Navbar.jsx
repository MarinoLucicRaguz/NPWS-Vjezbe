import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Pocetna stranica</Link>
        </li>
        <li>
          <Link to="/cart">Kosarica</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
