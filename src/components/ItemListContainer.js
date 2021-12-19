import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <main>
            <h2>{props.greeting}</h2>
            <ItemCount />
        </main>
        
    )
}

export default ItemListContainer
