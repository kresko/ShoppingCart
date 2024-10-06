import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import RequestBuilder from './Components/Api/RequestBuilder/RequestBuilder';
import { Outlet } from 'react-router-dom';

function App() {
    const fakestoreCartApiResponse = RequestBuilder('https://fakestoreapi.com/carts/5');

    return (
        <>
            <div className="body-container">
                <Navigation cartData={fakestoreCartApiResponse}/>
                <Outlet context={fakestoreCartApiResponse} />
                <Footer />
            </div>
        </>
    );
}

App.propTypes;
export default App;