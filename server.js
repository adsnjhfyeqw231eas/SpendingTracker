/*
var util= require('util');
var encoder = new util.TextEncoder('utf-8');
*/

const http = require('http');
const app = require('./app');

port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, function(){
    console.log("server started at http://localhost:"+port)
});
