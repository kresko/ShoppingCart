import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './Cart.css'
import CartSection from './CartSection/CartSection';

function Cart() {
    return (
        <>
            <div className="body-container">
                <Navigation />
                <CartSection />
                <Footer />
            </div>
        </>
    );
}

export default Cart;