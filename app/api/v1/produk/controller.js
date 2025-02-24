const modelProduk = require("./model.js")

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
    read
}