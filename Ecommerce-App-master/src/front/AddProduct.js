import axios from 'axios'
import React, { useState } from 'react'
import './AddProduct.css'

function CreateProduct() {
    const [nombre, setNombre] = useState("")
    const [image, setImage] = useState("")
    const [precio, setPrecio] = useState(0)
    const [descripcion, setDescripcion] = useState("")

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setImage(base64)
      };
      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
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
        <div className='form-container'>
            <input onChange={(e) => setNombre(e.target.value)} value={nombre} placeholder='Titulo'/>
            <input className='input-file' type='file' onChange={(e) => {
          uploadImage(e);
        }} placeholder='imagen 64'/>
            <input onChange={(e) => setDescripcion(e.target.value)} value={descripcion} placeholder='Descripcion'/>
            <input type="number" onChange={(e) => setPrecio(e.target.value)} value={precio} />
            <button className='addProduct-btn' onClick={addProduct}>subir producto</button>
        </div></>
  )
}
export default CreateProduct