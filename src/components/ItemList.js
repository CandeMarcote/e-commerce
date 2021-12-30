// import Item from "./Item"
import ItemListContainer from "./ItemListContainer";

const ItemList = () => {
    const listaProductos = [
        {
            id: 1,
            title: 'vela 1',
            precio: 365,
            pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGjezB7jn_AMFQOZZjWdezpTUpfUpPNsD8Tmz5o5RArS1EmsKYQLv64asnpNpsfAM9SdQ&usqp=CAU'
        },
        {
            id: 2,
            title: 'vela 2',
            precio: 850,
            pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLjYo6JNtlIX_-5uiMxn7FI9RwGB8L0qkSA&usqp=CAU'
        },
        {
            id: 3,
            title: 'vela 3',
            precio: 400,
            pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQ9tE4eJQ1RA9HX8r-Psnl6NCzfJsMdp_DA&usqp=CAU'
        }
    ];

    return (
        <div className="items__container">
            <ItemListContainer listaProductos={listaProductos} />
        </div>
    )

}

export default ItemList
