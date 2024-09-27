import RequestBuilder from '../Api/RequestBuilder/RequestBuilder';

const ProductExtractor = (cartData) => {
    let fakestoreProductsApiResponse = RequestBuilder('https://fakestoreapi.com/products');

    let filteredProducts = [];
    let filteredCartProductsId = []; 
    let filteredCartProductData = [];

    if (cartData !== null) {
        for(let i = 0; i < cartData.products.length; i++) {
            filteredCartProductsId.push(cartData.products[i].productId);
            filteredCartProductData.push([cartData.products[i].productId ,cartData.products[i].quantity]);
        }

        for(let i = 0; i < fakestoreProductsApiResponse.data.length; i++) {
            if (checkIfCartProductsIdIsAvailable(filteredCartProductsId ,fakestoreProductsApiResponse.data[i])) {
                let productItem = expandProductItemWithQuantity(fakestoreProductsApiResponse.data[i], filteredCartProductData);
                filteredProducts.push(productItem);
            }
        }
    }

    console.log(filteredProducts);
    return filteredProducts;
}

function expandProductItemWithQuantity(productItem, productsData) {
    let productIdKey = 0;
    let productQuantityKey = 1;

    for (let i = 0; i < productsData.length; i++) {
        if (productItem.id === productsData[i][productIdKey]) {
            productItem.quantity = productsData[i][productQuantityKey]

            return productItem;
        }
    }
}

function checkIfCartProductsIdIsAvailable(filteredCartProductsId, product) {
    for(let i = 0; i < filteredCartProductsId.length; i++) {
        if(product.id === filteredCartProductsId[i]) {
            return true;
        }
    }

    return false;
}

export default ProductExtractor;