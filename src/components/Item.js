import React from 'react';
import { Link } from "react-router-dom"

const Item = ({producto}) => {

    const {id, price, title, pictureUrl} = producto;

    return (
        <div className="item">
            <img src={pictureUrl} alt={title} className='itemImg'/>
            <h5>{title}</h5>
            <h6 className="price">$ {price}</h6>
            {/* <ItemCount></ItemCount> */}
            <Link to={"/item/" + id} className="link__verMas">Ver más</Link>
        </div>
    )
}

export default Item
