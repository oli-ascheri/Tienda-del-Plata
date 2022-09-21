import data from "../../mockData/mockData";
import "./ItemDetailContainer.css"
import ItemDetail from "../../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"


const ItemDetailContainer = () => {

    const {id} = useParams();
    const [productItem, setProductItem] = useState([])

    useEffect(() => {
        getProducts.then((response) => {
        setProductItem(response);
        });
    }, [])
    
    const getProducts = new Promise ((resolve, reject) => {
            setTimeout(() => {
            resolve(data[id-1])
            }, 2000)
        })
     
    return (
        
            productItem.id ?  // Si encuentro el id del producto voy a mostrar la card 
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
             : <p className="loading">Cargando articulo... Por favor, espere.</p> // Si no encuentro el producto, muestro otra cosa. Por ejemplo un mensajito de "loading", podes poner una foto, un gif,  podes poner null y que no haga nada o lo que quieras 
         
     )  
}

export default ItemDetailContainer