const topicSelection = document.querySelector('#quizTopic');
const quizLengthSelection = document.querySelector('#quizLength');
const DifficultySelection = document.querySelector('#quizDifficulty');
const startQuizBtn = document.querySelector('#startQuizBtn');

startQuizBtn.addEventListener("click", function(){
    
    const topic = topicSelection.value;
    const quizLength = quizLengthSelection.value;
    const difficulty = DifficultySelection.value;

    console.log(`topic: ${topic}, quiz length: ${quizLength}, difficulty: ${difficulty}`);
});