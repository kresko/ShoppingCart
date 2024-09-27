import './Product.css';

function Product({ productItem }) {
    return (
        <>
            <div className="product-item">
                <h3>{{ productItem.title}}</h3>
            </div>
        </>
    );
}

Product.propTypes;
export default Product;