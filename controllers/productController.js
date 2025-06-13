const createProductUseCase = require('../usecases/products/createProduct');

const createProduct = async (req, res) => {
  try {
    const product = await createProductUseCase(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
};
