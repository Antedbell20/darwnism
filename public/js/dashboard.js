const topicSelection = document.querySelector('#quizTopic');
const quizLengthSelection = document.querySelector('#quizLength');
const DifficultySelection = document.querySelector('#quizDifficulty');
const startQuizBtn = document.querySelector('#startQuizBtn');


const questionNo = 0;
const questionObjArray=[];

// function populateQuestionBlock(){};

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
        questionObjArray.push(...data.results);
        let questionString = JSON.stringify(questionObjArray);
        localStorage.setItem("questionObjArray", questionString);
        document.location.replace('/questionPage');
    })
    .catch(function(err){
        console.log(err);
    })
});
