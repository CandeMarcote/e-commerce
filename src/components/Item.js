// import React, {useState, useEffect} from 'react'
import React from 'react';
// import ItemCount from './ItemCount';
import { Link } from "react-router-dom"

/*const Item = ({id, title, price, pictureUrl}) => {
    const [fake, setFake] = useState([]);
    console.log(fake)
    
    useEffect(() =>{
        const fakestore = async () => {
            const response = await fetch("https://fakestoreapi.com/products?limit=5')");
            const jsonData = await response.json();
            setFake(jsonData)
        }
        fakestore();
    },[])

    return (
        // <div>
        //     <img src={pictureUrl} alt={title} />
        //     <h5>{title}</h5>
        //     <h6>$ {price}</h6>
        //     <ItemCount></ItemCount>
        //     <button>Ver más</button>
        // </div>

        <div className="container">
            {fake.map((values) => {
                return (
                    <>
                    <div className="box">
                        <div className="content">
                            <h5>{values.title}</h5>
                            <p>{values.description}</p>
                        </div>
                        <img src={values.image} className="itemImg" />
                    </div>
                    </>
                )
            })}
        </div>
    )
}*/

const Item = ({producto}) => {

    const {id, precio, title, pictureUrl} = producto;

    return (
        <div className="item">
            <img src={pictureUrl} alt={title} className='itemImg'/>
            <div className="titleAndPrice">
                <h5>{title}</h5>
                <h6 className="price">$ {precio}</h6>
            </div>
            {/* <ItemCount></ItemCount> */}
            <Link to={"/item/" + id} className="link__verMas">Ver más</Link>
        </div>
    )
}

export default Item
