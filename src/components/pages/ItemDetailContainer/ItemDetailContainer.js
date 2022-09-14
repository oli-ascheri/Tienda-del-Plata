import data from "../../mockData/mockData";
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
        <>
            <ItemDetail 
                key={productItem.id}
                name= {productItem.name}
                price={productItem.price}
                image={productItem.image}
                comentary={productItem.comentary}
                category={productItem.category}
                discount={productItem.discount}
                stock={productItem.stock} />
        </>
    ) 
}

export default ItemDetailContainer