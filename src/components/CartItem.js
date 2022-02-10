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
      <p>$ {price}</p>
      <p>Quantity: </p>
      <button onClick={()=>restar(item, cantidad)}>-</button>
      <p>{cantidad}</p>
      <button onClick={()=>agregar(item, cantidad)}>+</button>
      <button onClick={()=>deleteProduct(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
  </div>;
}

export default CartItem;


