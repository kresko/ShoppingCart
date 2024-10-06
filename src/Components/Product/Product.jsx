import ProductQuantityChecker from '../Checker/ProductQuantityChecker';
import { useState } from 'react';
import './Product.css';

function Product({ productItem, updateCartResponse, cartResponse }) {
    const [product, setProduct] = useState(productItem);

    function addTocart() {
        const updatedProduct = { ...product, quantity: product.quantity + 1 };

        setProduct(updatedProduct);
        updateCartResponse(ProductQuantityChecker(updatedProduct, cartResponse));
    }

    function removeFromCart() {
        const updatedProduct = { ...product, quantity: product.quantity - 1 };

        setProduct(updatedProduct);
        updateCartResponse(ProductQuantityChecker(updatedProduct, cartResponse));
    }

    return (
        <>
            <div className="product-item">
                <div className="img-container">
                    <img src={product.image} />
                </div>
                 <div className="product-data">
                    <div className="product-info">
                        <h3 className='product-title'>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>

                    <div className="quantity-widget">
                        <button className='quantity-increase' onClick={addTocart}>+</button>
                        <span className='display-quantity'>{product.quantity}</span>
                        <button className='quantity-decrease' onClick={removeFromCart}>-</button>
                    </div>
                 </div>
            </div>
        </>
    );
}

Product.propTypes;
export default Product;