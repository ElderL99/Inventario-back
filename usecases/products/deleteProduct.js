const Product = require('../../models/Product');

const deleteProduct = async (productId) => {
  const product = await Product.findByIdAndDelete(productId);

  if (!product) {
    throw new Error('Producto no encontrado');
  }

  return { message: 'Producto eliminado correctamente' };
};

module.exports = deleteProduct;
