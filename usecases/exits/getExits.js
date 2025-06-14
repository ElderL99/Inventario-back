const Entry = require("../../models/Entry");

const getEntries = async () => {
  const entries = await Entry.find()
    .populate('product', 'name category') 
    .populate('user', 'name')            
    .sort({ date: -1 })                   

  return entries;
};

module.exports = getEntries;
