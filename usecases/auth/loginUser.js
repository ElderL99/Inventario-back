const User = require('../../models/User')
const jwt = require('jsonwebtoken')

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email })

  if (!user || !(await user.matchPassword(password))) {
    throw new Error('Credenciales inválidas')
  }

  const token = jwt.sign(
  {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
)
  return {
    token, 
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    }

    
  }

 
}

module.exports = loginUser
