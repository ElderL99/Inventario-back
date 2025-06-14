const Entry = require("../../models/Entry");
const Product = require("../../models/Product");

const registerEntry = async ({ productId, quantity, userId, note }) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Producto no encontrado");

  if (quantity <= 0) {
    throw new Error("La cantidad debe ser mayor a 0");
  }

  const entry = await Entry.create({
    product: productId,
    quantity,
    user: userId,
    note: note || "",
  });

  product.quantity += quantity;
  product.status = product.quantity > 0 ? "disponible" : "no disponible";
  await product.save();

  return entry;
};

module.exports = registerEntry;
