import React from 'react';
import { UseCartContext } from './Context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function CartItem({item, cantidad}) {
    const {title, price, id, pictureUrl} = item;
    const { deleteProduct, agregar, restar } = UseCartContext();
    
  return <div className="cart__item">
      <img className="cartItem__img" src={pictureUrl} alt={title}/>
      <h4>{title}</h4>
      <p>$ {price * cantidad}</p>
      <div className="quantity">
        <span>Quantity: </span>
        <button onClick={()=>restar(item, cantidad)}> - </button>
        <span>{cantidad}</span>
        <button onClick={()=>agregar(item, cantidad)}> + </button>
      </div>
      <button className="delete_item" onClick={()=>deleteProduct(id)}><FontAwesomeIcon icon={faTrash} /></button>
  </div>;
}

export default CartItem;


