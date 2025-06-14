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
    note: `Entrada registrada por el usuario ${userId}`,
  });

  // Aumenta el stock del producto
  product.quantity += quantity;

  // Actualiza el status según la cantidad
  product.status = product.quantity > 0 ? "disponible" : "no disponible";

  await product.save();

  return entry;
};

module.exports = registerEntry;
