const express = require('express');
const app = express();
app.get('/', function(req, res) {
    const name = req.query.name;
    res.send(`Hello ${name}!`);
});
