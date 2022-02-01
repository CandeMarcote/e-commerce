import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


// console.log(db)

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    
    useEffect(() => {

        // console.log(id)

        if(id) {
            //3 parametros: firebase, nombre de la coleccion que hicimos en firebase y una que no vamos a usar.
            const productsCollection = collection(db, "products");
            const filter = where("sale", "==", id)
            // console.log(filter)
            const categoryQuery = query(productsCollection, filter)
            const request = getDocs(categoryQuery)
    
            request
                .then((result) => {
                    const docs = result.docs
                    const docs_formateado = docs.map(doc => {
                        const product = {
                            id : doc.id,
                            ...doc.data()
                        }
                        return product
                    })
                    setProductos(docs_formateado)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            const productsCollection = collection(db, "products");
            const categoryQuery = query(productsCollection)
            const request = getDocs(categoryQuery)
    
            request
                .then((result) => {
                    const docs = result.docs
                    const docs_formateado = docs.map(doc => {
                        const product = {
                            id : doc.id,
                            ...doc.data()
                        }
                        return product
                    })
                    setProductos(docs_formateado)
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }, [id]);

    if (loading === true) {
        return (
            <div>
                <p>Cargando...</p>
            </div>
        );
    } else {
        // console.log(productos);
        return (
            <div className="items__container">
                <ItemList productos = {productos} />
            </div>
        );
    }
};

export default ItemListContainer
