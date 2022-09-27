import cart from '../../img/cart-logo.png';
import './CartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = (props) => {
    return(
        <div>
            <Link to={"/cart"} ><img src={cart} className='cart-widget'></img></Link>
            
        </div>
    )
}

export default CartWidget