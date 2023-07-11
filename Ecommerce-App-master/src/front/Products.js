import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css'
import { CartState } from '../components/Cart'

function Products() {
  const [productos, setProductos] = useState("")
  useEffect (()=>{
    const fetchdata = async () => {
    const data = await axios.get('http://localhost:5000/products')
    setProductos(data)
  }
  fetchdata();
  }, [])

  
    return (productos &&
      productos?.data.map((prod) =>{
         return (
          <div className="container">
            <link rel="stylesheet" href="productcard" />
            <img src={prod.image}/>
            <h3 className='name'>
              {prod.nombre}
            </h3>
            <h6 className='desc'>{prod.descripcion}</h6>
            <h1 className='presio'>${prod.precio}</h1>
            <button>agregar a carrito</button>
            
          </div>
        )
        })
    )
         
      
      
    
  
}

export default Products