var category = require('./categoryModel');

exports.get = function(req,res,next){
    category.find({})
    .exec()
    .then(function(cat){
        res.json(cat);
    },function(err){
        next(err);
    });
};

exports.post = function(req,res,next){
   var newCat = new category(req.body);
   newCat.save(function(err,cat){
    if(err) { return next(err);}
    res.json(cat);
   });
};