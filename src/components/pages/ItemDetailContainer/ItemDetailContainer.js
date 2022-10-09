import './ItemDetailContainer.css'
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
 import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [productItem, setProductItem] = useState([])

    
     const db = getFirestore()

    const getProduct = () => {
        const queryDoc = doc(db, 'items', id)
            getDoc(queryDoc)
            .then((res) => {
                setProductItem({id: id, ...res.data()})
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getProduct()
        }, [id])
    
    return (
        
            <>
            <ItemDetail 
                 key={productItem.id}
                 name= {productItem.name}
                 price={productItem.price}
                 image={productItem.image}
                 comentary={productItem.comentary}
                 category={productItem.category}
                 discount={productItem.discount}
                 stock={productItem.stock}
                 productItem={productItem} />
             </>
            //  : <p className="loading">Cargando articulo... Por favor, espere.</p> // Si no encuentro el producto, muestro otra cosa. Por ejemplo un mensajito de "loading", podes poner una foto, un gif,  podes poner null y que no haga nada o lo que quieras 
         
     )  
}

export default ItemDetailContainer