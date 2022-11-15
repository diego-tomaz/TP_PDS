const express = require("express");
const db = require('./queries')

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});


app.get('/users', db.getUsers)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

