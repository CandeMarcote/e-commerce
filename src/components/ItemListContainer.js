import { useEffect, useState } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = ({listaProductos}) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    // console.log(listaProductos)

    console.log(params)
    useEffect(() => {
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
    }, [listaProductos]);

    if (loading === true) {
        return (
            <div>
                <p>Cargando...</p>
            </div>
        );
    } else {
        if (productos.sale === "winter") {
            const winterSale = productos.filter(producto => producto.sale === "winter");
            console.log(winterSale);

            return (
                <>
                {winterSale.map((producto) => (
                    <Item key={producto.id} producto={producto} stock={5}/>
                ))}
                </>
            );

        } else if (productos.sale === "summer"){
            const summerSale = productos.filter(producto => producto.sale === "summer");
            console.log(summerSale);

            return (
                <>
                {summerSale.map((producto) => (
                    <Item key={producto.id} producto={producto} stock={5}/>
                ))}
                </>
            );
        } else {
            console.log(productos);       
        
            return (
                <>
                {productos.map((producto) => (
                    <Item key={producto.id} producto={producto} stock={5}/>
                ))}
                </>
            );    
        }
    }
};

// function productosMap (element) {
//     {element.map((producto) => (
//         <Item key={producto.id} producto={element} stock={producto.stock} />
//     ))}
// }

export default ItemListContainer
