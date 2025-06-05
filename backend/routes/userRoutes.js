const express = require("express");
const router = express.Router();
const { addUser, getResidents } = require("../controllers/userController");

router.post("/", addUser);
router.get("/", getResidents);

module.exports = router;
