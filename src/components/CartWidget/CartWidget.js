import cart from '../../img/cart-logo.png';
import './CartWidget.css'

const CartWidget = ({titulo}) => {
    return(
        <img src={cart} className='cart-widget'>{titulo}</img>
    )
}

export default CartWidget