import React from "react";
import {UseCartContext} from './Context';
import CartItem from "./CartItem";

const Cart = () => {

    const { cart, cleanCart } = UseCartContext();
    console.log(cart);

    if(cart.length < 1) {
        return (
            <h4>No hay productos en el carrito</h4>
        )
    } else {
        return (
            <div>
                <h1>The Cart</h1>
                {cart.map((item) => <CartItem key={item.id} item={item.item} cantidad={item.cantidad} />)}
                <button onClick={cleanCart}>Clean Cart</button>
            </div>
        );
    }
};


export default Cart
