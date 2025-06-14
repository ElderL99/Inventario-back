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
const allowRoles = require('../middleware/roleMiddleware');

// Solo admin puede crear, editar o borrar
router.post('/', authMiddleware, allowRoles("admin"), createProduct);
router.put('/:id', authMiddleware, allowRoles("admin"), updateProduct);
router.delete('/:id', authMiddleware, allowRoles("admin"), deleteProduct);

// Todos los roles autenticados pueden consultar
router.get('/', authMiddleware, getAllProducts);
router.get('/search', authMiddleware, searchProducts);
router.get('/:id', authMiddleware, fetchProductById);

module.exports = router;
