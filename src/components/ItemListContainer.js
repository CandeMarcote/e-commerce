import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"

const productos = [
    {
        id: 1,
        title: 'vela 1',
        precio: 365,
        pictureUrl: 'https://ii1.pepperfry.com/media/catalog/product/h/o/568x625/hosley-lavender-fields-highly-scented-6inch-pillar-candle-hosley-lavender-fields-highly-scented-6inc-qlqxtn.jpg'
    },
    {
        id: 2,
        title: 'vela 2',
        precio: 850,
        pictureUrl: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1607448500-brooklinen-magic-hour-1607448496.jpg?crop=1xw:1xh;center,top&resize=480:*'
    },
    {
        id: 3,
        title: 'vela 3',
        precio: 400,
        pictureUrl: 'https://assets.vogue.in/photos/5efd6cba9aeed766057e7d69/master/w_1600%2Cc_limit/kama-ayurveda-relaxing-candles-aromatherapy-scented-candles.jpg'
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
