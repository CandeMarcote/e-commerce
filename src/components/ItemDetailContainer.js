import {React, useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "./firebase"
import { collection, getDoc, doc } from "firebase/firestore"
import { SpinnerInfinity } from 'spinners-react';

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
            <h2><SpinnerInfinity size="20vw" color="#7b5051" secondaryColor="burlywood" /></h2>
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
