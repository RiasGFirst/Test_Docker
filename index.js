// Build a simple express server
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(`Hello ${process.env.NAME || "Anonymous"}!`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});