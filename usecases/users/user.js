const User = require('../../models/User')


exports.getUsersUseCase = async () => {
  const users = await User.find({}, '-password')
  return users
}

exports.createUserUseCase = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email })
  if (existing) throw new Error('Ya existe un usuario con ese email')

  const newUser = new User({ name, email, password, role: role || 'user' })
  await newUser.save()

  return { message: 'Usuario creado correctamente' }
}


exports.updateUserRoleUseCase = async (id, role) => {
  await User.findByIdAndUpdate(id, { role })
  return { message: 'Rol actualizado correctamente' }
}

exports.deleteUserUseCase = async (id) => {
  await User.findByIdAndDelete(id)
  return { message: 'Usuario eliminado correctamente' }
}


