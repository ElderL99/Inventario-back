const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  searchProducts,
  fetchProductById
} = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createProduct);
router.get('/', authMiddleware, getAllProducts);
router.delete('/:id', authMiddleware, deleteProduct);
router.put('/:id', authMiddleware, updateProduct);
router.get('/search', authMiddleware, searchProducts);
router.get("/:id", authMiddleware, fetchProductById);



module.exports = router;
