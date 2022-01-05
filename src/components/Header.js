import Nav from './Nav'
import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <Link to="/" className="header__title"><h1>The Candle Shop</h1></Link>
            <Nav />
        </header>
    )
}

export default Header