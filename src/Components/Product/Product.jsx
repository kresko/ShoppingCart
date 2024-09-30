import './Product.css';

const Product = ({ productItem, updateResponse, cartResponse }) => {
    function addTocart() {
        
    }

    function removeFromCart() {

    }

    console.log(cartResponse);

    return (
        <>
            <div className="product-item">
                <div className="img-container">
                    <img src={productItem.image} />
                </div>
                 <div className="product-data">
                    <div className="product-info">
                        <h3 className='product-title'>{productItem.title}</h3>
                        <p>{productItem.description}</p>
                    </div>

                    <div className="quantity-widget">
                        <button className='quantity-increase'>+</button>
                        <span className='display-quantity'>{productItem.quantity}</span>
                        <button className='quantity-decrease'>-</button>
                    </div>
                 </div>
            </div>
        </>
    );
}

Product.propTypes;
export default Product;