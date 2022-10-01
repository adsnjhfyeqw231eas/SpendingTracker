const http = require('http');
const app = require('./app');

port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, function(){
    console.log("server started at http://localhost:"+port)
});
