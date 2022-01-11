const mongoose = require('mongoose');
const  {str, clientID, examID, activityID, questionID, bool, num} = require('./datatypes');


const ActivityExamStateSchema = new mongoose.Schema({
    activityID: activityID,
    clientID: str,
    examID: str,
    finished: bool,
    started: bool,
    finishedQuestionsIDsWithAnswers: [{}],
    timeSpent: num
});

const ActivityExamState = mongoose.model('ActivityExamState', ActivityExamStateSchema);

module.exports = ActivityExamState;