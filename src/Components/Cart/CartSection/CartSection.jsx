import ProductExtractor from '../../Extractor/ProductExtractor';
import Product from '../../Product/Product';
import './CartSection.css';
import Glossary from '../../../Data/Glossary';

function CartSection({ cartResponse, updateCartResponse }) {
    let productsResponse = ProductExtractor(cartResponse.data);
    
    return (
        <>
            <h1 className='cart-section-title'>{Glossary.cart.cartSection}</h1>

            <div className="product-items-container">
                {Object.entries(productsResponse).map(([key, value]) => (
                    <Product key={key} productItem={value} updateCartResponse={updateCartResponse} cartResponse={cartResponse} />
                ))}
            </div>
        </>
    );
}

CartSection.propTypes;
export default CartSection;