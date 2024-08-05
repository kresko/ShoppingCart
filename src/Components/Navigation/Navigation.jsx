import './Navigation.css';
import { IoCart } from "react-icons/io5";


function Navigation() {
    return (
        <>
            <div className="navigation">
                <ul>
                    <li><a href="#">Home</a></li>
                </ul>

                <div className="add-to-cart-button-container">
                    <button className="add-to-cart-button"><IoCart/></button>
                </div>
            </div>
        </>
    );
}

export default Navigation;