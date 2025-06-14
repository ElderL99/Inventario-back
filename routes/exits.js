const express = require("express");
const router = express.Router();
const { createExit, fetchExits } = require("../controllers/exitController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createExit);
router.get("/", authMiddleware, fetchExits);

module.exports = router;
