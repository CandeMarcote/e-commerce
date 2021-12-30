// import React, {useState, useEffect} from 'react'
import React from 'react';
import ItemCount from './ItemCount';

const Item = ({producto}) => {

    const {id, precio, title, pictureUrl} = producto
    return (
        <div>
            <img src={pictureUrl} alt={title} />
            <h5>{title}</h5>
            <h6>$ {precio}</h6>
            <ItemCount></ItemCount>
            <button>Ver más</button>
        </div>
    )
}

export default Item
