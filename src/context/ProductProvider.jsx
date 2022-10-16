import React, { createContext, useReducer } from 'react'
import ProductReducer, { initialProductState } from '../reducers/productReducer';
export const productContext = React.createContext();
const ProductProvider = ({children}) => {
  const [productState, dispatch] = useReducer(ProductReducer,initialProductState)
  const {products,cart} = productState;
  console.log(cart)
  return (
    <productContext.Provider value={{products:products,dispatch,cart:cart}}>
      {children}
    </productContext.Provider>
  )
}

export default ProductProvider;