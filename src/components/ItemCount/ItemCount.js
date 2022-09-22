import './ItemCount.css'

const ItemCount = ({setCount, count, stock }) => {

    
const incrementar = () => {
    if (count < stock) {
        setCount(count + 1)
    }
}
const decrementar = () => {
    if (count > 0) {
        setCount(count - 1)
    }
}

    // const sumar = () => setItems(items + 1) 
    // const restar = () => setItems(items - 1)

    return (
    
    <div className='contador'>
            <div className='details'>
                <p>Cantidad: {count} </p>
                <p className='stock'>({stock} disponibles)</p>
            </div>
            <div className='botones'>
                <button onClick={decrementar} disabled={count <= 1}><p>-</p></button>
                <button onClick={incrementar} disabled={count >= stock}><p>+</p></button>
            </div>
    </div>
    
  )
}

export default ItemCount