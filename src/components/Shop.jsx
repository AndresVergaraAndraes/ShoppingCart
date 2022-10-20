import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useModal } from "../Modal/useModal";
import ProductCard from "./ProductCard";
import ShopingCart from "./ShopingCart";
import ProductProvider from "../context/ProductProvider";
import NavBar from "./NavBar";
import ModifyProduct from "./ModifyProduct";
import Modal from "../Modal/Modal";
import Form from "./Form";

const Shop = () => {
  const [isOpenModalCart, openModalCart, closeModalCart] = useModal(false);
  const [isOpenModalForm, openModalForm, closeModalForm] = useModal(false);

  const Products = () => {
    return (
      <>
        <ProductCard
          openModalCart={openModalCart}
          openModalForm={openModalForm}
        />

        <Modal isOpen={isOpenModalCart} closeModal={closeModalCart}>
          <ShopingCart />
        </Modal>

        <Modal isOpen={isOpenModalForm} closeModal={closeModalForm}>
          <Form />
        </Modal>
      </>
    );
  };

  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="cart" element={<ShopingCart />} />
            <Route path="form" element={<ModifyProduct />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </>
  );
};
export default Shop;
