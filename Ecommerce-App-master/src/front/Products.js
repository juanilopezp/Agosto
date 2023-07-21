import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'

import './Products.css'
import { useDispatchCart } from '../components/CartContext'



const Products = () => {

  
  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  const [productos, setProductos] = useState("")
  useEffect (()=>{
    const fetchdata = async () => {
    const data = await axios.get('http://localhost:5000/products')
    setProductos(data)
  }
  fetchdata();
  }, [])
    return (
    <div className="container">
      {productos &&
      productos?.data.map((prod) =>{
         return (
          
            <div className="container-box">
              <link rel="stylesheet" href="productcard" />
              <img src={prod.image}/>
              <h3 className='name'>
                {prod.nombre}
              </h3>
              <h5 className='desc'>{prod.descripcion}</h5>
              <h1 className='presio'>${prod.precio}</h1>
              <button onClick={() => addToCart(prod)}>Agregar al carro</button>
            </div>
          
        )})}
        </div>)
}
export default Products