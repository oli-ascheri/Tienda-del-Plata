import cart from './cart-logo.png';
import './CartWidget.css'
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"


const CartWidget = (props) => {

    const { totalItems } = useContext(CartContext)
    
    return(
        <div className='cart'>
            <Link to={"/cart"} className='cart-widget'><img src={cart} className='img'></img></Link>
            <Link to={"/cart"} className='count'><span >{totalItems}</span></Link>
        </div>
    )
}

export default CartWidget