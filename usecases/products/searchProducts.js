const Product = require('../../models/Product');

const searchProducts = async ({ name, category }) => {
  const query = {};

  if (name) {
    query.name = { $regex: name, $options: 'i' }; 
  }

  if (category) {
    query.category = { $regex: category, $options: 'i' };
  }

  const results = await Product.find(query);
  return results;
};

module.exports = searchProducts;
