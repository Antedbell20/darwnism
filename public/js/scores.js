const score = localStorage.getItem("score")
var user_id = localStorage.getItem("user_id")

function displayQuizScore(){
    console.log(user_id)
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
        console.log(score, user_id)
    } else {
              alert('Failed to log in.');
            }


}


// if (score) {
//     const response = await fetch('/api/score/:id', {
//       method: 'POST',
//       body: JSON.stringify({ score }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       console.log('You have logged in successfully!');
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to log in.');
//     }
//   };
