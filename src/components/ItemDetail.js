import React from 'react';
import img1 from './../images/test.jpg';
import ItemCount from './ItemCount'
import CartButton from './CartButton';

const ItemDetail = () => {
    return (
        <main className='itemDetail'>
            <div className='container__img'>
                <img src={img1} className="itemDetail__img"/>
            </div>
            <div className='container__detail'>
                <h3>Scented candle</h3>
                <p>$650</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ipsam ad soluta blanditiis. Voluptate vitae dolorum expedita saepe aliquam possimus provident laudantium accusantium facere, maxime quod veniam rerum molestiae laboriosam.</p>
                <ItemCount />
                <CartButton />
            </div>
        </main>
    )
}

export default ItemDetail
