const Entry = require("../../models/Entry");
const Product = require("../../models/Product");

const registerEntry = async ({ productId, quantity, userId }) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Producto no encontrado");

  // Crear la entrada
  const entry = await Entry.create({
    product: productId,
    quantity,
    user: userId,
  });

  
  // Aumenta el stock del producto
  product.quantity += quantity;
  await product.save();

  return entry;
};

module.exports = registerEntry;
