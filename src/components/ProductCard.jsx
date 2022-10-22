import React, { useContext } from "react";
import { productContext } from "../context/ProductProvider";
import "../styles/ProductCard.css";
import { types } from "../types";

const ProductCard = ({ openModalCart, openModalForm }) => {
  const { products, dispatch } = useContext(productContext);

  return (
    <div className="shop-container">
      <div className="add-product-button">
        <button onClick={openModalForm}>Agregar nuevo producto</button>
      </div>
      <div className="card-container">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <h3>{product.title} </h3>
              <img src={product.thumbnailUrl} alt="" />
              <p>Precio: {product.precio}$ </p>
              <button
                className="add-product-cart"
                onClick={() => {
                  dispatch({
                    type: types.addProduct,
                    payload: product,
                  });
                  openModalCart();
                }}
              >
                Agregar al carrito
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
