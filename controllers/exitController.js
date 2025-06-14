const registerExit = require("../usecases/exits/registerExit");
const getExits = require("../usecases/exits/getExits");

const createExit = async (req, res, next) => {
  try {
    const { productId, quantity, note } = req.body; 

    const exit = await registerExit({
      productId,
      quantity,
      userId: req.user.id,
      note, 
    });

    res.status(201).json(exit);
  } catch (err) {
    next(err);
  }
};

const fetchExits = async (req, res, next) => {
  try {
    const exits = await getExits();
    res.json(exits);
  } catch (err) {
    next(err);
  }
};

module.exports = { createExit, fetchExits };
