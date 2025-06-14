const registerEntry = require("../usecases/entries/registerEntry");
const getEntries = require("../usecases/entries/getEntries");

const createEntry = async (req, res, next) => {
  try {
    console.log('[ENTRY CONTROLLER]', {
      body: req.body,
      user: req.user,
    });

    const { productId, quantity, note } = req.body;

    const entry = await registerEntry({
      productId,
      quantity,
      userId: req.user.id,
      note,
    });

    res.status(201).json(entry);
  } catch (err) {
    console.error('❌ Error al registrar entrada:', err.message);
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
