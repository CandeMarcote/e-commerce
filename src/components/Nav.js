import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function Nav () {
    return (
        <nav>
            <ul>
                <li><Link to="/">Candles</Link></li>
                <li><Link to="/category/winter">Winter Sale</Link></li>
                <li><Link to="/category/summer">Summer sale</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><CartWidget></CartWidget></li>
            </ul>
        </nav>
    )
}

export default Nav
