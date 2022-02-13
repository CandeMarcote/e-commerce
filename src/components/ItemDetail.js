import React from 'react';
import ItemCount from './ItemCount'
import {UseCartContext} from './Context'
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {
    const {title, price, stock, pictureUrl} = item;

const {addProduct} = UseCartContext()

    const onAdd = (cantidad) => {
       addProduct(item, cantidad)
    }

    return (
        <main className='itemDetail'>
            <div className='container__img'>
                <img src={pictureUrl} className="itemDetail__img" alt={title}/>
            </div>
            <div className='container__detail'>
                <h3>{title}</h3>
                <p className='price'>$ {price}</p>
                <p className='description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ipsam ad soluta blanditiis. Voluptate vitae dolorum expedita saepe aliquam possimus provident laudantium accusantium facere, maxime quod veniam rerum molestiae laboriosam.</p>
                <ItemCount stock={stock} onAdd={onAdd}/>
                <Link to="/cart" className='checkCart'>Check cart</Link>
            </div>
        </main>
    )
}

export default ItemDetail;
