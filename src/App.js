import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from "react-router-dom";
import CartProvider from './components/Context';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}
// recordar que los console logs se quedan en la consola mas alla de que la pagina se recargue

// tenemos que exportar esto porque es una regla de Node. Todas las variables que pones en un archivo solo funcionan en ese archivo asi que hay que exportarlas
export default App

/*o sino tambien asi
export function App() {
    return "Hola Mundo" Import
}*/
