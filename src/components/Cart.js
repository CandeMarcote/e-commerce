import React from "react";
import { useContext } from "react";
import { Context } from "./Context";
const Cart = () => {

    const { cart, cantidad_total } = useContext(Context);
    console.log(cart);
    
    return (
        <div>
            <h1>The Cart</h1>
            <p>Cantidad ${cantidad_total}</p>
        </div>
    );
};


export default Cart
