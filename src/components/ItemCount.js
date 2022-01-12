import { useState } from "react"
// import CartButton from "./CartButton"


const ItemCount = ({ initial = 1, stock, onAdd }) => {

    //const resultado = useState(0)
    //const contador = resultado[=]
    //cnost setContador = resultad[1]
    
    const [contador, setContador] = useState(initial)
    // const[toggle, setToggle] = useState(false)
    //let contador = 0
    
    const aumentarContador = () => {
        if (contador <= stock - 1) {
            //contador++
            //contador += 1
            // contador = contador +1
            setContador(contador + 1)
            
            // console.log(contador)
        }
    }

    const disminuirContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const resetContador = () => {
        setContador(1)
    }

    const confirmQuantity = () => {
        console.log(`Confirm quantity: ${contador}`)
        onAdd(contador)
    }

    return (
        <div className="itemCount">
            <p>Amount : {contador} </p>
            <button className="itemBtn" onClick={aumentarContador}>+</button>
            <button className="itemBtn" onClick={resetContador}>reset</button>
            <button className="itemBtn" onClick={disminuirContador}>-</button>
            <div className="cartButtonContainer">
                <button className="cartButton" onClick={confirmQuantity}>Add to Cart!</button>
            </div>
        </div>
    )
}

export default ItemCount