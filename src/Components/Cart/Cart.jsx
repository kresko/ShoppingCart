import { useState } from 'react';
import RequestBuilder from '../Api/RequestBuilder/RequestBuilder';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Cart.css'
import CartSection from './CartSection/CartSection';

function Cart() {
    const [cartResponse, setCartResponse] = useState(null);
    const [productsResponse, setProductsResponse] = useState(null);

    //Solve problem with duplicated api calls 
    let fakestoreProductsApiResponse = RequestBuilder('https://fakestoreapi.com/products');
    let fakestoreCartApiResponse = RequestBuilder('https://fakestoreapi.com/carts/5');

    return (
        <>
            <div className="body-container">
                <Navigation />
                <CartSection productItemData={fakestoreCartApiResponse} />
                <Footer />
            </div>
        </>
    );
}

export default Cart;