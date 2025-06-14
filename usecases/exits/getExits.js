const Exit = require("../../models/Exit");

const getExits = async () => {
  const exits = await Exit.find()
    .populate('product', 'name category')
    .populate('user', 'name')
    .sort({ date: -1 });

  return exits;
};

module.exports = getExits;
