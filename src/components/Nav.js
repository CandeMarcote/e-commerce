import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {UseCartContext} from './Context'
import { useEffect } from "react";
import { useLocation } from "react-router-dom"

function Nav () {
    const location = useLocation();

    const {cart} = UseCartContext();
    
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
            <label id="responsive_navbar_container" htmlFor="navbar_checkbox"><div id="responsive_navbar"></div></label>
            <input type="checkbox" id="navbar_checkbox" />
            <ul>
                <li><Link to="/">{location.pathname === "/" ? <p style={{textDecoration: "underline"}}>Candles</p> : <p>Candles</p>}</Link></li>
                <li><Link to="/category/summer">{location.pathname === "/category/summer" ? <p style={{textDecoration: "underline"}}>Summer sale</p> : <p>Summer sale</p>}</Link></li>
                <li><Link to="/category/winter">{location.pathname === "/category/winter" ? <p style={{textDecoration: "underline"}}>Winter sale</p> : <p>Winter sale</p>}</Link></li>
                {/* <li><Link to="/contact">Contact</Link></li> */}
                <li><Link to="/cart">
                    <div className="cart_widget">
                        <div className="cart_widget-total">{cart ? cart.length : " "}</div>
                        <CartWidget></CartWidget>
                    </div>
                    </Link></li>
            </ul>
        </nav>
    )
}

export default Nav
