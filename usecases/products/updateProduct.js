const Product = require('../../models/Product');

const updateProduct = async (productId, data) => {
  const product = await Product.findByIdAndUpdate(productId, data, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    throw new Error('Producto no encontrado');
  }

  return product;
};

module.exports = updateProduct;
