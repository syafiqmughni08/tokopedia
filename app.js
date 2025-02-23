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
//2. UPDATE = ngedit data profil / PROFIL
//3. CREATE = nambah FOTO PROFIL / PROFIL 
//4. DELETE = menghapus profil / PROFIL
//5. READ = melihat data menu lainnya / MENU
//6. READ = nampilin sesuai dengan nama_kategori / KATEGORI
//7. UPDATE = ngedit data profil / USER (ubah foto, nama, )
//8. READ = melihat data profil / USER
//9. READ = melihat daftar history / PRODUK 
//10. READ = melihat data flash sale / DISKON
