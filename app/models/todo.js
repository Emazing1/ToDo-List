var mongoose = require('mongoose');
var toDo = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('toDo', {
    text: {
        type: String,
        default: ''
    }
});