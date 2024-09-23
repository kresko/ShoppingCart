import { useState } from 'react';
import RequestBuilder from '../Api/RequestBuilder/RequestBuilder';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import HomepageSection from './HomapageSection/HomepageSection';
import './Homepage.css';

function Homepage() {
    const [cartResponse, setCartResponse] = useState(null);
    const [productsResponse, setProductsResponse] = useState(null);

    //Solve problem with duplicated api calls 
    let fakestoreProductsApiResponse = RequestBuilder('https://fakestoreapi.com/products');
    let fakestoreCartApiResponse = RequestBuilder('https://fakestoreapi.com/carts/5');

    return (
        <>
            <div className="body-container">
                <Navigation cartResponse={fakestoreCartApiResponse} />
                <HomepageSection />
                <Footer />
            </div>
        </>
    );
}

export default Homepage;