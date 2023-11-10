const retrieveQuestionString = localStorage.getItem("questionObjArray");

const answerButtonA = document.querySelector('#answerA');

const questionObjArray = JSON.parse(retrieveQuestionString);

answerButtonA.addEventListener("click",function(){
    console.log(questionObjArray);
     // console.log(questionObjArray);
     for (let i = 0; i < questionObjArray.length; i++) {
        const answerArray = [];
        
        answerArray.push(questionObjArray[i].correct_answer)
        
        // console.log("question: "+ questionObjArray[i].question);
        // console.log("correct answer: "+ questionObjArray[i].correct_answer);
        for (let j = 0; j < questionObjArray[i].incorrect_answers.length; j++) {
            answerArray.push(questionObjArray[i].incorrect_answers[j])
            // console.log("incorrect answers: "+ data.results[i].incorrect_answers[j]);
        }
        // console.log('data res' + data.results[i].question)
        console.log(answerArray)
    }
});

