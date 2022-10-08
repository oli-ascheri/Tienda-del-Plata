import {  useState } from "react";
import { CartContext } from "./cartContext";
import swal from 'sweetalert'


export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])
    const [ totalItems , setTotalItems ] = useState(0)

    const addToCart = (item, quantity) => {

        setTotalItems(totalItems + quantity);
       
      
        if (isInCart(item.id)) {
            swal({
                title: "¡No se puede cargar este articulo!",
                text: "El carrito de compras ya tiene este articulo cargado.",
                icon: "warning"
              });
        } else {
            setCart ([...cart, { ...item, quantity }])
            swal({
                title: "Articulo agregado",
                text: "¡Tu articulo se ingreso al carrito correctamente!",
                icon: "success",
                timer: "2000",

              });
        }
        console.log('cart', [...cart, { ...item, quantity}]);

    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
     }

    const clear = () => {
        setCart([])
    }

    const removeItem = (productId) => {
        let nuevoArreglo = []
        cart.forEach((product) => {
            if (product.id !== productId) {
                nuevoArreglo.push(product)
            }
        })
        setCart(nuevoArreglo)
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear }} >
            {children}
        </CartContext.Provider>
    )
}