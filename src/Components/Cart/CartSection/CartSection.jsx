import './CartSection.css';

function CartSection({ productItemData }) {
    let productsLength = productItemData.data;

    // if (productItemData.data.products ?? false) {
    //     console.log("true");
    // } else {
    //     console.log("false");
    // }

    console.log(productsLength);

    return (
        <>
            <h1>Cart</h1>

            <div className="product-items-container">
            
            </div>
        </>
    );
}

export default CartSection;