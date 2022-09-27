import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext"
import '../Cart/Cart.css'

const Cart = () => {

  const { cart, removeItem, clear } = useContext(CartContext)
  console.log('cart', cart);

  const totaldiscount = (price, discount, quantity) => {
    let regladetres = discount * price
    let descuento = regladetres / 100
    let result = price - descuento
    let total = result * quantity
    return(Math.round(total))}

  return (
    <div className='buy-cart' >
        <button onClick={() => clear()}>Vaciar productos</button>
        {cart.length === 0 ? (
          <>
            <h2>No hay productos en tu carrito</h2>
            <Link to={'/'} >Volver a comprar</Link>
          </>
        ) : (
          <>
          {cart.map((item) => (
          <div key={item.id} className='cart-article' >
            
            <img  className='img-article' src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Precio actual: USD {item.price}</p>
            <p>Descuento: {item.discount}%</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Total: USD {totaldiscount(item.price, item.discount, item.quantity)}</p>
      
            <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
          </div>
        ))} 
          </>
        )} 
        
    </div>
  )
}

export default Cart
