import './ItemCount.css'

const ItemCount = ({setItems, items, stock}) => {

    
    const sumar = () => setItems(items + 1) 
    const restar = () => setItems(items - 1)

    return (

    // Diagrama del contador   
    
    <div className='contador'>
            <div className='details'>
                <p>Cantidad: {items} </p>
                <p className='stock'>({stock} disponibles)</p>
            </div>
            <div className='botones'>
                <button onClick={restar} disabled={items <= 0}><p>-</p></button>
                <button onClick={sumar} disabled={items >= stock}><p>+</p></button>
            </div>
    </div>
    
  )
}

export default ItemCount