const Message = require("../models/message.js")

exports.index = (req,res)=>{
    Message.find()
        .then((result)=>{
            res.render('index', { title: 'poo',messages:result});

        })
        .catch((err)=>{console.log(err)})

}

exports.message_create = (req,res)=>{
    res.render('form');
}

exports.message_upload = (req,res)=>{
    const message = new Message({
        user:req.body.fname,
        text:req.body.message
    })
    message.save()
        .then((result)=>{res.send(result)})
        .catch((err)=>{
            console.log(err)
        });
    res.redirect('/')
}