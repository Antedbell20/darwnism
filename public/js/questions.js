const retrieveQuestionString = localStorage.getItem("questionObjArray");

const answerButtonA = document.querySelector('#answerA');

const questionObjArray = JSON.parse(retrieveQuestionString);

function rearrangeAnswers(array){
for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i],array[j]] = [array[j],array[i]];
}
return array;
}

answerButtonA.addEventListener("click",function(){
    console.log(questionObjArray);

     for (let i = 0; i < questionObjArray.length; i++) {
        const answerArray = [];
        
        answerArray.push(questionObjArray[i].correct_answer)

        for (let j = 0; j < questionObjArray[i].incorrect_answers.length; j++) {
            answerArray.push(questionObjArray[i].incorrect_answers[j])

        }

        shuffledAnswers = rearrangeAnswers(answerArray);
        console.log(shuffledAnswers);
        
    }

    
});


