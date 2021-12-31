import { useEffect, useState } from "react";
import Item from "./Item";

const ItemListContainer = ({listaProductos}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("prueba de useEffect");
        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(listaProductos);
            }, 2000);
            //API REST o DataBase
            //conseguimos el archivo
            //modificamos el estado
        });

        promesa.then((productos) => {
            setLoading(false);
            setProductos(productos);
        })
        
        promesa.catch(() => {
            console.log("se ha producido un error")
        });
    }, []);

    if (loading === true) {
        return (
            <div>
                <p>Cargando...</p>
            </div>
        );
    } else {
        console.log(productos)
        return (
            <>
            {productos.map((producto) => (
                <Item key={producto.id} producto={producto} stock={5}/>
            ))}
            </>
        );
    }
};

export default ItemListContainer
