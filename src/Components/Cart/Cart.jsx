import './Cart.css'
import { useState } from 'react';
import RequestBuilder from '../Api/RequestBuilder/RequestBuilder';
import CartSection from './CartSection/CartSection';

function Cart() {
    const [cartResponse, setCartResponse] = useState(null);

    function updateCartResponse(updatedCartResponse) {
        setCartResponse(updatedCartResponse);
    }

    let fakestoreCartApiResponse = RequestBuilder('https://fakestoreapi.com/carts/5');

    return (
        <>
            <div className="body-container">
                <CartSection cartResponse={cartResponse !== null ? cartResponse : fakestoreCartApiResponse} updateCartResponse={updateCartResponse} />
            </div>
        </>
    );
}

export default Cart;