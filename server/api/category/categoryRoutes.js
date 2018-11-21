var router = require('express').Router();
var controller = require('./categoryController');

router.route('/')
    .get(function(req,res){
        res.send();
    })
    .post(controller.post)

module.exports = router;