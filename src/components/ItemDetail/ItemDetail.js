import React from 'react'
import './ItemDetail.css'

function ItemDetail ({name, price, image, comentary, discount, stock}) {

;
    return (
    <div className='article-individual'>
        <h1>DESCRIPCION DEL PRODUCTO:</h1>
        <img className='individual-img' src={image} alt={name} />
        <p>Articulo: {name}</p>
        <p>Precio: USD {price}</p>
        <p>Descripcion del producto: {comentary}</p>
        <p>Descuento actual: {discount}</p>
        <p>Stock: {stock}</p>
    </div>) 
}

export default ItemDetail