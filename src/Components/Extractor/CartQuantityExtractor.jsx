
function CartQuantityExtractor(cartData) {
    if (cartData.data && Array.isArray(cartData.data.products)) {
        let cartQuantity = 0;

        for (let product of cartData.data.products) {
            cartQuantity += product.quantity;
        }

        return cartQuantity;
    }

    return 0;
}

export default CartQuantityExtractor;