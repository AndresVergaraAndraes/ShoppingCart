import React, { useContext } from "react";
import { productContext } from "../context/ProductProvider";
import "../styles/ShopingCart.css";
import { types } from "../types";
import "../styles/ShopingCart.css";
const ShopingCart = () => {
  const { cart, dispatch } = useContext(productContext);
  let arrayPrecio = cart.map((product) => product.quantity * product.precio);
  return (
    <div className="shopping-cart">
      <div className="title">
        Carrito de compras
        <div className="total-cart">
          Total compra : {arrayPrecio.reduce((prev, curr) => prev + curr, 0)}{" "}
        </div>
        <button onClick={() => dispatch({ type: types.removeAllProducts })}>
          Vaciar Carrito
        </button>
      </div>

      <div className="product-card-cart">
        {cart.map((product) => {
          return (
            <div className="item" key={product.id}>
              <div className="image">
                <img src={product.thumbnailUrl} alt="" />
              </div>

              <div className="description">
                <span>{product.title} </span>
              </div>

              <div className="quantity">
                <button
                  className="buttons"
                  onClick={() =>
                    dispatch({
                      type: types.removeProduct,
                      payload: product.id,
                    })
                  }
                >
                  eliminar
                </button>

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
                {product.precio * product.quantity}{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopingCart;
