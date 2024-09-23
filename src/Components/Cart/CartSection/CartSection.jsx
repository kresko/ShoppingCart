import './CartSection.css';

function CartSection({ cartResponse, productsResponse }) {
    
    console.log(cartResponse);
    console.log(productsResponse);

    return (
        <>
            <h1>Cart</h1>

            <div className="product-items-container">
            
            </div>
        </>
    );
}

export default CartSection;