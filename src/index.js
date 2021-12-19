// traigo la libreria react. Tener a react en scope
// import react from 'react';
// tambien puede ser const React = require('react')

//tener a ReactDOM en scope
import ReactDOM from 'react-dom';

/*importamos la funcion que vamos a correr, que esta en el archivo App.js o App.jsx (no cierra mucho el .jsx, todo el mundo usa .js)*/
import App from "./App.js" //(no es necesario el .js, se puede obviar)

//Importamos el CSS
import './style.scss'
//esta funcion renderiza todo en el browser. El parametro a es una aplicacion de react y el b es el lugar donde queres que esa app se termine viendo. Muestra todo en el DOM.
/*En teoria podria mostrarse en el body o div pero por documentacion de React y buena practica NUNCA se muestra en el body (por regla de react, pero deberia funcionar igual)  */
ReactDOM.render(<App/>,document.getElementById('root'));