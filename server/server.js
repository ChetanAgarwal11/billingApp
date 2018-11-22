var express = require('express');
var api = require('./api/api');
var config = require('./config/config');
var mongoose = require('mongoose');

//db connection
mongoose.connect(config.url, {useNewUrlParser: true , useCreateIndex: true});

var app = express();

require('./middleware/middleware')(app);

app.use('/api/',api);

api.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('Oops');
});

app.listen(config.port,function(){
    console.log('server listening at port :' , config.port);
})