const retrieveQuestionString = localStorage.getItem("questionObjArray");

const questionBlock = document.querySelector('#questionBlock')
const answerButtonA = document.querySelector('#answerA');
const answerButtonB = document.querySelector('#answerB');
const answerButtonC = document.querySelector('#answerC');
const answerButtonD = document.querySelector('#answerD');
const answerAText = document.querySelector('#answerAText');
const answerBText = document.querySelector('#answerBText');
const answerCText = document.querySelector('#answerCText');
const answerDText = document.querySelector('#answerDText');

const questionObjArray = JSON.parse(retrieveQuestionString);

function rearrangeAnswers(array){
for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i],array[j]] = [array[j],array[i]];
}
return array;
}

const shuffledAnswers1 = rearrangeAnswers([questionObjArray[0].correct_answer, ...questionObjArray[0].incorrect_answers]);
const shuffledAnswers2 = rearrangeAnswers([questionObjArray[1].correct_answer, ...questionObjArray[1].incorrect_answers]);
const shuffledAnswers3 = rearrangeAnswers([questionObjArray[2].correct_answer, ...questionObjArray[2].incorrect_answers]);
const shuffledAnswers4 = rearrangeAnswers([questionObjArray[3].correct_answer, ...questionObjArray[3].incorrect_answers]);
const shuffledAnswers5 = rearrangeAnswers([questionObjArray[4].correct_answer, ...questionObjArray[4].incorrect_answers]);
const shuffledAnswers6 = rearrangeAnswers([questionObjArray[5].correct_answer, ...questionObjArray[5].incorrect_answers]);
const shuffledAnswers7 = rearrangeAnswers([questionObjArray[6].correct_answer, ...questionObjArray[6].incorrect_answers]);
const shuffledAnswers8 = rearrangeAnswers([questionObjArray[7].correct_answer, ...questionObjArray[7].incorrect_answers]);
const shuffledAnswers9 = rearrangeAnswers([questionObjArray[8].correct_answer, ...questionObjArray[8].incorrect_answers]);
const shuffledAnswers10 = rearrangeAnswers([questionObjArray[9].correct_answer, ...questionObjArray[9].incorrect_answers]);

function question1 (){

    questionBlock.textContent = questionObjArray[0].question;
    answerAText.textContent = shuffledAnswers1[0];
    answerBText.textContent = shuffledAnswers1[1];
    answerCText.textContent = shuffledAnswers1[2];
    answerDText.textContent = shuffledAnswers1[3];
    answerButtonA.removeEventListener("click", endQuiz);
    answerButtonB.removeEventListener("click", endQuiz);
    answerButtonC.removeEventListener("click", endQuiz);
    answerButtonD.removeEventListener("click", endQuiz);
    answerButtonA.addEventListener("click", question2);
    answerButtonB.addEventListener("click", question2);
    answerButtonC.addEventListener("click", question2);
    answerButtonD.addEventListener("click", question2);
    }

    function question2 (){

        questionBlock.textContent = questionObjArray[1].question;
        answerAText.textContent = shuffledAnswers2[0];
        answerBText.textContent = shuffledAnswers2[1];
        answerCText.textContent = shuffledAnswers2[2];
        answerDText.textContent = shuffledAnswers2[3];
        answerButtonA.removeEventListener("click", question2);
        answerButtonB.removeEventListener("click", question2);
        answerButtonC.removeEventListener("click", question2);
        answerButtonD.removeEventListener("click", question2);
        answerButtonA.addEventListener("click", question3);
        answerButtonB.addEventListener("click", question3);
        answerButtonC.addEventListener("click", question3);
        answerButtonD.addEventListener("click", question3);
        }

    function question3 (){

        questionBlock.textContent = questionObjArray[2].question;
        answerAText.textContent = shuffledAnswers3[0];
        answerBText.textContent = shuffledAnswers3[1];
        answerCText.textContent = shuffledAnswers3[2];
        answerDText.textContent = shuffledAnswers3[3];
        answerButtonA.removeEventListener("click", question3);
        answerButtonB.removeEventListener("click", question3);
        answerButtonC.removeEventListener("click", question3);
        answerButtonD.removeEventListener("click", question3);
        answerButtonA.addEventListener("click", question4);
        answerButtonB.addEventListener("click", question4);
        answerButtonC.addEventListener("click", question4);
        answerButtonD.addEventListener("click", question4);
        }
    
    function question4 (){

        questionBlock.textContent = questionObjArray[3].question;
        answerAText.textContent = shuffledAnswers4[0];
        answerBText.textContent = shuffledAnswers4[1];
        answerCText.textContent = shuffledAnswers4[2];
        answerDText.textContent = shuffledAnswers4[3];
        answerButtonA.removeEventListener("click", question4);
        answerButtonB.removeEventListener("click", question4);
        answerButtonC.removeEventListener("click", question4);
        answerButtonD.removeEventListener("click", question4);
        answerButtonA.addEventListener("click", question5);
        answerButtonB.addEventListener("click", question5);
        answerButtonC.addEventListener("click", question5);
        answerButtonD.addEventListener("click", question5);
        }
    

    function question5 (){

        questionBlock.textContent = questionObjArray[4].question;
        answerAText.textContent = shuffledAnswers5[0];
        answerBText.textContent = shuffledAnswers5[1];
        answerCText.textContent = shuffledAnswers5[2];
        answerDText.textContent = shuffledAnswers5[3];
        answerButtonA.removeEventListener("click", question5);
        answerButtonB.removeEventListener("click", question5);
        answerButtonC.removeEventListener("click", question5);
        answerButtonD.removeEventListener("click", question5);
        answerButtonA.addEventListener("click", question6);
        answerButtonB.addEventListener("click", question6);
        answerButtonC.addEventListener("click", question6);
        answerButtonD.addEventListener("click", question6);
        }

    function question6 (){

        questionBlock.textContent = questionObjArray[5].question;
        answerAText.textContent = shuffledAnswers6[0];
        answerBText.textContent = shuffledAnswers6[1];
        answerCText.textContent = shuffledAnswers6[2];
        answerDText.textContent = shuffledAnswers6[3];
        answerButtonA.removeEventListener("click", question6);
        answerButtonB.removeEventListener("click", question6);
        answerButtonC.removeEventListener("click", question6);
        answerButtonD.removeEventListener("click", question6);
        answerButtonA.addEventListener("click", question7);
        answerButtonB.addEventListener("click", question7);
        answerButtonC.addEventListener("click", question7);
        answerButtonD.addEventListener("click", question7);
        }

     function question7 (){

        questionBlock.textContent = questionObjArray[6].question;
        answerAText.textContent = shuffledAnswers7[0];
        answerBText.textContent = shuffledAnswers7[1];
        answerCText.textContent = shuffledAnswers7[2];
        answerDText.textContent = shuffledAnswers7[3];
        answerButtonA.removeEventListener("click", question7);
        answerButtonB.removeEventListener("click", question7);
        answerButtonC.removeEventListener("click", question7);
        answerButtonD.removeEventListener("click", question7);
        answerButtonA.addEventListener("click", question8);
        answerButtonB.addEventListener("click", question8);
        answerButtonC.addEventListener("click", question8);
        answerButtonD.addEventListener("click", question8);
        }
    
     function question8 (){

        questionBlock.textContent = questionObjArray[7].question;
        answerAText.textContent = shuffledAnswers8[0];
        answerBText.textContent = shuffledAnswers8[1];
        answerCText.textContent = shuffledAnswers8[2];
        answerDText.textContent = shuffledAnswers8[3];
        answerButtonA.removeEventListener("click", question8);
        answerButtonB.removeEventListener("click", question8);
        answerButtonC.removeEventListener("click", question8);
        answerButtonD.removeEventListener("click", question8);
        answerButtonA.addEventListener("click", question9);
        answerButtonB.addEventListener("click", question9);
        answerButtonC.addEventListener("click", question9);
        answerButtonD.addEventListener("click", question9);
        }

     function question9 (){

        questionBlock.textContent = questionObjArray[8].question;
        answerAText.textContent = shuffledAnswers9[0];
        answerBText.textContent = shuffledAnswers9[1];
        answerCText.textContent = shuffledAnswers9[2];
        answerDText.textContent = shuffledAnswers9[3];
        answerButtonA.removeEventListener("click", question9);
        answerButtonB.removeEventListener("click", question9);
        answerButtonC.removeEventListener("click", question9);
        answerButtonD.removeEventListener("click", question9);
        answerButtonA.addEventListener("click", question10);
        answerButtonB.addEventListener("click", question10);
        answerButtonC.addEventListener("click", question10);
        answerButtonD.addEventListener("click", question10);
        }

     function question10 (){

        questionBlock.textContent = questionObjArray[9].question;
        answerAText.textContent = shuffledAnswers10[0];
        answerBText.textContent = shuffledAnswers10[1];
        answerCText.textContent = shuffledAnswers10[2];
        answerDText.textContent = shuffledAnswers10[3];
        answerButtonA.removeEventListener("click", question10);
        answerButtonB.removeEventListener("click", question10);
        answerButtonC.removeEventListener("click", question10);
        answerButtonD.removeEventListener("click", question10);
        answerButtonA.addEventListener("click", endQuiz);
        answerButtonB.addEventListener("click", endQuiz);
        answerButtonC.addEventListener("click", endQuiz);
        answerButtonD.addEventListener("click", endQuiz);
        }
        
    function endQuiz() {
        document.location.replace('/finalScore');
    }

question1();