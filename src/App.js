import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Navbar></Navbar>
        </>
    )
}
// recordar que los console logs se quedan en la consola mas alla de que la pagina se recargue

// tenemos que exportar esto porque es una regla de Node. Todas las variables que pones en un archivo solo funcionan en ese archivo asi que hay que exportarlas
export default App

/*o sino tambien asi
export function App() {
    return "Hola Mundo" Import
}*/
