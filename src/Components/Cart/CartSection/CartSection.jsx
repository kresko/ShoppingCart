import ProductExtractor from '../../Extractor/ProductExtractor';
import './CartSection.css';

function CartSection({ cartResponse, updateCartResponse }) {
    //Api call
    let productsResponse = ProductExtractor(cartResponse.data);
    console.log(typeof productsResponse);
    
    return (
        <>
            <h1>Cart</h1>

            <div className="product-items-container">
                
            </div>
        </>
    );
}

CartSection.propTypes;
export default CartSection;