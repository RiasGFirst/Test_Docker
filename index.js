const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 8080;


app.get('/', (req, res) => {
    const configFilePath = path.resolve(__dirname, 'config/' + (process.env.NODE_ENV || 'development') + '.json');
    let config;
    try {
        config = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));
    } catch (e) {
        console.error('Error reading config file', e);
    }

    res.send(`Hello ${process.env.NAME || "Anonymous"} on ${config.title || 'Default Title'}!`);
});

app.listen(port, () => {
    console.log(`Test App listening at http://localhost:${port}`);
    // List all files in the current directory and config directory

    fs.readdir(__dirname, (err, files) => {
        if (err) {
            return;
        }
        console.log('Files in current directory:', files);
    });

    fs.readdir(path.resolve(__dirname, 'config'), (err, files) => {
        if (err) {
            return;
        }
        console.log('Files in config directory:', files);
    });

});