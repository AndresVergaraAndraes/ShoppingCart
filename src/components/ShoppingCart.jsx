import React, { useContext } from "react";
import { productContext } from "../context/ProductProvider";
import { types } from "../types";
import "../styles/ShoppingCart.css";
const ShoppingCart = () => {
  const { cart, dispatch } = useContext(productContext);
  let arrayPrecio = cart.map((product) => product.quantity * product.precio);
  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart">
        <div className="title">
          <div>Carrito de compras</div>
          <div className="total-cart">
            Total compra : {arrayPrecio.reduce((prev, curr) => prev + curr, 0)} $
          </div>
          <button onClick={() => dispatch({ type: types.removeAllProducts })}>
            Vaciar Carrito
          </button>
        </div>

        <div className="product-card-cart">
          {cart.map((product) => {
            return (
              <div className="item" key={product.id}>
                <button
                    className="plus-btn"
                    onClick={() =>
                      dispatch({
                        type: types.removeProduct,
                        payload: product.id,
                      })
                    }
                  >
                    x
                  </button>

                <div className="image">
                  <img src={product.thumbnailUrl} alt="" />
                </div>

                <div className="description">
                  <span>{product.title} </span>
                </div>

                <div className="quantity">
                  
                  <button
                    className="minus-btn"
                    onClick={() =>
                      dispatch({
                        type: types.removeOneProduct,
                        payload: product.id,
                      })
                    }
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className="plus-btn"
                    onClick={() =>
                      dispatch({
                        type: types.addProduct,
                        payload: product,
                      })
                    }
                  >
                    +
                  </button>
                </div>

                <div className="total-price">
                  {product.precio}$
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
