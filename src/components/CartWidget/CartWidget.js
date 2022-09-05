import cart from '../../img/cart-logo.png';
import './CartWidget.css'

const CartWidget = (props) => {
    return(
        <div>
            <img src={cart} className='cart-widget'></img>
        </div>
    )
}

export default CartWidget