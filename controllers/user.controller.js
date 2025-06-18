const {
  getUsersUseCase,
  createUserUseCase,
  updateUserRoleUseCase,
  deleteUserUseCase
} = require('../usecases/users/user.js')
console.log('🧪 usecases cargados correctamente')

exports.getUsers = async (req, res) => {
  try {
    const users = await getUsersUseCase()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.createUser = async (req, res) => {
  try {
    const result = await createUserUseCase(req.body)
    res.status(201).json(result)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.updateUserRole = async (req, res) => {
  try {
    const { id } = req.params
    const { role } = req.body

    // 🚫 No permite que el usuario logueado se cambie a sí mismo el rol
    if (req.user._id.toString() === id) {
      return res.status(403).json({ message: 'No puedes cambiar tu propio rol' })
    }

    const result = await updateUserRoleUseCase(id, role)
    res.json(result)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params

    // 🚫 No permite que el usuario logueado se elimine a sí mismo
    if (req.user._id.toString() === id) {
      return res.status(403).json({ message: 'No puedes eliminar tu propia cuenta' })
    }

    const result = await deleteUserUseCase(id)
    res.json(result)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
