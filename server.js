const dotenv = require('dotenv').config().parsed
const http = require('http');
const app = require('./app');

const server = http.createServer(app).listen(dotenv.SERVER_PORT);

console.log(`Home API Started on port ${dotenv.SERVER_PORT}`);