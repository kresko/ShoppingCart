import './Cart.css'
import { useOutletContext } from 'react-router-dom';
import RequestBuilder from '../Api/RequestBuilder/RequestBuilder';
import CartSection from './CartSection/CartSection';

function Cart() {
    const { updateCartResponse, cartResponse } = useOutletContext();
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