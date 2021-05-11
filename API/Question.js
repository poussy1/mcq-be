const express = require('express');
const mongoose = require('mongoose');
const Question = require('../DB/Question');
const generateArrayRandomNumbers = require('../utils/helper')
const route = express.Router();

route.post('/',async (req,res)=>{
    const{questionText} = req.body;
    let question = {};
    question.questionText = questionText;
    let questionModel = new Question(question);
    await questionModel.save();
    res.json(questionModel)
})
route.get('/randomFiveQuestions', async function(req, res) {
    await Question.find({}, function(err, questions) {
       var arrayRandomIndicies = generateArrayRandomNumbers(5);
       res.json(arrayRandomIndicies.map(id=>questions[id].questionText));
    });
});
module.exports = route;