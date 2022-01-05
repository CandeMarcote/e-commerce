import React from 'react';
import img1 from './../images/test.jpg';
import ItemCount from './ItemCount'
import CartButton from './CartButton';

const ItemDetail = ({item}) => {
    const {title, precio, stock} = item;

    return (
        <main className='itemDetail'>
            <div className='container__img'>
                <img src={img1} className="itemDetail__img" alt={title}/>
            </div>
            <div className='container__detail'>
                <h3>{title}</h3>
                <p className='price'>$ {precio}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ipsam ad soluta blanditiis. Voluptate vitae dolorum expedita saepe aliquam possimus provident laudantium accusantium facere, maxime quod veniam rerum molestiae laboriosam.</p>
                <ItemCount stock={stock}/>
                <CartButton />
            </div>
        </main>
    )
}

export default ItemDetail;
