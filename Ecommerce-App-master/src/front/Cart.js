import React from 'react'
import { useCart, useDispatchCart } from '../components/CartContext'
import './Cart.css'

const CartItem = ({ product, index, handleRemove }) => {
    return (
      <article>
       
          <div>
            <img src={product.image} />
          </div>
          <div >
            <h1 className='name'>{product.nombre}</h1>
            <h2 className='desc'>{product.descripcion}</h2>
            <dl >
              <dt >Price</dt>
              <dd className='presio'>
                {product.precio.toLocaleString("en", {
                  style: "currency",
                  currency: "USD"
                })}
              </dd>
            </dl>
            <button onClick={() => handleRemove(index)}>Remover del carro</button>
          </div>
        
      </article>
    );
  };
  export default function Store() {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.price, 0);
  
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
            currency: "USD"
          })}
        </p>
        {items.map((item, index) => (
          <CartItem
            handleRemove={handleRemove}
            key={index}
            product={item}
            index={index}
          />
        ))}
      </main>
    );
  }