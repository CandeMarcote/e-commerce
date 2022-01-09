import React from 'react'
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';
import { Routes, Route } from "react-router-dom";


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
                <Route path="/" element={<ItemList />} />
                {/* <Route path="/item/category/winter_sale" element={<ItemList/>} />
                <Route path="/item/category/summer_sale" element={<ItemList/>} /> */}
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
            </Routes>
        </main>
    )
}

export default Main