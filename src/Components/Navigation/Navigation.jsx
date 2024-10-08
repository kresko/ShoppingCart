import { Link } from 'react-router-dom';
import './Navigation.css';
import { IoCart } from "react-icons/io5";
import CartQuantityExtractor from '../Extractor/CartQuantityExtractor';
import { useState, useEffect } from 'react';
import Glossary from '../../Data/Glossary';

function Navigation({ cartData }) {
     const [updatedCartQuantity, setUpdatedCartQuantity] = useState(0);

     useEffect(() => {
        if (cartData && cartData.data && cartData.data.products) {
            const newQuantity = CartQuantityExtractor(cartData);
            setUpdatedCartQuantity(newQuantity);
        }
    }, [cartData]);

    return (
        <>
            <div className="navigation">
                <ul>
                    <li><Link to="/">{Glossary.navigation.links.home}</Link></li>
                </ul>

                <div className="add-to-cart-button-container">
                    <Link to="cart" className="add-to-cart-button">
                        <IoCart/>
                    </Link>
                    <span className='cart-quantity'>{updatedCartQuantity}</span>
                </div>
            </div>
        </>
    );
}

Navigation.propTypes;
export default Navigation;