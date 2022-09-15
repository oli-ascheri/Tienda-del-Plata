import React from 'react'
import './ItemDetail.css'

function ItemDetail ({name, price, image, comentary, discount, stock}) {

    const totaldiscount = (price, discount) => {
        let regladetres = discount * price
        let descuento = regladetres / 100
        let result = price - descuento
        return(Math.round(result))}

    return (
    <div className='article-individual'>
        <h1>{name}</h1>
        <img className='individual-img' src={image} alt={name} />
        <p>Descripcion del producto: {comentary}</p>
        <p>Costo actual: USD {price}</p>
        <p>Descuento actual: {discount}% </p>
        <p>Stock: {stock}</p>
        <h3>Precio: USD {totaldiscount (price, discount)}</h3>
    </div>) 
}

export default ItemDetail