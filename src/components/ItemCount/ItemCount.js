import './ItemCount.css'
import { useState } from 'react'

const ItemCount = () => {

    // Logica del contador
    let stock = 10
    const[items, setItems] = useState(0)
    const sumar = () => setItems(items + 1) 
    const restar = () => setItems(items - 1)

    return (

    // Diagrama del contador   
    <div className='contador'>
        <div>
            <h3>Tengo: {items} articulos.</h3>
            <h3>Stock actual: {stock}</h3>
            <button onClick={sumar} disabled={items >= stock} >Sumar +</button>
            <button onClick={restar} disabled={items <= 0}>Restar -</button>
        </div>
    </div>
  )
}

export default ItemCount