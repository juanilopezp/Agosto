import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  
  return (
    <>
    <div className='home-container'>
      <div className='texto'>
        <b>
          Bienvenido a Punky Store
        </b>
        <h6>
          Tienda exclusivamente de discos de hardcore y punk, en todas sus variables.
        </h6>
      </div>
    </div>
    <div className="home-midle">
      <div className="text-container">
          <div className='home-midle-h1'>Crea tu producto, sin necesidad de loguearte. Contactate con nosotros para su financiamiento</div>
          <Link className='linkto-create' to={'/create'}>
            crear productos
          </Link>
      </div>
    </div>
    
    </>
  )
}

export default Home