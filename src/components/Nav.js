import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {UseCartContext} from './Context'
import { useEffect } from "react/cjs/react.development";

function Nav () {

    const {cart} = UseCartContext()
    
    useEffect(() => {
        const totalInCart = document.querySelector('.cart_widget-total');
        if (cart.length > 0) {
            totalInCart.style.display = "block"
        } else {
            totalInCart.style.display = "none"
        }
    })

    return (
        <nav>
            <ul>
                <li><Link to="/">Candles</Link></li>
                <li><Link to="/category/winter">Winter Sale</Link></li>
                <li><Link to="/category/summer">Summer sale</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">
                    <div className="cart_widget">
                        <div className="cart_widget-total">{cart.length}</div>
                        <CartWidget></CartWidget>
                    </div>
                    </Link></li>
            </ul>
        </nav>
    )
}

export default Nav
