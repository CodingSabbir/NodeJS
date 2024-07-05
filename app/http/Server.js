const http = require('http');
const port =8080
const hostname='127.0.0.1'

const myServer =http.createServer((req, res) => {
    res.end('hello my dear');
}).listen(8080);


myServer.listen(port,hostname,()=>{
    console.log(`http://${hostname}:${port}`)
})