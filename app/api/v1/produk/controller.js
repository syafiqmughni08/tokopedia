const modelProduk = require("./model.js")

const createProduk = async (req, res) => {
    try {
        const { foto_produk, nama_produk, harga_awal, harga_sekarang, deskripsi, text_gratis_ongkir, text_cod } = req.body;
        const urlFoto = `http://localhost:3000/uploads/${req.file.filename}`;

        const produkBaru = await modelProduk.create({
            foto_produk: urlFoto,
            nama_produk,
            harga_awal,
            harga_sekarang,
            deskripsi,
            text_gratis_ongkir,
            text_cod
        });
  
        res.status(201).json({
            message: "Produk berhasil ditambahkan",
            data: produkBaru,
        });
    } catch (error) {
        res.status(500).json({ 
            error: error.message 
        });
    }
  };

const read = async (req, res) => {
    try {
        const produk = await modelProduk.findAll();
    
        res.json({
        status: 200,
        message: "Data Produk",
        data: produk,
        });
    } catch (error) {
        res.json({
        status: 500,
        message: error.message,
        });
    }
}


module.exports = {
    read,
    createProduk
}