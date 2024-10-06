const ProductQuantityChecker = (productItem, cartResponse) => {
    for (let i = 0; i < cartResponse.data.products.length; i++) {
        if (productItem.id === cartResponse.data.products[i].productId) {
            cartResponse.data.products[i].quantity = productItem.quantity;
            cartResponse.data.isSavedToState = true;

            return cartResponse;
        }
    }
}

ProductQuantityChecker.propTypes;
export default ProductQuantityChecker;