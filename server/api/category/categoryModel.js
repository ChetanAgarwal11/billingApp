var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    slab: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('categories',categorySchema);