import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({lista}) => {
  
  return (
    <div className="products">
      {
        lista.map((product) => (
          <Item 
          key={product.id}
          name= {product.name}
          price={product.price}
          image={product.image}
          comentary={product.comentary}
          category={product.category}
          discount={product.discount}
          stock={product.stock} />
        ))
      }
    </div>
  )
}

export default ItemList
