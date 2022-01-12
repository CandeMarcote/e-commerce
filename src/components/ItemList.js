import Item from "./Item"

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
