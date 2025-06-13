const User = require('../../models/User');

const getMe = async (id) => {
  const user = await User.findById(id).select('-password');
  return user;
};

module.exports = getMe;
