// http module handle all API , it handle request and response package
const http=require('http');
const data = require('./data');
http.createServer((req, resp)=>{

    resp.writeHead(200, {'content-Type':'application\json'}); // for sending data in this there are two parameters responce code and data
    // in this 200 is nothing but api status which can be change by need
    resp.write(JSON.stringify(data));
    resp.end(); // 
}).listen(2000) 