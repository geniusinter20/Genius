const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Exam = require('../DB/models/Exam');

const url = 'mongodb://localhost:27017/newDB';

const examRouter = express.Router();

//Middleware
examRouter.use(bodyParser.json());


//Routing 
//GET Method all exams
examRouter.route('/').get((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  mongoose.connect(url);
  Exam.find({}, function (err, docs) {
    if(err) throw err;
    res.json(docs);
  });
});
//GET Method a specific Exam
examRouter.route('/:id').get((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  mongoose.connect(url);
  Exam.find({ _id: req.params.id }, function (err, docs) {
    console.log("docs",req.params.id)
    if(err) throw err;
    res.json(docs);
  });
});
//POST Method for Add a new Exam
examRouter.route('/add').post((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  mongoose.connect(url);
  const exam = new Exam({
    examName: req.body.examName,
    examPeriod: req.body.examPeriod,
    examPasinRate: req.body.examPasinRate,
    examDescription: req.body.examDescription,
    examQuestionsIDs: [...req.body.examQuestionsIDs],
    examImageID: req.body.examImageID,
    examBrief: req.body.examBrief,
    examStatus:req.body.examStatus,
    examQuestionNo: req.body.examQuestionNo,
    examCategory: req.body.examCategory,
    examCreatedDate: req.body.examCreatedDate,
    key:''
  });
  console.log("req", req.body)
exam.key= exam._id;
  // save model to database
  exam.save(function (err, result) {
    if (err) return console.error(err);
    res.json(result._id.toString());
  });

});
//POST Method for Update a specifice Exam and Restor it
examRouter.route('/update/:id').post((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  mongoose.connect(url);
  const condition = { _id: req.params.id };
  const update = {
    "examName": req.body.examName,
    "examPeriod": req.body.examPeriod,
    "examPasinRate": req.body.examPasinRate,
    "examDescription": req.body.examDescription,
    "examQuestionsIDs": req.body.examQuestionsIDs,
    "examBrief": req.body.examBrief,
    "examQuestionNo": req.body.examQuestionNo,
    "examCategory" : req.body.examCategory,
    "examImageID": req.body.examImageID,
  }
  // Finde By ID and Update it
  Exam.findByIdAndUpdate(condition, update, () => {
    console.log("res",res.body)
    res.json(res.toString())
  });
});
//DELETE Method for delete a specifice practiceTest
examRouter.route('/delete/:id').delete((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  mongoose.connect(url);
  const condition = { _id: req.params.id };
  Exam.deleteOne(condition, (err, docs) => {
    if (err) throw err;

    console.log("Deleted : ", req.params.id);
    res.json(req.params.id)
  });
});


module.exports = examRouter;