import ProductExtractor from '../../Extractor/ProductExtractor';
import './CartSection.css';

function CartSection({ cartResponse, updateCartResponse }) {
    //Api call
    console.log(cartResponse);
    let productsResponse = ProductExtractor(cartResponse.data);

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