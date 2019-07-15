const http  = require('http');

function requestListener(req,res){
  console.log(req, res)  
}

const server = http.createServer(requestListener);  

server.listen(1000)