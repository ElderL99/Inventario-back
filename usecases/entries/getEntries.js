const Entry = require("../../models/Entry");

const getEntries = async () => {
  const entries = await Entry.find().populate("product").populate("user");
  return entries;
};

module.exports = getEntries;
