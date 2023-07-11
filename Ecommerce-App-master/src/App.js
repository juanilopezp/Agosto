import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './front/Home';
import Header from './front/Header';
import Products from './front/Products';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </div>
    /*
      <Header/>

        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
      
      <Footer/>
    */
  );
}

export default App;
