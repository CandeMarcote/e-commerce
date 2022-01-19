import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {UseCartContext} from './Context'

function Nav () {

    const {cart} = UseCartContext()

    return (
        <nav>
            <ul>
                <li><Link to="/">Candles</Link></li>
                <li><Link to="/category/winter">Winter Sale</Link></li>
                <li><Link to="/category/summer">Summer sale</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">
                    <div className="cart_widget">
                        <CartWidget></CartWidget>
                        <div className="cart_widget-total">{cart.length}</div>
                    </div>
                    </Link></li>
            </ul>
        </nav>
    )
}

export default Nav
