import React from 'react'
import ItemCount from './../ItemCount/ItemCount'
import { useState } from 'react'
import './ItemDetail.css'
import { NavLink } from 'react-router-dom'

function ItemDetail ({name, price, image, comentary, discount, stock}) {

    const[items, setItems] = useState(0)

    const totaldiscount = (price, discount) => {
        let regladetres = discount * price
        let descuento = regladetres / 100
        let result = price - descuento
        return(Math.round(result))}

    const handleClick = () => {
        console.log(items);
    }

    return (
    <div className='article-individual'>
        <div className='img-container'>
            <img className='individual-img' src={image} alt={name} />
        </div>
        <div className='info-container'>
            <h1>{name}</h1>
            <p className='description'>{comentary}</p>
            <p>Costo actual: USD {price}</p>
            <p>Descuento actual: {discount}% </p>
            <h2>USD {totaldiscount (price, discount)}</h2>
            <ItemCount setItems={setItems} items={items} stock={stock} />
            <NavLink to={'/cart'} onClick={handleClick}> 
                <button class="button2"> Comprar </button>
            </NavLink>
        </div>
    </div>) 
}

export default ItemDetail