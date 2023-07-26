import axios from 'axios'
import React, { useState } from 'react'
import './AddProduct.css'


function CreateProduct() {
    const [nombre, setNombre] = useState("")
    const [image, setImage] = useState("")
    const [precio, setPrecio] = useState(0)
    const [descripcion, setDescripcion] = useState("")

    const addProduct = () =>{

        axios.post('http://localhost:5000/products',{
            nombre, image, precio, descripcion
        })
        .then(()=>{
            setNombre('')
            setImage('')
            setPrecio(0)
            setDescripcion('')
        })
        .catch((error) => alert(error.message))
    }
  return (
    
        <>
        <div>
            <input onChange={(e) => setNombre(e.target.value)} value={nombre} placeholder='Titulo'/>
            <input onChange={(e) => setImage(e.target.value)} value={image} placeholder='imagen 64'/>
            <input onChange={(e) => setDescripcion(e.target.value)} value={descripcion} placeholder='descripcion'/>
            <input type="number" onChange={(e) => setPrecio(e.target.value)} value={precio} />
            <button onClick={addProduct}>subir producto</button>
        </div></>
  )
}
export default CreateProduct