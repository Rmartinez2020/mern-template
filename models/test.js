const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Test = new Schema({
    testing: String
});


module.exports = mongoose.model('tests', Test);