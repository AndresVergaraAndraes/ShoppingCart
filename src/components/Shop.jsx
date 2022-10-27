import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { useModal } from '../Modal/useModal'
import ProductCard from './ProductCard'
import ShoppingCart from './ShoppingCart'
import ProductProvider from '../context/ProductProvider'
import NavBar from './NavBar'
import ModifyProduct from './ModifyProduct'
import Modal from '../Modal/Modal'
import Form from './Form'



const Shop = () => {

  const [isOpenModalCart, openModalCart, closeModalCart] = useModal(false);
  const [isOpenModalForm, openModalForm, closeModalForm] = useModal(false);

    const Products = () =>{
      return(
      <>
          <ProductCard openModalCart={openModalCart} openModalForm={openModalForm} />

          <Modal isOpen={isOpenModalCart} closeModal={closeModalCart}>
              <ShoppingCart/>
          </Modal>
          
          <Modal isOpen={isOpenModalForm} closeModal={closeModalForm}>
              <Form closeModal={closeModalForm} />
          </Modal>
      </>
      )
    }

   
  return (
    <>
      <ProductProvider>
          <BrowserRouter>
              <NavBar/>
              <Routes>
                    <Route path='/ShoppingCart' element={<Products/>} />
                    <Route path='cart' element={<ShoppingCart/>} />
                    <Route path='form' element={<ModifyProduct/>} />
              </Routes>
          </BrowserRouter>
      </ProductProvider>

    </>
  )
}
export default Shop
