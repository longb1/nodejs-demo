var express = require('express');
var router = express.Router();

// Require controller modules.
const msg_controller = require("../controllers/msgController.js");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'poo',messages});
});

// form route
router.get('/new', function(req, res, next) {
  msg_controller.message_upload
});

router.post('/new',function(req,res,next){
  const name = req.body.fname
  const text = req.body.message
  messages.push({text: text, user: name, added: new Date()});
  res.redirect('/')
})

module.exports = router;
