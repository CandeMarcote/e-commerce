import React from "react";
import {UseCartContext} from './Context'
const Cart = () => {

    const { cart } = UseCartContext();
    console.log(cart);
    
    return (
        <div>
            <h1>The Cart</h1>
            <p>Cantidad ${cart.length}</p>
        </div>
    );
};


export default Cart
