const express = require('express')

const app = express();

app.listen(3000);

app.get('/',(req,res)=>{
    res.sendFile('./home.html',{root: __dirname})
})

app.get('/jim',(req,res)=>{
    res.sendFile('./jim.html',{root: __dirname})
})
app.get('/john',(req,res)=>{
    res.sendFile('./john.html',{root: __dirname})
})

//404 lways go at the bottom

app.use((req,res)=>{
    res.status(404).sendFile('./404error.html',{root:__dirname})
})