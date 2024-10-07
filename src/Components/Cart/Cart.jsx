import { useState } from 'react';
import CartSection from './CartSection/CartSection';
import { useOutletContext } from 'react-router-dom';
import Glossary from '../../Data/Glossary';

function Cart() {
    const context = useOutletContext();
    const { data, error, loading } = context || {};
    const [cartResponse, setCartResponse] = useState({ data, error, loading });

    function updateCartResponse(updatedCartResponse) {
        setCartResponse(updatedCartResponse);
    }

    if (loading) return <div>{Glossary.cart.loading}</div>;
    if (error) return <div>{Glossary.cart.error} {error.message}</div>;

    return (
        <>
            <div className="body-container">
                <CartSection cartResponse={cartResponse} updateCartResponse={updateCartResponse} />
            </div>
        </>
    );
}

export default Cart;