import { useState } from "react";

const ItemCount = ({greeting, initial, stock}) => {
    

    greeting = "hello!"
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

    return (
        <div>
            <p>Amount : {contador} </p>
            <button onClick={aumentarContador}>+</button>
            <button onClick={resetContador}>reset</button>
            <button onClick={disminuirContador}>-</button>
        </div>
    )
}

export default ItemCount