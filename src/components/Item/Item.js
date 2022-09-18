import React from 'react'
import './Item.css'


const Item = ({name, price, image, comentary, discount}) => {
 
  const totaldiscount = (price, discount) => {
    let regladetres = discount * price
    let descuento = regladetres / 100
    let result = price - descuento
    return(Math.round(result))}
    
 return (
 <div className="product-container">
 <div className="product-card">
     <div className="product-image">
         <span className="discount-tag">{discount} % off</span>
         <img src={image} className="product-thumb" alt= {name} />
         <button className="card-btn">Comprar este articulo</button>
     </div>
     <div className="product-info">
     <h2 className="product-brand">{name} </h2>
     <p className="product-short-des">{comentary}</p>
         <div>
          <span className="price">USD {totaldiscount (price, discount)} </span>
          <span className="actual-price">USD {price}</span>
          </div>
     </div>
 </div>

</div>)

}
export default Item
