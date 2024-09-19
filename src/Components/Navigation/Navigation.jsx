import { Link } from 'react-router-dom';
import './Navigation.css';
import { IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";
import RequestBuilderCart from '../Api/RequestBuilder/RequestBuilderCart';

function Navigation() {
    let test = RequestBuilderCart('https://fakestoreapi.com/carts/5');
    console.log(test);

    return (
        <>
            <div className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>

                <div className="add-to-cart-button-container">
                    <Link to="cart" className="add-to-cart-button">
                        <IoCart/>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navigation;