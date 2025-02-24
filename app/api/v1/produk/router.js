const express = require("express");
const { read, createProduk } = require("./controller.js");
// const uploadImage = require("../middleware/uploadImage.js");
const upload = require("../../../utils/upload.js");
const router = express.Router();

router.post("/produk/create", upload.single("foto_produk"), createProduk);
router.get("/produk", read);

module.exports = router;