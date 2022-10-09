import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../ItemList/ItemList"
 import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
 

const ItemListContainer = () => {

    const [productList, setProductList] = useState([])
    const { category } = useParams()
    
    const getProducts = () => {
    const db = getFirestore()
    const queryBase = collection(db, 'items')
    const querySnapshot = category 
        ? query(queryBase, where('categoryId', '==', category)) 
        : queryBase;

        getDocs(querySnapshot)
            .then((response) => {
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data()}
            })
            setProductList(data);   
        });
    } 


    useEffect(() => {
        getProducts()
        }, [category])
              
    return (
        <>
            <ItemList lista={productList} />
        </>
    ) 

}
    
export default ItemListContainer


