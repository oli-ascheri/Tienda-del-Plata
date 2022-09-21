import { createContext } from "react";

export const CartContext = createContext()

// export const CartProvider = ({children}) => {
//     const [cart, setCart] = useState([])

//     const addToCart = (item, cantidad) => {
//         if (isInCart(item.id)) {
//             alert("ya esta en el carrito")
//         } else {
//             setCart ([...cart, { ...item, cantidad }])
//         }
//     }
//     const isInCart = (id) => {
//         return cart.some((item) => item.id === id)
//     }
//     return (
//         <CartContext.Provider value={{ cart, addToCart}}>
//             {children}
//         </CartContext.Provider>
//     )
