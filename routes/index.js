var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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
  res.render('index', { title: 'poo',messages});
});

// form route
router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new',function(req,res,next){
  
})

module.exports = router;
