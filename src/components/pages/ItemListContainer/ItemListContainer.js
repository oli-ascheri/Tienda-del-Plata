import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../ItemList/ItemList"
 import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore'
 

const ItemListContainer = () => {

    const [productList, setProductList] = useState([])
    const { category } = useParams()
    
    const getProducts = () => {
    const db = getFirestore()
    const querySnapshot = collection(db, 'items')

    // const queryFilter = query(querySnapshot, where('categoryId', '==', category))

        if (category) {

            const queryFilter = query(
                querySnapshot, 
                where('categoryId', '==', category)
                )

        getDocs(queryFilter)
            .then((response) => {
                console.log(response)
                const data = response.docs.map((product) => {
                    return { id: product.id, ...product.data()}
            })
            setProductList(data);   
        })
    } else {
        getDocs(querySnapshot)
            .then((response) => {
            console.log(response)
            const data = response.docs.map((product) => {
                return { id: product.id, ...product.data()}
            })
        setProductList(data);   
        })
    }

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
    // useEffect(() => {
          
      //     if(category){
      //         const prodfilter = data.filter(p => p.category === category)
      //         setProductList(prodfilter)
      //     } else {
      //         getProducts.then((response) => {
      //             setProductList(response);
      //             }); 
      //     }
      // }, [category])
    
export default ItemListContainer


