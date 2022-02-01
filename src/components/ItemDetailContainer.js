import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "./firebase"
import { collection, getDoc, doc } from "firebase/firestore"

// const listaProductos = [
//     {id: 1, title: 'vela 1', precio: 365, pictureUrl: 'https://cb.scene7.com/is/image/Crate/FlckrFlmlsWhtInWxPlrCdl3x4SSF20/$web_pdp_main_carousel_zoom_high$/200324152457/flickering-flameless-wheat-inclusion-wax-pillar-candle-3x4.jpg', stock: 5, sale: "winter"},
//     {id: 2, title: 'vela 2', precio: 650, pictureUrl: 'https://cdn.shopify.com/s/files/1/0515/2953/products/lucille-spiced-orange-lit-classic-candle_216e0642-6e66-427d-bb66-c4830fee575f_1024x1024.jpg?v=1638213179', stock: 6, sale: "summer"},
//     {id: 3, title: 'vela 3', precio: 400, pictureUrl: 'https://cdn.shopify.com/s/files/1/1226/9168/products/Custom10ozMatteBlackGlassCustomGreenLabel-johnsonresidence1_1000x1000.jpg?v=1633969568', stock: 7, sale: "winter"},
//     {id: 4, title: 'vela 4', precio: 450, pictureUrl: 'https://cf.shopee.co.id/file/fbe118dec0c504184058fa4821809328', stock: 7, sale: "winter"},
//     {id: 5, title: 'vela 5', precio: 535, pictureUrl: 'https://images.havenly.com/unsafe/fit-in/615x641/filters:format(jpeg):quality(50)/https://static.havenly.com/product/production/sha256_feec2d5fbbaeb86b13a7460c1243dc9671b94ce609be89398e63352a4e41e3ff.jpeg', stock: 9, sale: "summer"},
//     {id: 6, title: 'vela 6', precio: 550, pictureUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1633113448-HMS.LosAngeles.Candle.Ecom.1_1240x1240.jpg', stock: 6, sale: "winter"},
//     {id: 7, title: 'vela 7', precio: 450, pictureUrl: 'https://images.summitmedia-digital.com/spotph/images/2021/02/05/rekindle-1612524712.jpg', stock: 5, sale: "summer"},
//     {id: 8, title: 'vela 8', precio: 550, pictureUrl: 'https://i.pinimg.com/originals/43/cc/30/43cc300428652e910c49ab729702716a.jpg', stock: 7, sale: "summer"}
// ];


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        const productsCollection = collection(db, "products");
        const docRef = doc(productsCollection, id);
        // console.log(docRef);
        const request = getDoc(docRef);

        request
            .then ((result) => {
                // console.log(result.id)
                // const product = result.data()
                setItem({id:result.id,...result.data()})
                setLoading(true)
            })
            .catch ((error) => {
                console.log(error)
            })
    }, [id]);

    if (!loading) {
        return (
            <>
            <h2>...Cargando</h2>
            </>
        )
    } else {
        return(
            <div className="itemDetailContainer">
                <ItemDetail item={item} key={id}/>
            </div>
        )
    }
}

export default ItemDetailContainer;
