var express = require('express');
var router = express.Router();

// Require controller modules.
const msg_controller = require("../controllers/msgController.js");

/* GET home page. */
router.get('/', msg_controller.index);

// form route
router.get('/new',msg_controller.message_create);

router.post('/new',msg_controller.message_upload)

module.exports = router;
