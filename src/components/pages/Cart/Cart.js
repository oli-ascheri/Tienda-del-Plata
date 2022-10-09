import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext"
import '../Cart/Cart.css'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import swal from 'sweetalert';
import moment from 'moment';

const Cart = () => {

  const { cart, removeItem, clear } = useContext(CartContext)
  const rutaInicial = '/img/'
  console.log('cart', cart);
  
  const createOrder = () => {
    const db = getFirestore();
    const order = {
      buyer: {
        name: 'Olimar',
        phone: '097317539',
        email: 'probando@hotmail.com',
      },
      items: cart,
      total: cart.reduce(
        (valorPasado, valorActual) => 
        valorPasado + valorActual.price * valorActual.quantity, 0
      ),
      date: moment().format(), 
    }
    const query = collection(db, 'orders');
      addDoc(query, order).then(({ id }) => {
          console.log(id);
          swal({
            title: "¡Tu orden de compra fue creada con exito!",
            text: "ID: " + id,
            icon: "success"
          });
        })
        .catch(() => alert('Tu compra no pudo ser completada, intentalo mas tarde'))
  }

  const totaldiscount = (price, discount, quantity) => {
    let regladetres = discount * price
    let descuento = regladetres / 100
    let result = price - descuento
    let total = result * quantity
    return(Math.round(total))}

  return (
    <div className='buy-cart' >
        {cart.length === 0 ? (
          <>
            <h1 className='cart-title'>No hay productos en tu carrito</h1>
            <Link to={'/'} className='back-button'>Volver al inicio</Link>
          </>
        ) : (
          <>
          {cart.map((item) => (
            <div key={item.id} className='cart-article' >
            
            <img  className='img-article' src={rutaInicial + item.image} alt={item.name} />
            <div className="detail">
              <div className="info">
                <h2>{item.name}</h2>
                <button onClick={() => removeItem(item.id)}>Eliminar producto</button>
              </div>
              <p>Precio actual: USD {item.price}</p>
              <p>Descuento: {item.discount}%</p>
              <p>Cantidad: {item.quantity}</p>
              <h4>Total: USD {totaldiscount(item.price, item.discount, item.quantity)}</h4>
      
            </div>
          </div>
        ))} 
        <div className="buy-buttons">
          <button className="buy-button2" onClick={() => clear()}>Vaciar productos</button>
          <button className="buy-button" onClick={createOrder}>Crear orden</button>
        </div>
          </>
        )} 
    </div>
  )
}

export default Cart
