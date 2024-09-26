import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function App() {
    const [cartResponse, setCartResponse] = useState(null);

    function updateCartResponse(updatedCartResponse) {
        setCartResponse(updatedCartResponse);
    }

    return (
        <>
            <div className="body-container">
                <Navigation updateCartResponse={ updateCartResponse }/>
                <Outlet 
                    context={{
                        updateCartResponse: updateCartResponse
                    }}
                />
                <Footer />
            </div>
        </>
    );
}

App.propTypes;
export default App;