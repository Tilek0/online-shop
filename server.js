const express = require('express');
const serveStatic = require('serve-static')
const path = require('path');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()
const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')));
const port = process.env.PORT || 3000;

server.use(middlewares)
server.use(router)
app.listen(port);
console.log('Listening on port' + port)