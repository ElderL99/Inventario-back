const express = require("express");
const router = express.Router();
const { createEntry, fetchEntries } = require("../controllers/entryController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createEntry);
router.get("/", auth, fetchEntries);

module.exports = router;
