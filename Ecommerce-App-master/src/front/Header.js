import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'


function Header() {
  const items = useCart();
  return (
    <nav>
        <Link className="home" to="/">
          home
        </Link>
        <Link className="productos" to="/productos">
          productos
        </Link>
        <Link className="carrito" to="/cart">
          Carro ({items.length})
        </Link>
    </nav>
  )
}

export default Header