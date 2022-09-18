import data from "../../mockData/mockData"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../ItemList/ItemList"


const ItemListContainer = () => {

    const [productList, setProductList] = useState([])
    const { category } = useParams()

    useEffect(() => {
        
        if(category){
            const prodfilter = data.filter(p => p.category === category)
            setProductList(prodfilter)
        } else {
            getProducts.then((response) => {
                setProductList(response);
                }); 
        }
    }, [category])

    const getProducts = new Promise ((resolve, reject) => {
            setTimeout(() => {
            resolve(data)
            }, 2000)
        })
    
    return (
        <>
            <ItemList lista={productList} />
        </>
    ) 
}

export default ItemListContainer