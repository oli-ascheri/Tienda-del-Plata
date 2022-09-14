import data from "../../mockData/mockData"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {

    const [productList, setProductList] = useState([])
    const { Id } = useParams()

    useEffect(() => {
        getProducts.then((response) => {
        setProductList(response);
        });
    }, [])

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