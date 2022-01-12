import React from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const {title, precio, stock, pictureUrl} = item;

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }

    return (
        <main className='itemDetail'>
            <div className='container__img'>
                <img src={pictureUrl} className="itemDetail__img" alt={title}/>
            </div>
            <div className='container__detail'>
                <h3>{title}</h3>
                <p className='price'>$ {precio}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ipsam ad soluta blanditiis. Voluptate vitae dolorum expedita saepe aliquam possimus provident laudantium accusantium facere, maxime quod veniam rerum molestiae laboriosam.</p>
                <ItemCount stock={stock} onAdd={onAdd}/>
                <button to="/cart">Check cart</button>
            </div>
        </main>
    )
}

export default ItemDetail;
