import React from 'react'
import ItemCount from './../ItemCount/ItemCount'
import { useState, useContext} from 'react'
import './ItemDetail.css'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'


function ItemDetail ({name, price, image, comentary, discount, stock, productItem}) {

    const { addToCart } = useContext(CartContext)

    function onAdd(productItem, cantidad) {
            addToCart(productItem, cantidad)
    }

    const[count, setCount] = useState(1)

    const totaldiscount = (price, discount) => {
        let regladetres = discount * price
        let descuento = regladetres / 100
        let result = price - descuento
        return(Math.round(result))}


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

            <ItemCount 
                setCount={setCount} 
                count={count} 
                stock={stock} 
                precio={price} 
            />

           
                    <button class="button2" onClick = {() => onAdd(productItem, count)}> 
                    Agregar al carrito 
                    </button>
   
        </div>
    </div>) 
}

export default ItemDetail