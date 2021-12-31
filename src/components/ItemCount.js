// import { useState } from "react";

// const ItemCount = ({initial, stock}) => {
    
//     //const resultado = useState(0)
//     //const contador = resultado[=]
//     //cnost setContador = resultad[1]
    
//     const [contador, setContador] = useState(initial=1)
//     // const[toggle, setToggle] = useState(false)
//     //let contador = 0

//     const aumentarContador = () => {
//         if (contador <= stock - 1) {
//             //contador++
//             //contador += 1
//             // contador = contador +1
//             setContador(contador + 1)
            
//             // console.log(contador)
//         }
//     }

//     const disminuirContador = () => {
//         if (contador > 1) {
//             setContador(contador - 1)
//         }
//     }

//     const resetContador = () => {
//         setContador(1)
//     }

//     return (
//         <div>
//             <p>Amount : {contador} </p>
//             <button onClick={disminuirContador}>-</button>
//             <button onClick={resetContador}>reset</button>
//             <button onClick={aumentarContador}>+</button>
//         </div>
//     )
// }

// export default ItemCount


import { useState } from "react"


const ItemCount = ({ initial = 1, stock = 6 }) => {

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
        <div className="itemCount">
            <p>Amount : {contador} </p>
            <button className="itemBtn" onClick={aumentarContador}>+</button>
            <button className="itemBtn" onClick={resetContador}>reset</button>
            <button className="itemBtn" onClick={disminuirContador}>-</button>
        </div>
    )
}

export default ItemCount