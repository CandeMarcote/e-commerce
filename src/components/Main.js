import React from 'react'
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import { Routes, Route } from "react-router-dom";
import Cart from './Cart';


/* cosas que tenemos que agregar en el Routes:
/ (home)
/item/?
/category/?
/cart
PATH: hacemos una ruta que matchea con las categorías y que despues tiene que continuar con algo que todavía no sabemos que es. Podemos hacer una variable que despues cambie por cada categoría. No hay que hacer map, ni tampoco un route para cada uno.
para "decirle a react" que queremos que despues la URL cambie a alguna ramificacion, ponemos :, para que la URL sepa que ahí va algo que todavía no se elegió.
ejemplo: category/:?
/item/:id
ELEMENT: en el element ponemos el elemento que queremos que se muestre cuando seleccionamos esa ruta.
*/
const Main = ()=> {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </main>
    )
}

export default Main
