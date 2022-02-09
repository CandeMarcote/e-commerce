import React, { useState } from "react";
import {UseCartContext} from './Context';
import CartItem from "./CartItem";
import {db} from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import swal from 'sweetalert';


const Cart = () => {

    const { cart, cleanCart, cantidad_total } = UseCartContext();
    const [order, setOrder] = useState(false)
    // console.log(cart);
    const createOrder = () => {

        const productsCollection = collection(db, "orders");

        const user = {
            nombre: "Candelaria",
            email: "candemarcote@gmail.com",
            telefono: "2995041172"
        }

        const order = {
            user,
            cart,
            cantidad_total,
            created_at: serverTimestamp()
        }

        const request = addDoc(productsCollection, order)

        request
            .then((result) => {
                setOrder(result.id)
                swal("Strike a light!", "Your purchase was succesful!", "success");
                // alert('compra confirmada: orden ' + result.id)
            })
            .catch((error) => {
                console.log("Se ha producido un error: " + error)
            })
            .finally((res)=> {
                cleanCart();
            })
    }

    if(cart.length < 1) {
        return (
            <h4>No hay productos en el carrito</h4>
        )
    } else {
        // console.log(cart)
        return (
            <div className="cart__container">
                <h1>The Cart</h1>
                {cart.map((item) => <CartItem key={item.id} item={item.item} cantidad={item.cantidad} />)}
                <div className="buttons">
                <button onClick={cleanCart} className="cleanCart">Clean Cart</button>
                <button onClick={createOrder} className="confirmOrder">Comfirm order</button>
                </div>
                {/* {order && <p>Order: {order}</p>} */}
            </div>
        );
    }
};


export default Cart
