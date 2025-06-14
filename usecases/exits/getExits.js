const Exit = require("../../models/Exit");

const getExits = async () => {
  const exits = await Exit.find().populate("product").populate("user");
  return exits;
};

module.exports = getExits;