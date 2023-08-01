import { useState } from 'react'
import React from 'react'
import { useCart, useDispatchCart } from '../components/CartContext'
import './Cart.css'
import axios from 'axios'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago('TEST-9e68dfa9-17c3-4bcb-9550-d2ef0d330cc8');

const CartItem = ({ product, index, handleRemove }) => {
  
    return (
          <div className='contenedor' >
            <img src={product.image} />
            <h1 className='name'>{product.nombre}</h1>
            <h2 className='desc'>{product.descripcion}</h2>
            <dl >
              <dt >Price</dt>
              <dd className='presio'>
                {product.precio.toLocaleString("en", {
                  style: "currency",
                  currency: "ARS"
                })}
              </dd>
            </dl>
            <button onClick={() => handleRemove(index)}>Remover del carro</button>
          </div>
        
      
    );
  };
  export default function Store() {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.precio, 0);
    const [preferenceId, setPreferenceId] = useState(null)
    
    const createPreference = async () => {
      try {
        const response = await axios.post("http://localhost:5000/create_preference", {
          description: "Bananita contenta",
          price: totalPrice,
          quantity: 1,
        });
  
        const { id } = response.data;
        return id;
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleBuy = async () => {
      const id = await createPreference();
      if (id) {
        setPreferenceId(id);
      }
    };
    
    const handleRemove = (index) => {
      dispatch({ type: "REMOVE", index });
    };
  
    if (items.length === 0) {
      return (
        <main>
          <p>Carro vacio</p>
        </main>
      );
    }
    return (
      <main>
        <p>
          Total price:{" "}
          {totalPrice.toLocaleString("en", {
            style: "currency",
            currency: "ARS"
          })}
        </p>
        <div className="dady-container">{items.map((item, index) => (
          <CartItem
            handleRemove={handleRemove}
            key={index}
            product={item}
            index={index}
          />
        ))}</div>
        
        <button onClick={handleBuy} >Pagar</button>
        <Wallet initialization={{ preferenceId }} />
      </main>
    );
  }