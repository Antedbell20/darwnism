// const retrieveQuestionString = localStorage.getItem("questionObjArray");

//  const answerButtonA = document.querySelector('#answerA');

// const questionObjArray = JSON.parse(retrieveQuestionString);



// function rearrangeAnswers(array){
// for (let i = array.length -1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i+1));
//     [array[i],array[j]] = [array[j],array[i]];
// }
// return array;
// }

// const template = Handlebars.compile(`<div class="container mt-5">
// {{#each questionObjArray}}
// <div class="container">
// <div class="card text-center">
//   <div class="card-header">
//     {{question}}
//   </div>
//   <div class="card-body">
//     <p>{{correct_answer}}</p><a href="#" class="btn btn-primary">A</a>
//     <p>{{incorrect_answer}}</p><a href="#" class="btn btn-primary">B</a>
//     <p>{{incorrect_answer}}</p><a href="#" class="btn btn-primary">C</a>
//     <p>{{incorrect_answer}}</p><a href="#" class="btn btn-primary">D</a>
//     <h1>Hello!</h1>
//   </div>
// </div>
// </div>
// {{/each}}
// </div>
// </div>
// <script src="/js/questions.js"></script>`);

// const questionContainer = document.getElementById('questionContainer');
// questionContainer.innerHTML = template(questionObjArray);

// answerButtonA.addEventListener("click", async function(){

// if (questionObjArray) {
//   const response = await fetch('/questionPage', {
//     method: 'GET',
//     body: JSON.stringify(questionObjArray),
//     headers: {'Content-Type': 'application/json'},
//   })
//   if (response.ok) {
//     document.location.replace('/questionPage')
//   }
// }
 

    //  for (let i = 0; i < questionObjArray.length; i++) {



    //     const answerArray = [];
        
    //     answerArray.push(questionObjArray[i].correct_answer)

    //     for (let j = 0; j < questionObjArray[i].incorrect_answers.length; j++) {
    //         answerArray.push(questionObjArray[i].incorrect_answers[j])

    //     }

    //     shuffledAnswers = rearrangeAnswers(answerArray);
    //     console.log(shuffledAnswers);
        
    // }

// });

