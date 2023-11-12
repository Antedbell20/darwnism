const topicSelection = document.querySelector('#quizTopic');
const DifficultySelection = document.querySelector('#quizDifficulty');
const startQuizBtn = document.querySelector('#startQuizBtn');


const questionNo = 0;
const questionObjArray=[];

// function populateQuestionBlock(){};

startQuizBtn.addEventListener("click", function(){

    const topic = topicSelection.value;
    const difficulty = DifficultySelection.value;

    const url = `https://opentdb.com/api.php?amount=10&category=${topic}&difficulty=${difficulty.toLowerCase()}&type=multiple`;

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function (data) {
        questionObjArray.push(...data.results);
        // for each over results 
        console.log(questionObjArray)
        let questionString = JSON.stringify(questionObjArray);
        localStorage.setItem("questionObjArray", questionString);
        localStorage.setItem("difficultySelection", difficulty);
        document.location.replace('/questionPage');
        if(questionObjArray){
            const res = fetch('/questionPage',{
                method: 'POST',
                body: JSON.stringify(questionObjArray),
                headers: {"Content-Type":"application.json"},
            })
            if(res.ok){
                // console.log("working", questionObjArray);
                // document.location.replace('/questionPage');
            }else{
                throw err;
            }
        }
    })
    .catch(function(err){
        console.log(err);
    })
});

