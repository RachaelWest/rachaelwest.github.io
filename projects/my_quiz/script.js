//FUNCTIONS
function createQuiz(){
  // to store HTML output
  const output = [];

  // for each question
  quizQuestions.forEach(
    (currentQuestion, questionNumber) => {

      //to store possible answers
      const answers = [];

      //for each possible answer
      for(letter in currentQuestion.answers){

        //to add HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label><br>`
        );
      }

      //to add to output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  //combine output into one html string, put on the page
  quizWrap.innerHTML = output.join('');
}

function showResults(){
	// for answer containers from quiz
  const answerWraps = quizWrap.querySelectorAll('.answers');

  // to track user's answers
  let numberCorrect = 0;

  //for each question
  quizQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerWrap = answerWraps[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerWrap.querySelector(selector) || {}).value;

    //if correct
    if(userAnswer === currentQuestion.correctAnswer){
      numberCorrect++;
      answerWraps[questionNumber].style.color = 'lightgreen';
    }
    //if incorrect or blank
    else{
      answerWraps[questionNumber].style.color = 'red';
    }
  });

  //show result
  resultsWrap.innerHTML = `You scored ${numberCorrect} out of ${quizQuestions.length}`;
}


//VARIABLES
const quizWrap = document.getElementById('quiz');
const resultsWrap = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
	{
		question: 'What is the largest animal in the world?',
		answers: {
			a:'Elephant',
			b:'Blue whale',
			c:'Giraffe',
			d:'Great white shark',
		},
		correctAnswer : 'b'
	},  	

	{
		question: 'In which country is the Eiffel Tower located?',
		answers: {
			a:'Italy',
			b:'Greece',
			c:'France',
			d:'Germany',
		},
	   correctAnswer: 'c'
	},

	{
		question: 'Who painted the Mona Lisa?',
		answers: {
			a:'Pablo Picasso',
			b:'Vicent van Gogh',
			c:'Claude Monet',
			d:'Leonardo da Vinci',
		},
		correctAnswer: 'd'
	},

	{
		question: 'Which planet is closest to the sun?',
		answers: {
			a:'Mercury',
			b:'Neptune',
			c:'Venus',
			d:'Earth',				
		},
	    correctAnswer: 'a'
	},

	{
		question: 'What is largest country in the world?',
		answers:{
			a:'China',
			b:'America',
			c:'Russia',
			d:'Africa',				
		},
	    correctAnswer: 'c'
	}
];


//TO BUILD QUIZ
createQuiz();

//EVENT LISTENERS
// on submit, show results
submitButton.addEventListener('click', showResults);

