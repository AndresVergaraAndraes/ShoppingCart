import React from 'react'
import products from '../components/ProductList'
import { types } from '../types';

export const initialProductState = {
    products: products,
    cart: []
}
const ProductReducer = (state,action) => {
 switch(action.type){

    case types.addProduct:
    {
        const newProduct = action.payload;
        const existCartProduct = state.cart
        .find(product => product.id === newProduct.id)

        return existCartProduct ? 
        {
            ...state,
            cart: state.cart.map(product => 
             product.id === newProduct.id ?
                {...product,quantity:product.quantity++}
                : product
                )
        }
        : {...state,
            cart:[
                ...state.cart,{
                    ...action.payload,quantity: 1
                }
            ]
        }
    }

        case types.removeProduct:
            return {
                ...state,
                cart: state.cart.filter(product => product.id!==action.payload)
            }

            case types.removeOneProduct:
                {
                    const deleteProduct = state.cart.find(product => product.id === action.payload)
                    return deleteProduct.quantity > 0 
                    ? {
                        ...state,
                        cart: state.cart.map(product =>
                            product.id===action.payload
                            ? {...product,quantity:product.quantity--}
                            : product
                            )
                    } 
                    : {
                        ...state,
                        cart: state.cart.filter(product => product.id !== action.payload)
                    }
                    
                }
                case types.removeAllProducts:
                    return initialProductState;
    default:
        return state;
 }

}

export default ProductReducer;