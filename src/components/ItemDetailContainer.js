import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';

const listaProductos = [
    {id: 1, title: 'vela 1', precio: 365, pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjezB7jn_AMFQOZZjWdezpTUpfUpPNsD8Tmz5o5RArS1EmsKYQLv64asnpNpsfAM9SdQ&usqp=CAU', stock: 5},
    {id: 2, title: 'vela 2', precio: 650, pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLjYo6JNtlIX_-5uiMxn7FI9RwGB8L0qkSA&usqp=CAU', stock: 6},
    {id: 3, title: 'vela 3', precio: 400, pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQ9tE4eJQ1RA9HX8r-Psnl6NCzfJsMdp_DA&usqp=CAU', stock: 7},
    {id: 4, title: 'vela 4', precio: 450, pictureUrl: 'data:image/jpeg;base64,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', stock: 7}
];

const id = 3;
const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const getItem = listaProductos.filter((item) => {
        return item.id === +id
    })

    useEffect(() => {
        const promise = new Promise ((res, rej) => {
            setTimeout(() => {
                res(getItem)
            }, 2000);
        })

        promise.then((res) => {
            setItem(res);
            setLoading(true)
        })
    }, [getItem]);

    if (!loading) {
        return (
            <>
            <h2>...Cargando</h2>
            </>
        )
    } else {
        return(
            <div className="itemDetailContainer">
                {item.map((item) => (<ItemDetail item={item} key={id}/>))}
            </div>
        )
    }
}

export default ItemDetailContainer;
