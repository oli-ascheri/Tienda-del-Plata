import Item from "../Item/Item"
import './ItemList.css'
import { Link } from'react-router-dom'

const ItemList = ({lista}) => {
  
  return (
    <div className="products">
      {
        lista.map((product) => (
        <Link key={product.id} to={'/compra/' + product.id} style={{textDecoration:'none'}} >
          <Item          
            name= {product.name}
            price={product.price}
            image={product.image}
            comentary={product.comentary}
            category={product.category}
            discount={product.discount}
            stock={product.stock} />
         </Link>
        ))
      }
    </div>
  )
}

export default ItemList
