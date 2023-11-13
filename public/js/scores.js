const score = localStorage.getItem("score")
var user_id = localStorage.getItem("user_id")

function displayQuizScore(){

    document.querySelector("#score").textContent = score;
    userScore(user_id, score)
};

displayQuizScore();

 async function  userScore (user_id, score) {
 
    const response = await fetch('/api/scores', {
        method: 'POST',
        body: JSON.stringify({ score, user_id}),
        headers: {'Content-Type' : 'application/json'}

    })
    if (response.ok){
        
    } else {
     alert('Failed to log in.');
    }


}