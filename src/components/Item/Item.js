import React from 'react'
import './Item.css'


const Item = ({name, price, image, comentary, discount}) => {
  // stock

  const totaldiscount = (price, discount) => {
    let regladetres = discount * price
    let descuento = regladetres / 100
    let result = price - descuento
    return(Math.round(result))}
    

  return (<div class="product-container">
            <div class="product-card">
              <div class="product-image">
                <span class="discount-tag">{discount} % off</span>
                <img src={image} class="product-thumb" alt= {name} />
                <button class="card-btn">Ver detalles aqui</button>
              </div>
              <div class="product-info">
                <h2 class="product-brand">{name} </h2>
                <p class="product-short-des">{comentary}</p>
                <span class="price">USD {totaldiscount (price, discount)} </span><span class="actual-price">USD {price} </span>
              </div>
            </div>
          </div>
)
}
export default Item
