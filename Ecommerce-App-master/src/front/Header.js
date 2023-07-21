import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'
import './Header.css'
import Carrito from '../assets/carrito.png'
import CD from '../assets/cd.png'
function Header() {
  const items = useCart();
  return (
    <nav>
        <Link className="home" to="/">
          PUNKY STORE
        </Link>
        <Link className="productos" to="/productos">
          <img src={CD}/>
        </Link>
        <Link className="carrito" to="/cart">
          <img src={Carrito} /> ({items.length})
        </Link>
    </nav>
  )
}

export default Header