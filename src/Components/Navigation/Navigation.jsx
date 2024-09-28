import { Link } from 'react-router-dom';
import './Navigation.css';
import { IoCart } from "react-icons/io5";

function Navigation({ cartResponse }) {

    return (
        <>
            <div className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>

                <div className="add-to-cart-button-container">
                    <Link to="cart" className="add-to-cart-button">
                        <IoCart/>
                        <p>{cartResponse}</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

Navigation.propTypes;
export default Navigation;