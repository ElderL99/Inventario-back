const Exit = require("../../models/Exit");
const Product = require("../../models/Product");

const registerExit = async ({ productId, quantity, userId, note }) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Producto no encontrado");

  if (quantity <= 0) {
    throw new Error("La cantidad debe ser mayor a 0");
  }

  if (product.quantity < quantity) {
    throw new Error("Stock insuficiente para realizar la salida");
  }

  const exit = await Exit.create({
    product: productId,
    quantity,
    user: userId,
    note: note || "",
  });

  product.quantity -= quantity;
  product.status = product.quantity > 0 ? "disponible" : "no disponible";
  await product.save();

  return exit;
};

module.exports = registerExit;
