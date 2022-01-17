import { createContext, useState, useContext } from 'react';

const Context = createContext([])

export const UseCartContext = () => useContext(Context)

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)

       /*

    const Provider = context.Provider : permite proveer un contexto y que este pueda ser modificado.
    const Provider = context.Consumer : ya no se usa mas, te permitia consummir el valor del contexto. Ahora se usa useContext().
    ó
    const { Provider, Consumer } = context
    useContext() : e un hook que te permite consumir el contexto
    */

   const addProduct = (item, cantidad) => {
       setCart([...cart, {item, cantidad}])
       console.log(cart)
   };

   const deleteProduct = (id) => {
       const items = cart.filter((i) => i.item.id !== id)
       setCart(items)
   };

   const isInCart = () => {};

   const cleanCart = () => {
       setCart([])
   };

   const { Provider } = Context;

    const contextValue = {
        cart, 
        precio_total, 
        cantidad_total,
        addProduct,
        deleteProduct,
        cleanCart
    }


    return (
        <Provider value={contextValue}>
            {children}
        </Provider>        
    )
}

// console.log(context)

export default CartProvider