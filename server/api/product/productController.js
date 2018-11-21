var Product = require('./productModel');
var _ = require('lodash');

exports.get = function(req,res,next){
    Product.find({})
    .populate('category')
    .exec()
    .then(function(products){
        res.json(products);
    }, function(err){
        next(err);
    });
};

exports.post = function(req,res,next){
    var newProd = new Product(req.body);
    newProd.save(function(err,prod){
        if(err){return next(err);}
        res.json(prod);
    });
};