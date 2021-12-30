import React from 'react'
import ItemCount from './ItemCount';

fetch('https://fakestoreapi.com/products?limit=5')
    .then(res=>res.json())
    .then(json=> {
        
    })

const Item = ({id, title, price, pictureUrl}) => {

    return (
        <div>
            <img src={pictureUrl} alt={title} />
            <h5>{title}</h5>
            <h6>$ {price}</h6>
            <ItemCount></ItemCount>
            <button>Ver más</button>
        </div>
    )
}

export default Item
