const Product = require('../../models/Product');

const createProduct = async (data) => {
  const { name, quantity } = data;

  
  if (!name || typeof name !== 'string') {
    throw new Error('El nombre del producto es obligatorio');
  }

  if (typeof quantity !== 'number' || quantity < 0) {
    throw new Error('La cantidad debe ser un número mayor o igual a 0');
  }

  const product = await Product.create(data);
  return product;
};

module.exports = createProduct;
