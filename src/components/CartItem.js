import React from 'react';
import { UseCartContext } from './Context';

function CartItem({item, cantidad}) {
    const {title, precio, stock, pictureUrl} = item;
    const { deleteProduct } = UseCartContext();


  return <div>
      <h4>{title}</h4>
      <img style={{width:"60px", height:"auto"}}src={pictureUrl} alt={title}/>
      <p>$ {precio}</p>
      <p>cantidad: {cantidad}</p>
      <button onClick={()=>deleteProduct(item.id)}>Borrar Item</button>

  </div>;
}

export default CartItem;
