var Product = require('./productModel');
var _ = require('lodash');
var mongoose = require('mongoose');

exports.params = function(req,res,next,id){
    Product.findById(mongoose.Types.ObjectId(id))
    .populate('categories')
    .exec()
    .then(function(prod){
        if(!prod){
            next(new Error('No product with that id'));
        }else{
            req.prod = prod;
            next();
        }
    },function(err){
        next(err);
    });
};

exports.get = function(req,res,next){
    Product.find({})
    .populate('categories')
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

exports.delete = function(req,res,next){
    req.prod.remove(function(err,removed){
        if(err){
            next(err);
        }else{
            res.json(removed);
        }
    });
};