import CartWidget from "./CartWidget"

function Nav () {
    return (
        <nav>
            <ul>
                <li><a href="#">Candles</a></li>
                <li><a href="#">Accesories</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact</a></li>
                <li><CartWidget></CartWidget></li>
            </ul>
        </nav>
    )
}

export default Nav
