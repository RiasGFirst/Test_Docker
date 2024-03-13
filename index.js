const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8080;


const configFilePath = path.resolve(__dirname, 'config/');
console.log(configFilePath);
let config;

app.get('/', (req, res) => {
    const configFilePath = path.resolve(__dirname, 'config/' + (process.env.NODE_ENV || 'development') + '.json');
    let config;
    try {
        config = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
    } catch (e) {
        console.error('Error reading config file', e);
    }

    res.send(`Hello ${process.env.NAME || "Anonymous"} on ${config?.title || 'Default Title'}!`);
});

app.listen(port, () => {
    console.log(`Test App listening at http://localhost:${port}`);
});
// app.get('/', (req, res) => {
//     res.send(`Hello ${process.env.NAME || "Anonymous"}!`);
//     const configFilePath = path.resolve(__dirname, '../config/' + (process.env.NODE_ENV || 'development') + '.json');
//     let config;
// });

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });