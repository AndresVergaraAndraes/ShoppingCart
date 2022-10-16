import React, { useContext } from 'react'
import { productContext } from '../context/ProductProvider'
import '../styles/ShopingCart.css'
import { types } from '../types'
const ShopingCart = () => {
  const {cart,dispatch} = useContext(productContext)
  console.log(cart)
  let precio = 0;
  return (
    <div>
      
             <ul>
             { cart.map(product=> {
            return(
            <li  
            key = {product.id}>

                {product.title} - Cantidad {product.quantity}
                Precio: {product.precio*product.quantity}
                <br />
              

                <button onClick={()=> dispatch({
                  type:types.removeOneProduct,
                  payload:product.id
                })} >-</button>

                <button onClick={()=> dispatch({
                  type:types.addProduct,
                  payload:product
                })} >+</button>
                
                <button onClick={()=> dispatch({
                  type:types.removeProduct,
                  payload:product.id
                })}>Eliminar del carrito</button>
<br />
Precio: {precio=+product.precio}
                 </li>
                 
            )})}  
          
           <button onClick={()=> dispatch({type:types.removeAllProducts})} >Vaciar Carrito</button>
             </ul>
          
           
             
               
                
        </div>
  )
}

export default ShopingCart