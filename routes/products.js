const express = require('express');
const router = express.Router();
const { createProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const { getAllProducts } = require('../controllers/productController');

router.post('/', authMiddleware, createProduct);
router.get('/', authMiddleware, getAllProducts);


module.exports = router;
