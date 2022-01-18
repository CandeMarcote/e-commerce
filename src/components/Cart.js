import React from "react";
import { useContext } from "react";
import {UseCartContext} from './Context'
const Cart = () => {

    const { cart, cantidad_total } = UseCartContext();
    console.log(cart);
    
    return (
        <div>
            <h1>The Cart</h1>
            <p>Cantidad ${cantidad_total}</p>
        </div>
    );
};


export default Cart
