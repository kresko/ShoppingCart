import ProductExtractor from '../../Extractor/ProductExtractor';
import Product from '../../Product/Product';
import './CartSection.css';

function CartSection({ cartResponse, updateCartResponse }) {
    //Api call
    let productsResponse = ProductExtractor(cartResponse.data);
    
    return (
        <>
            <h1 className='cart-section-title'>Cart Section</h1>

            <div className="product-items-container">
                {Object.entries(productsResponse).map(([key, value]) => (
                    <Product key={key} productItem={value} updateCartResponse={updateCartResponse}/>
                ))}
            </div>
        </>
    );
}

CartSection.propTypes;
export default CartSection;