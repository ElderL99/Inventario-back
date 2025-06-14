const registerEntry = require("../usecases/entries/registerEntry");
const getEntries = require("../usecases/entries/getEntries");

const createEntry = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const entry = await registerEntry({ productId, quantity, userId: req.user.id });
    res.status(201).json(entry);
  } catch (err) {
    next(err);
  }
};

const fetchEntries = async (req, res, next) => {
  try {
    const entries = await getEntries();
    res.json(entries);
  } catch (err) {
    next(err);
  }
};

module.exports = { createEntry, fetchEntries };
