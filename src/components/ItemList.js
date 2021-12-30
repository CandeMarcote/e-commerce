import Item from "./Item"

const ItemList = () => {
    return (
        <div className="Items__container">
            <Item id={1} price={400} title="Candle 1" pictureUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjezB7jn_AMFQOZZjWdezpTUpfUpPNsD8Tmz5o5RArS1EmsKYQLv64asnpNpsfAM9SdQ&usqp=CAU"></Item>
        </div>
    )
}

export default ItemList
