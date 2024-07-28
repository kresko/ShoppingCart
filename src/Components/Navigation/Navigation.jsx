import './Navigation.css';

function Navigation() {
    return (
        <>
            <h1>Navigation</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
            </ul>

            <div className="add-to-cart-button-container">
                <button className="add-to-cart-button">Add to cart</button>
            </div>
        </>
    );
}

export default Navigation;