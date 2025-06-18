const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller.js')
const authMiddleware = require('../middleware/authMiddleware')
const allowRoles = require('../middleware/roleMiddleware')

// Solo admin puede acceder a estas rutas
router.use(authMiddleware)
router.use(allowRoles('admin'))

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.patch('/:id', userController.updateUserRole)
router.delete('/:id', userController.deleteUser)

module.exports = router
