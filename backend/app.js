import express from "express"
import allProduct from "./data/product.js"
import cors from "cors"

const app = express();
const port = 5000;

app.use(cors());

app.get("/produk", (req, res) => {
    res.json(allProduct);
});

app.listen(port, () => {
    console.log(`Data telah berhasil dikirim pada port ${port}`);
});