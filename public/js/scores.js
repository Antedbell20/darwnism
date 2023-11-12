const score = localStorage.getItem("score")

function displayQuizScore(){
    document.querySelector("#score").textContent = score;
};

displayQuizScore();


if (score) {
    const response = await fetch('/api/score/:id', {
      method: 'POST',
      body: JSON.stringify({ score }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('You have logged in successfully!');
      document.location.replace('/dashboard');
    } else {
      alert('Failed to log in.');
    }
  }
};