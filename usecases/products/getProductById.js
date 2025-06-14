const Product = require("../../models/Product");

const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw new Error("Producto no encontrado");
  return product;
};

module.exports = getProductById;
