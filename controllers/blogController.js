// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog.js')

function blog_index(req,res){
    Blog.find().then((result)=>{

        res.render('index',{name:'Paul Doe',works:result})
    
    }).catch((err)=>{
        console.log(err)
    })
}

function blog_details(req,res){
    const id = req.params.id;
    Blog.findById(id).then(result=>{
        res.render('details',{works:result,title:'Blog Details'});
    }).catch(err=>{
        console.log(err)
    })
}

function blog_create_get(req,res){
    res.render('forms')
}

function blog_create_post(req,res){
    const blog = new Blog(req.body);

    blog.save().then((result)=>{
        res.redirect('/blogs')
    }).catch((err)=>{
        console.log(err)
    })
}

function blog_delete(req,res){
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/blogs'})
    })
    .catch(err=>{console.log(err)})
}

module.exports={
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}