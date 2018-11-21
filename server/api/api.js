var router = require('express').Router();

router.use('/products', require('./product/productRoutes'));
router.use('/categories', require('./category/categoryRoutes'));

module.exports = router;
