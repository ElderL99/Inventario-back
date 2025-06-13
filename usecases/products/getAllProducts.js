const Product = require('../../models/Product');

const getAllProducts = async () => {
  const products = await Product.find().sort({ createdAt: -1 });
  return products;
};

module.exports = getAllProducts;
