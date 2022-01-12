import Item from "./Item"
import ItemListContainer from "./ItemListContainer";

const ItemList = ({productos}) => {
    
    return (
        <>
        {productos.map((producto) => (
            <Item key={producto.id} producto={producto} stock={5} />
        ))}
        </>
    )

}

export default ItemList
