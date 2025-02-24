const express = require("express");
const { read } = require("./controller.js");
// const uploadImage = require("../middleware/uploadImage.js");
const router = express.Router();

router.get("/produk", read);

module.exports = router;