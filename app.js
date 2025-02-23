const express = require("express");
const path = require("path");
const cors = require("cors");


const app = express()
app.use(cors())
const patternAPI = "/api/v1";

app.use(express.json())

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "app/public/uploads")))


app.use(patternAPI, )
app.use(patternAPI, )
app.use(patternAPI, )

app.listen(3000, () => {
    console.log("Server is running...");
})






//1. READ = nampilin recycler view / PRODUK (field nama_produk, harga, foto_produk, deskripsi)
//2. UPDATE = ngedit data produk / PRODUK
//3. CREATE = nambah pesanan / PESANAN 
//4. DELETE = ngurangin pesanan / PESANAN
//5. READ = nampilin semua data kategori / KATEGORI
//6. UPDATE = ngedit data profil / USER (ubah foto, nama, )
//7. READ = melihat data profil / USER
//8. READ = melihat daftar history / JOIN PRODIK & PESANAN
//9. DELETE = menghapus daftar history / JOIN PRODIK & PESANAN
//10. 