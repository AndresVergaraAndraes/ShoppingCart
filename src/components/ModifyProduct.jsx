import React, { useState, useContext } from "react";
import { productContext } from "../context/ProductProvider";

const ModifyProduct = () => {
  const { products, dispatch } = useContext(productContext);
  const [titleModify, setTitleModify] = useState("");
  const [imageModify, setImageModify] = useState("");
  const [precioModify, setPrecioModify] = useState(0);

  const handleModify = (e) => {
    e.preventDefault();
    dispatch({
      type: types.modifyProduct,
      payload: {
        thumbnailUrl: imageModify,
        precio: precioModify,
        title: titleModify,
      },
    });
  };
  return (
    <>
      <div className="card-container-form">
        {products.map((product) => {
          return (
            <div className="product-card-form" key={product.id}>
              <form onSubmit={handleModify}>
                <div className="title-edit">
                  <h3>Titulo: {product.title}</h3>
                  <input
                    placeholder="modificar titulo"
                    onChange={(e) => setTitleModify(e.target.value)}
                  />
                </div>

                <div className="image-container">
                  <img src={product.thumbnailUrl} alt="" />
                  <input
                    placeholder="modificar imagen"
                    onChange={(e) => setImageModify(e.target.value)}
                  />
                </div>

                <div className="precio-container">
                  <p>Precio: {product.precio} </p>
                  <input
                    placeholder="modificar precio"
                    onChange={(e) => setPrecioModify(parseInt(e.target.value))}
                  />
                </div>

                <button
                  onClick={() =>
                    dispatch({
                      type: types.deleteProduct,
                      payload: product,
                    })
                  }
                >
                  Eliminar producto
                </button>
                <button
                  onClick={() =>
                    dispatch({
                      type: types.modifyProduct,
                      payload: {
                        ...product,
                        title: titleModify,
                        thumbnailUrl: imageModify,
                        precio: precioModify,
                      },
                    })
                  }
                >
                  Editar
                </button>
              </form>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ModifyProduct;
