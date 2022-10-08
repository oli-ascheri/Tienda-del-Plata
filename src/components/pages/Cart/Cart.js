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
            
            <img  className='img-article' src={rutaInicial + item.image} alt={item.name} />
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
        <div>
          <button onClick={createOrder}>Crear orden</button>
        </div>
    </div>
  )
}

export default Cart
