const express = require('express');
const router = express.Router();
const { loginUser, getMe, registerUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const allowRoles = require('../middleware/roleMiddleware');


router.post('/login', loginUser);
router.get('/me', authMiddleware, getMe);
router.post('/register', authMiddleware, allowRoles("admin"), registerUser);


module.exports = router;
