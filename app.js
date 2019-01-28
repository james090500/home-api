const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const ifttt = require('./routes/ifttt');

app.use('/ifttt', ifttt);

module.exports = app;
