const loginUserUseCase = require('../usecases/auth/loginUser');
const getMeUseCase = require('../usecases/auth/getMe');
const registerUserUseCase = require("../usecases/auth/registerUser");

const registerUser = async (req, res) => {
  try {
    const result = await registerUserUseCase(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await loginUserUseCase({ email, password });
    res.json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await getMeUseCase(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuario' });
  }
};

module.exports = { loginUser, getMe , registerUser };
