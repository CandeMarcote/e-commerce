
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return (
        <button className="cartBtn">
            <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    )
}

export default CartWidget


