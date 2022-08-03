const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer(function(req,res){
    const urlObject = url.parse(req.url,true)
    const fileName= "." + urlObject.pathname

    fs.readFile(fileName, function(err, data){

        if(err){
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end("404 Not Found")
        }

        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end();
    })
})

server.listen(9000,()=>{
    console.log("server running")
})

const reqUrl = 'http://localhost:9000/jim.html'

// const urlObject = url.parse(reqUrl,true);
// console.log(urlObject.host)
// console.log(urlObject.pathname)
// console.log(urlObject.search)

// const allSearch = urlObject.query
// console.log(`I love ${allSearch.country}`)
// let myURL = new URL('http://Example.com/', 'https://example.org/');
