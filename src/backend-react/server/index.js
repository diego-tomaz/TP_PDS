const express = require("express");
const db = require('./queries')

const PORT = process.env.PORT || 3001;

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.get('/users', db.getUsers)
app.get('/products', db.getProducts)
app.get('/stock', db.getStockProducts)
app.get('/order_requested', db.getOrders)
app.post('/addProducts', db.addProduct)
app.post('/addStock', db.addStockProduct)
app.post('/addOrders', db.addOrder)
app.put('/products/:sku', db.updateProduct)
app.put('/stock/:id', db.updateStockProduct)
app.put('/orders/:id', db.updateOrder)
app.delete('/products/:sku', db.deleteProduct)
app.delete('/stock/:id', db.deleteStockProduct)
app.delete('/orders/:id', db.deleteOrder)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

