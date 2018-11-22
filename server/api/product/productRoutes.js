var router = require('express').Router();
var controller = require('./productController');

router.param('id',controller.params);

router.route('/')
    .get(controller.get)
    .post(controller.post)

router.route('/:id')
    .delete(controller.delete);

module.exports = router;