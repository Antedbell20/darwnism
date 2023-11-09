const topicSelection = document.querySelector('#quizTopic');
const quizLengthSelection = document.querySelector('#quizLength');
const DifficultySelection = document.querySelector('#quizDifficulty');
const startQuizBtn = document.querySelector('#startQuizBtn');

const quizArray = [];
const questionNo = 0;

function populateQuestionBlock(){};

startQuizBtn.addEventListener("click", function(){

    const topic = topicSelection.value;
    const quizLength = quizLengthSelection.value;
    const difficulty = DifficultySelection.value;

    const url = `https://opentdb.com/api.php?amount=${quizLength}&category=${topic}&difficulty=${difficulty.toLowerCase()}&type=multiple`;

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data.results)
        for (let i = 0; i < data.results.length; i++) {
            quizArray
            console.log("question: "+ data.results[i].question);
            console.log("correct answer: "+ data.results[i].correct_answer);
            for (let j = 0; j < data.results[i].incorrect_answers.length; j++) {
                
                console.log("incorrect answers: "+ data.results[i].incorrect_answers[j]);
            }
        }
    })
    .catch(function(err){
        console.log(err);
    })
});