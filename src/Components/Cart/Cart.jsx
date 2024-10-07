import './Cart.css'; 
import { useState } from 'react';
import CartSection from './CartSection/CartSection';
import { useOutletContext } from 'react-router-dom';

function Cart() {
    const context = useOutletContext();
    console.log(context);
    const { data, error, loading } = context || {};
    const [cartResponse, setCartResponse] = useState({ data, error, loading });

    function updateCartResponse(updatedCartResponse) {
        setCartResponse(updatedCartResponse);
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="body-container">
                <CartSection cartResponse={cartResponse} updateCartResponse={updateCartResponse} />
            </div>
        </>
    );
}

export default Cart;