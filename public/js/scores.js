// let score = 

// function incrementScore(){
    
// }

// const updateScore = await fetch('/api/scores/:id', {
//     method: 'PUT',

// })

const score = localStorage.getItem("score")

function displayQuizScore(){
    document.querySelector("#score").textContent = score;
};

displayQuizScore();