const http = require('http')
const fs = require('fs')

const poop = http.createServer((req,res)=>{

    //set header content type
    res.setHeader('Content-type','text/html')

    let path = './'

    switch(req.url){
        case '/':
            path += 'jim.html';
            res.statusCode=200;
            break;
        case '/john':
            path += 'john.html';
            res.statusCode=200;
            break;
        case '/about-john':
            res.statusCode=301;
            res.setHeader('Location','/john')
            res.end();
            break;
        default:
            path += '404error.html';
            res.statusCode=404;
            break;

    }


    //write content to send back to browser (this returns html file)
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err)
            res.end()
        } else{
            //ending response which initiates the send back to browser
            //if you only have 1 thing to write then use res.end as res.write
            res.end(data)
        }
    })

})

poop.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
})

