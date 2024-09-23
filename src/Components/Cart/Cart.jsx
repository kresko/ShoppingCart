import './Cart.css'
import CartSection from './CartSection/CartSection';

function Cart({ cartResponse, productsResponse }) {
    return (
        <>
            <div className="body-container">
                <CartSection cartResponse={cartResponse} productsResponse={productsResponse}/>
            </div>
        </>
    );
}

export default Cart;