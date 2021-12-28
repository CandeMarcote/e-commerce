import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"

const productos = [
    {
        id: 1,
        producto: 'vela',
        precio: 365
    },
    {
        id: 2,
        producto: 'portavela',
        precio: 850
    },
    {
        id: 3,
        producto: 'perfume',
        precio: 400
    }
]

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        console.log('prueba de useEffect');
        //API REST o DataBase
        //conseguimos el archivo
        //modificamos el estado

        const promesa = new Promise((res, rej)=>{

            setTimeout(()=>{
                res(productos)
            }, 5000)
        })

        promesa.then(()=>{
            console.log('cargado correctamente');
            //me tendria que llegar tmb el array de los productos
            setLoading(false);
            setProductos(productos)
            console.log(productos);
        })

        promesa.catch(()=>{
            console.log('se ha producido un error')            
        })
        
    }, [])
    
    if (loading) {
        return (
            <div>
                {props.greeting}!
                <p>Cargando...</p>
                <ItemCount initial={1} stock={5} />
            </div>
        )
    } else {
        return (
            <main>
                <h2>{props.greeting}</h2>
                <ItemCount initial={1} stock={5} />
            </main>
            
        )
    }
}

export default ItemListContainer
