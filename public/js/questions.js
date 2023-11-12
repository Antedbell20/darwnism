const retrieveQuestionString = localStorage.getItem("questionObjArray");
const retrieveDifficulty = localStorage.getItem("difficultySelection");

let score = 0;

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
    }

    function question2 (){

        questionBlock.textContent = questionObjArray[1].question;
        answerAText.textContent = shuffledAnswers2[0];
        answerBText.textContent = shuffledAnswers2[1];
        answerCText.textContent = shuffledAnswers2[2];
        answerDText.textContent = shuffledAnswers2[3];
        }

    function question3 (){

        questionBlock.textContent = questionObjArray[2].question;
        answerAText.textContent = shuffledAnswers3[0];
        answerBText.textContent = shuffledAnswers3[1];
        answerCText.textContent = shuffledAnswers3[2];
        answerDText.textContent = shuffledAnswers3[3];
        }
    
    function question4 (){

        questionBlock.textContent = questionObjArray[3].question;
        answerAText.textContent = shuffledAnswers4[0];
        answerBText.textContent = shuffledAnswers4[1];
        answerCText.textContent = shuffledAnswers4[2];
        answerDText.textContent = shuffledAnswers4[3];
        }
    

    function question5 (){

        questionBlock.textContent = questionObjArray[4].question;
        answerAText.textContent = shuffledAnswers5[0];
        answerBText.textContent = shuffledAnswers5[1];
        answerCText.textContent = shuffledAnswers5[2];
        answerDText.textContent = shuffledAnswers5[3];
        }

    function question6 (){

        questionBlock.textContent = questionObjArray[5].question;
        answerAText.textContent = shuffledAnswers6[0];
        answerBText.textContent = shuffledAnswers6[1];
        answerCText.textContent = shuffledAnswers6[2];
        answerDText.textContent = shuffledAnswers6[3];
        }

     function question7 (){

        questionBlock.textContent = questionObjArray[6].question;
        answerAText.textContent = shuffledAnswers7[0];
        answerBText.textContent = shuffledAnswers7[1];
        answerCText.textContent = shuffledAnswers7[2];
        answerDText.textContent = shuffledAnswers7[3];
        }
    
     function question8 (){

        questionBlock.textContent = questionObjArray[7].question;
        answerAText.textContent = shuffledAnswers8[0];
        answerBText.textContent = shuffledAnswers8[1];
        answerCText.textContent = shuffledAnswers8[2];
        answerDText.textContent = shuffledAnswers8[3];
        }

     function question9 (){

        questionBlock.textContent = questionObjArray[8].question;
        answerAText.textContent = shuffledAnswers9[0];
        answerBText.textContent = shuffledAnswers9[1];
        answerCText.textContent = shuffledAnswers9[2];
        answerDText.textContent = shuffledAnswers9[3];
        }

     function question10 (){

        questionBlock.textContent = questionObjArray[9].question;
        answerAText.textContent = shuffledAnswers10[0];
        answerBText.textContent = shuffledAnswers10[1];
        answerCText.textContent = shuffledAnswers10[2];
        answerDText.textContent = shuffledAnswers10[3];
        }
        
    function endQuiz() {
        document.location.replace('/finalScore');
    }

    function nextQuestionA(){
 
        if(questionBlock.textContent === questionObjArray[0].question){

            if(answerAText.textContent === questionObjArray[0].correct_answer){

                if(retrieveDifficulty === "Easy"){

                   score = score + 10;

                  question2();
                }
                else if(retrieveDifficulty === "Medium"){

                   score = score+ 20;
                   question2();
                }
                else if(retrieveDifficulty === "Hard"){

                   score = score + 30;
                   question2();
                }
                
            }
            else{
                score = score - 10;
               
                question2();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[1].question){
            if(answerAText.textContent === questionObjArray[1].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question3();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question3();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question3();
                }
            }
            else{
                score = score - 10;
                question3();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[2].question){
            if(answerAText.textContent === questionObjArray[2].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question4();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question4();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question4();
                }
            }
            else{
                score = score - 10
                question4();
            }
           
        }
        else if(questionBlock.textContent === questionObjArray[3].question){
            if(answerAText.textContent === questionObjArray[3].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question5();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question5();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question5();
                }
            }
            else{
                score = score - 10
                question5();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[4].question){
            if(answerAText.textContent === questionObjArray[4].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question6();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question6();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question6();
                }
            }
            else{
                score = score - 10
                question6();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[5].question){
            if(answerAText.textContent === questionObjArray[5].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question7();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question7();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question7();
                }
            }
            else{
                score = score - 10
                question7();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[6].question){
            if(answerAText.textContent === questionObjArray[6].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question8();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question8();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question8();
                }
            }
            else{
                score = score - 10
                question8();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[7].question){
            if(answerAText.textContent === questionObjArray[7].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question9();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question9();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question9();
                }
            }
            else{
                score = score - 10;
                question9();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[8].question){
            if(answerAText.textContent === questionObjArray[8].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question10();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question10();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question10();
                }
            }
            else{
                score = score - 10
                question10();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[9].question){
            if(answerAText.textContent === questionObjArray[9].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    localStorage.setItem("score", score);
                    endQuiz();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    localStorage.setItem("score", score);
                    endQuiz();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    localStorage.setItem("score", score);
                    endQuiz();
                }
            }
            else{
                score = score - 10
                localStorage.setItem("score", score);
                endQuiz();
            }
            
        }
    }
    function nextQuestionB(){
 
        if(questionBlock.textContent === questionObjArray[0].question){

            if(answerBText.textContent === questionObjArray[0].correct_answer){

                if(retrieveDifficulty === "Easy"){

                   score = score + 10;

                  question2();
                }
                else if(retrieveDifficulty === "Medium"){

                   score = score+ 20;
                   question2();
                }
                else if(retrieveDifficulty === "Hard"){

                   score = score + 30;
                   question2();
                }
                
            }
            else{
                score = score - 10;
               
                question2();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[1].question){
            if(answerBText.textContent === questionObjArray[1].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question3();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question3();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question3();
                }
            }
            else{
                score = score - 10;
                question3();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[2].question){
            if(answerBText.textContent === questionObjArray[2].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question4();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question4();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question4();
                }
            }
            else{
                score = score - 10
                question4();
            }
           
        }
        else if(questionBlock.textContent === questionObjArray[3].question){
            if(answerBText.textContent === questionObjArray[3].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question5();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question5();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question5();
                }
            }
            else{
                score = score - 10
                question5();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[4].question){
            if(answerBText.textContent === questionObjArray[4].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question6();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question6();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question6();
                }
            }
            else{
                score = score - 10
                question6();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[5].question){
            if(answerBText.textContent === questionObjArray[5].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question7();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question7();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question7();
                }
            }
            else{
                score = score - 10
                question7();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[6].question){
            if(answerBText.textContent === questionObjArray[6].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question8();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question8();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question8();
                }
            }
            else{
                score = score - 10
                question8();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[7].question){
            if(answerBText.textContent === questionObjArray[7].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question9();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question9();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question9();
                }
            }
            else{
                score = score - 10;
                question9();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[8].question){
            if(answerBText.textContent === questionObjArray[8].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question10();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question10();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question10();
                }
            }
            else{
                score = score - 10
                question10();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[9].question){
            if(answerBText.textContent === questionObjArray[9].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    localStorage.setItem("score", score);
                    endQuiz();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    localStorage.setItem("score", score);
                    endQuiz();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    localStorage.setItem("score", score);
                    endQuiz();
                }
            }
            else{
                score = score - 10
                localStorage.setItem("score", score);
                endQuiz();
            }
            
        }
    }

    function nextQuestionC(){
 
        if(questionBlock.textContent === questionObjArray[0].question){

            if(answerCText.textContent === questionObjArray[0].correct_answer){

                if(retrieveDifficulty === "Easy"){

                   score = score + 10;

                  question2();
                }
                else if(retrieveDifficulty === "Medium"){

                   score = score+ 20;
                   question2();
                }
                else if(retrieveDifficulty === "Hard"){

                   score = score + 30;
                   question2();
                }
                
            }
            else{
                score = score - 10;
               
                question2();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[1].question){
            if(answerCText.textContent === questionObjArray[1].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question3();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question3();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question3();
                }
            }
            else{
                score = score - 10;
                question3();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[2].question){
            if(answerCText.textContent === questionObjArray[2].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question4();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question4();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question4();
                }
            }
            else{
                score = score - 10
                question4();
            }
           
        }
        else if(questionBlock.textContent === questionObjArray[3].question){
            if(answerCText.textContent === questionObjArray[3].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question5();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question5();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question5();
                }
            }
            else{
                score = score - 10
                question5();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[4].question){
            if(answerCText.textContent === questionObjArray[4].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question6();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question6();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question6();
                }
            }
            else{
                score = score - 10
                question6();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[5].question){
            if(answerCText.textContent === questionObjArray[5].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question7();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question7();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question7();
                }
            }
            else{
                score = score - 10
                question7();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[6].question){
            if(answerCText.textContent === questionObjArray[6].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question8();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question8();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question8();
                }
            }
            else{
                score = score - 10
                question8();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[7].question){
            if(answerCText.textContent === questionObjArray[7].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question9();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question9();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question9();
                }
            }
            else{
                score = score - 10;
                question9();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[8].question){
            if(answerCText.textContent === questionObjArray[8].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question10();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question10();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question10();
                }
            }
            else{
                score = score - 10
                question10();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[9].question){
            if(answerCText.textContent === questionObjArray[9].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    localStorage.setItem("score", score);
                    endQuiz();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    localStorage.setItem("score", score);
                    endQuiz();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    localStorage.setItem("score", score);
                    endQuiz();
                }
            }
            else{
                score = score - 10
                localStorage.setItem("score", score);
                endQuiz();
            }
            
        }
    }

    function nextQuestionD(){
 
        if(questionBlock.textContent === questionObjArray[0].question){

            if(answerDText.textContent === questionObjArray[0].correct_answer){

                if(retrieveDifficulty === "Easy"){

                   score = score + 10;

                  question2();
                }
                else if(retrieveDifficulty === "Medium"){

                   score = score+ 20;
                   question2();
                }
                else if(retrieveDifficulty === "Hard"){

                   score = score + 30;
                   question2();
                }
                
            }
            else{
                score = score - 10;
               
                question2();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[1].question){
            if(answerDText.textContent === questionObjArray[1].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question3();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question3();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question3();
                }
            }
            else{
                score = score - 10;
                question3();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[2].question){
            if(answerDText.textContent === questionObjArray[2].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question4();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question4();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question4();
                }
            }
            else{
                score = score - 10
                question4();
            }
           
        }
        else if(questionBlock.textContent === questionObjArray[3].question){
            if(answerDText.textContent === questionObjArray[3].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question5();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question5();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question5();
                }
            }
            else{
                score = score - 10
                question5();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[4].question){
            if(answerDText.textContent === questionObjArray[4].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question6();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question6();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question6();
                }
            }
            else{
                score = score - 10
                question6();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[5].question){
            if(answerDText.textContent === questionObjArray[5].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question7();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question7();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question7();
                }
            }
            else{
                score = score - 10
                question7();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[6].question){
            if(answerDText.textContent === questionObjArray[6].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question8();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question8();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question8();
                }
            }
            else{
                score = score - 10
                question8();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[7].question){
            if(answerDText.textContent === questionObjArray[7].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question9();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question9();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question9();
                }
            }
            else{
                score = score - 10;
                question9();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[8].question){
            if(answerDText.textContent === questionObjArray[8].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    question10();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    question10();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    question10();
                }
            }
            else{
                score = score - 10
                question10();
            }
            
        }
        else if(questionBlock.textContent === questionObjArray[9].question){
            if(answerDText.textContent === questionObjArray[9].correct_answer){
                if(retrieveDifficulty === "Easy"){
                    score = score + 10
                    localStorage.setItem("score", score);
                    endQuiz();
                }
                else if(retrieveDifficulty === "Medium"){
                    score = score+ 20
                    localStorage.setItem("score", score);
                    endQuiz();
                }
                else if(retrieveDifficulty === "Hard"){
                    score = score + 30
                    localStorage.setItem("score", score);
                    endQuiz();
                }
            }
            else{
                score = score - 10
                localStorage.setItem("score", score);
                endQuiz();
            }
            
        }
    }
    
    answerButtonA.addEventListener("click", nextQuestionA);
    answerButtonB.addEventListener("click", nextQuestionB);
    answerButtonC.addEventListener("click", nextQuestionC);
    answerButtonD.addEventListener("click", nextQuestionD);

question1();