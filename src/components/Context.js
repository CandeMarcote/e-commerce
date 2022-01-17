import { createContext, useState } from 'react';

export const Context = createContext({
    cart: [],
    precio_total: 0,
    cantidad_total: 0

    /*
    const Provider = context.Provider : permite proveer un contexto y que este pueda ser modificado.
    const Provider = context.Consumer : ya no se usa mas, te permitia consummir el valor del contexto. Ahora se usa useContext().
    ó
    const { Provider, Consumer } = context
    useContext() : e un hook que te permite consumir el contexto
    */

})

const { Provider } = Context;

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)

    const contextValue = {
        cart, 
        precio_total, 
        cantidad_total,
        addProduct,
        deleteProduct,
        cleanCart
    }

    const addProduct = () => {};

    const deleteProduct = () => {};

    const isInCart = () => {};

    const cleanCart = () => {};

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>        
    )
}

// console.log(context)

export default CartProvider