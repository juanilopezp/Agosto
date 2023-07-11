import React, { createContext, useContext, useReducer, useState, useEffect } from 'react'
import { cartReducer } from './Reducer'
import axios from 'axios'

const CartContext = createContext()
const CartProvider = ({children}) => {
  const [productos, setProductos] = useState("")
  useEffect (()=>{
    const fetchdata = async () => {
    const data = await axios.get('http://localhost:5000/products')
    setProductos(data)
  }
  fetchdata();
  }, [])
    const [state, dispach] = useReducer(cartReducer, {
        productos: productos,
        cart: [],
    })
    console.log(state)
    return (
    <CartContext.Provider value={{ state, dispach }}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider

export const CartState = () =>{
  return useContext(CartContext)
}