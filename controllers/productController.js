const createProductUseCase = require('../usecases/products/createProduct');
const getAllProductsUseCase = require('../usecases/products/getAllProducts');

const createProduct = async (req, res) => {
  try {
    const product = await createProductUseCase(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsUseCase();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
};

const deleteProductUseCase = require('../usecases/products/deleteProduct');

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteProductUseCase(id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct

};
