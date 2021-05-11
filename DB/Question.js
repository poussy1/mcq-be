const mongoose = require('mongoose');
const question = new mongoose.Schema({
    questionText:{
        type:String
    }
});

module.exports = Question = mongoose.model('question',question);
