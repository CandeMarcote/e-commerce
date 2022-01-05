import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function Nav () {
    return (
        <nav>
            <ul>
                <li><Link to="/">Candles</Link></li>
                <li><Link to="/accesories">Accesories</Link></li>
                <li><Link to="/about_us">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><CartWidget></CartWidget></li>
            </ul>
        </nav>
    )
}

export default Nav
