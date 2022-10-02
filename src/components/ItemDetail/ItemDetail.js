import React from 'react'
import ItemCount from './../ItemCount/ItemCount'
import { useState, useContext} from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import cart from '../../img/cart-logo.png';




function ItemDetail ({name, price, image, comentary, discount, stock, productItem}) {

    const { addToCart } = useContext(CartContext)
    const[count, setCount] = useState(1)

    const rutaInicial = '../img/'

    function onAdd(productItem, cantidad) {
            addToCart(productItem, cantidad)
            
    }

    const totaldiscount = (price, discount) => {
        let regladetres = discount * price
        let descuento = regladetres / 100
        let result = price - descuento
        return(Math.round(result))}


    return (
    <div className='article-individual'>
        <div className='img-container'>
            <img className='individual-img' src={rutaInicial + image} alt={name} />
        </div>
        <div className='info-container'>
            <Link to={'/'} className='back-button' >Volver</Link>
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
            <div className='option-buttons' >
                <button class="button2" onClick = {() => onAdd(productItem, count)}> 
                Agregar al carrito 
                </button>
                <Link to="/cart">
                    <button class="button3">
                        Carrito de compras<img src={cart} className='cart-widget'></img>
                    </button>    
                </Link> 
                
            </div>
        </div>
    </div>) 
}

export default ItemDetail