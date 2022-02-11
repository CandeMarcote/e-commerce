import { createContext, useState, useContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const Context = createContext([])

export const UseCartContext = () => useContext(Context);

const CartProvider = ({children}) => {

    const [cart, setCart] = useLocalStorage('catch', [])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)

    const addProduct = (item, cantidad) => {
        
        const index = cart.findIndex((i) => i.item.id === item.id);
        setCart([...cart, {item, cantidad}])

        if (index > -1) {
            cart.splice(index, 1);
            setCart([...cart, {item, cantidad}])
            console.log(cart)
        } else {
            setCart([...cart, {item, cantidad}])
            console.log(cart)
        }
    };

    const deleteProduct = (id) => {
        const items = cart.filter((i)=> i.item.id !== id)
        setCart(items)
    };

    const agregar = (item, cantidad) => {
        const itemFiltrado = cart.findIndex((i)=> i.item.id == item.id)
        cart.splice(itemFiltrado, 1/*, el item se tendria que insertar aqui*/);
        setCart([...cart, {item, cantidad: cantidad + 1}])
     
    };


    const restar = (item, cantidad) => {

       if(cantidad > 1) { const itemFiltrado = cart.findIndex((i)=> i.item.id == item.id)

        cart.splice(itemFiltrado, 1/*, item*/);
        
        setCart([...cart, {item, cantidad: cantidad - 1}])}
     
    };

    const cleanCart = () => {
        setCart([])
    };

    return (
        <Context.Provider value={{
            cart, 
            precio_total, 
            cantidad_total,
            addProduct,
            deleteProduct,
            cleanCart,
            agregar,
            restar}}>
            {children}
        </Context.Provider>        
    )
}


export default CartProvider