var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    price: {
        type: Schema.Types.Decimal128
    },

    category: [{
        type: Schema.Types.ObjectId, ref: 'category'
    }]
});

module.exports = mongoose.model('products',productSchema);