import React, { useContext} from 'react'
import { productContext } from '../context/ProductProvider'
import '../styles/ProductCard.css'
import { types } from '../types'

const ProductCard = () => {
    const {products,dispatch} = useContext(productContext)
   
  return (
    <div className='card-container'>
      
        { products.map(product=> {
        return(
            <div className="product-card" key= {product.id}>
                <h3>{product.title} </h3>
                <img src={product.thumbnailUrl} alt="" />
                <p>Precio: {product.precio} </p>
                <button onClick={()=> dispatch({
                  type:types.addProduct,
                  payload:product
                })} >Agregar al carrito</button>
                 </div>
            )})}  
    </div>
  )
}

export default ProductCard