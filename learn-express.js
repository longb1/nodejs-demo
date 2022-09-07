const { render } = require('ejs');
const express = require('express')
const mongoose = require('mongoose')
const app = express();

const blogRoutes = require('./routes/blogRoutes.js')

const dbURI= "mongodb+srv://testuser:password1234@cluster0.hieyt66.mongodb.net/node-tuts?retryWrites=true&w=majority"
mongoose.connect(dbURI).then((result)=>{
    app.listen(3000); //listen for requests after database connected
}).catch((err)=>{
    console.log(err)
})

//register view engine
app.set('view engine','ejs')

//middle wareexpose public files (static content)
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

//routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
})

app.get('/jim',(req,res)=>{
    res.render('jim')
})
app.get('/john',(req,res)=>{
    res.render('john')
})

//blog routes

app.use('/blogs',blogRoutes)

//404 (always at bottom of file)
app.use((req,res)=>{
    res.status(404).render('404error')
})