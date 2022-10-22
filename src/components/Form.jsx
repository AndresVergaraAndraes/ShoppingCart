import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductProvider";
import { types } from "../types";
import "../styles/Form.css";
const Form = ({closeModal}) => {
  const { dispatch } = useContext(productContext);

  const [id, setId] = useState("");
  const [precio, setPrecio] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleAddNewProduct = (e) => {
    e.preventDefault();
    closeModal()
    dispatch({
      type: types.addNewProduct,
      payload: {
        id: id,
        precio: precio,
        title: title,
        thumbnailUrl: image,
      },
    });
  };

  return (
    <>
      <form className="form-register" onSubmit={handleAddNewProduct}>
        <h4>Agregar nuevos productos</h4>
        <span>Id</span>
        <input
          className="controls"
          placeholder="agregar id"
          value={id}
          onChange={(e) => setId(parseInt(e.target.value))}
        />
        <span>Precio</span>
        <input
          className="controls"
          placeholder="agregar id"
          value={precio}
          onChange={(e) => setPrecio(parseInt(e.target.value))}
        />
        <span>Título</span>
        <input
          className="controls"
          placeholder="agregar titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>Url de imagen</span>
        <input
          className="controls"
          placeholder="agregar imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="botons" type="submit" >
          Agregar producto
        </button>
      </form>
    </>
  );
};

export default Form;
