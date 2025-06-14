const createProductUseCase = require('../usecases/products/createProduct');
const getAllProductsUseCase = require('../usecases/products/getAllProducts');
const updateProductUseCase = require('../usecases/products/updateProduct');
const deleteProductUseCase = require('../usecases/products/deleteProduct');
const searchProductsUseCase = require('../usecases/products/searchProducts');
const getProductById = require("../usecases/products/getProductById");

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

const fetchProductById = async (req, res, next) => {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};


const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteProductUseCase(id);
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await updateProductUseCase(id, req.body);
    res.json(updated);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



const searchProducts = async (req, res) => {
  try {
    const results = await searchProductsUseCase(req.query);
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar productos' });
  }
};


module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  searchProducts,
  fetchProductById,

};
