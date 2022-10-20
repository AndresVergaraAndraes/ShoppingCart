import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <h1>
        <Link to="/">Tienda Virtual</Link>
      </h1>
      <ul>
        <li>
          <Link to="cart">Carrito</Link>
        </li>
        <li>
          <Link to="form">Modificar Productos</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
