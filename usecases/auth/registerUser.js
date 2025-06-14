const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password);

const registerUser = async ({ name, email, password }) => {
  if (!validateEmail(email)) {
    throw new Error("Correo inválido");
  }

  if (!validatePassword(password)) {
    throw new Error("La contraseña debe tener al menos 6 caracteres, una mayúscula y un símbolo");
  }

  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("Ya existe un usuario con ese correo");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "user"
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};

module.exports = registerUser;
