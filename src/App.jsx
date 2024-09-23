import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import RequestBuilder from './Components/Api/RequestBuilder/RequestBuilder';
import Navigation from './Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
    const [cartResponse, setCartResponse] = useState(null);
    const [productsResponse, setProductsResponse] = useState(null);

    //Solve problem with duplicated api calls 
    let fakestoreProductsApiResponse = RequestBuilder('https://fakestoreapi.com/products');
    let fakestoreCartApiResponse = RequestBuilder('https://fakestoreapi.com/carts/5');

    console.log(fakestoreProductsApiResponse);
    console.log(fakestoreCartApiResponse);

    function updateCartResponse(updatedCartResponse) {
        setCartResponse(updatedCartResponse);
    }

    return (
        <>
            <div className="body-container">
                <Navigation cartResponse={ cartResponse === null ? fakestoreCartApiResponse : cartResponse } updateCartResponse={ updateCartResponse }/>
                <Outlet cartResponse={ cartResponse === null ? fakestoreCartApiResponse : cartResponse } updateCartResponse={ updateCartResponse } productsResponse={productsResponse === null ? fakestoreProductsApiResponse : productsResponse}/>
                <Footer />
            </div>
        </>
    );
}

App.propTypes;
export default App;