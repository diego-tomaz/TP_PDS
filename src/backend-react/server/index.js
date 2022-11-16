const express = require("express");
const db = require('./queries')

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.get('/users', db.getUsers)
app.get('/products', db.getProducts)
app.get('/stock', db.getStockProducts)
app.get('/orders', db.getOrders)
app.post('/products', db.addProduct)
app.post('/stock', db.addStockProduct)
app.post('/orders', db.addOrder)
app.put('/products/:sku', db.updateProduct)
app.put('/stock/:id', db.updateStockProduct)
app.put('/orders/:id', db.updateOrder)
app.delete('/products/:sku', db.deleteProduct)
app.delete('/stock/:id', db.deleteStockProduct)
app.delete('/orders/:id', db.deleteOrder)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

