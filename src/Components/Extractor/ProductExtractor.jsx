import RequestBuilder from '../Api/RequestBuilder/RequestBuilder';

async function ProductExtractor(products) {
    let fakestoreProductsApiResponse = await RequestBuilder('https://fakestoreapi.com/products');

    console.log(products);
    console.log(fakestoreProductsApiResponse);
}

export default ProductExtractor;