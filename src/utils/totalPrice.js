/**
 * The totalPrice function calculates the total price of a list of products by multiplying the price of
 * each product by its quantity and summing them up.
 * @param {Array} products - An array of objects representing products. Each object should have a "price"
 * property representing the price of the product and a "quantity" property representing the quantity
 * of the product.
 * @returns {number} The function `totalPrice` returns the total price of all products in the `products` array.
 */
const totalPrice = (products) => {
  return products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
};

export default totalPrice;
