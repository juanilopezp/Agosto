import React from 'react'
import { Link } from 'react-router-dom'

const nav = [
    {
        nombre: "Home",
        path: "/"
    },
    {
        nombre: "Productos",
        path: "/productos"
    },
    {
        nombre: "Contacto",
        path: "/contactanos"
    },
    {
      nombre: "Carrito",
      path: "/carrito"
    }
]

function Header() {
  return (
    <nav>
      {
        nav.map((nav) => {
          return(
            <Link to= {nav.path}>{nav.nombre}</Link>
          )
        })
      }
    </nav>
  )
}

export default Header