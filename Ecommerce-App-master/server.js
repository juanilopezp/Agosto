const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const mercadopago = require("mercadopago")

const Category = require('./src/components/Categories/index')
const Product = require('./src/components/Products/index')


app.use(express.json())
app.use(cors())

mercadopago.configure({
    access_token: "TEST-4828545902400130-071900-7e9dd0e0ac80b6a7207164ff9578146f-334569657"
})


app.post("/create_preference", (req, res) => {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: 1,
        },
      ],
      back_urls: {
        success: "http://localhost:3000",
        failure: "http://localhost:3000",
        pending: "",
      },
      auto_return: "approved",
    };
  
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });


app.get('/category', async(req, res) => {
    try {
        const category = await Category.find({});
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/category', async(req, res) => {
    try {
        const category = await Category.create(req.body)
        res.status(200).json(category);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
app.listen(5000, ()=>{
    console.log('Corriendo en el puerto 5000')
})


mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://JuaniLo:anjulp_cabj@cluster0.mtupa5a.mongodb.net/node-api?retryWrites=true&w=majority').then(()=>{
    console.log('Conectado a la data base')
}).catch((error)=>{
    console.log(error)
})