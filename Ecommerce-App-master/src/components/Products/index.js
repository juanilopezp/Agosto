const mongoose = require('mongoose')


  const productSchema = mongoose.Schema(
    {
      nombre: String,
      descripcion: String,
      cantidad: Number,
      precio: Number,
      image: String,
    },
   
    
  )
  const Product = mongoose.model('Product', productSchema);
  module.exports = Product;
