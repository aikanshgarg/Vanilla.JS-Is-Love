// Questions
const questions = [
	{question: 'Enter Your Real Name'},
	{question: 'Enter Your Alias'},
	{question: 'Mention Your Super Power'},
	{question: 'Enter Your Email', pattern: /\S+@\S+\.\S+/},
	{question: 'Create A Password', type: 'password'}
];

// Transition Times
const shakeTime = 100; // in ms (after submitting a ques or error)
const switchTime = 200; // transition b/w questions

// Init question
let position = 0;

// Init DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');


// EVENTS

// load a ques on page load
document.addEventListener('DOMContentLoaded', getQuestion);

// next button click
nextBtn.addEventListener('click', validate);

// input field enter press
inputField.addEventListener('keyup', e => {
	if (e.keyCode === 13) {
		validate();
	}
});

// prev button click
prevBtn.addEventListener('click', moveBack);


// FUNCTIONS

// Get the quetion from array and add to markup
function getQuestion() {
	// Get current ques
	inputLabel.innerHTML = questions[position].question;
	// Get current type
	inputField.type = questions[position].type || 'text';
	// Get current answer
	inputField.value = ''; // empty the input
	// Focus on element (brings the cursor automatically on the input field)
	inputField.focus();

	// Set progress bar width
	progress.style.width = position*100 / questions.length + '%';

	// Add prev btn OR user icon depending on ques
	prevBtn.className = position ? 'fas fa-arrow-left': 'fas fa-user-ninja';

	showQuestion();
}

function showQuestion() {
	inputGroup.style.opacity = 1;
	// inputProgress.style.transition = '';
	inputProgress.style.width = '100%';
}

// Hide ques to show next ques again
function hideQuestion() {
	inputGroup.style.opacity = 0;
	inputLabel.style.marginLeft = 0;
	inputProgress.style.width = 0;
	inputProgress.style.transition = 'none';
	inputGroup.style.border = null;
}

// add tranform to create shake motion
function transform(x, y) {
	formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validate field
function validate() {
	// regex => /.+/ => Tests for one or more characters. Strings that are $null or are empty will not be selected by this label
	if (inputField.value.match(questions[position].pattern || /.+/)) {
		inputPass();
	} else {
		inputFail();
	}
}

// Field Input Fail
function inputFail() {
  formBox.className = 'error';
  // Repeat Shake Motion -  Set i to number of shakes
  for (let i = 0; i < 6; i++) {
    setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);
    setTimeout(transform, shakeTime * 6, 0, 0);
  }
    inputField.focus();
}

// Field input passed
function inputPass() {
	formBox.className = ''; // to remove error class, if its there
	setTimeout(transform, shakeTime * 0, 0, 10);
	setTimeout(transform, shakeTime * 1, 0, 0);

	questions[position].answer = inputField.value; 

	// increment position
	position++;

	// If new question, hide current and get next
	if (questions[position]) {
		hideQuestion();
		getQuestion();
	} else {
		// Remove If no more questions
		hideQuestion();
		formBox.className = 'close';
		progress.style.width = '100%';

		// form complete
		formComplete();
	}
}


// back arrow button
function moveBack() {
	if (position !== 0) {

		formBox.className = ''; // to remove error class, if its there
		setTimeout(transform, shakeTime * 0, 0, 10);
		setTimeout(transform, shakeTime * 1, 0, 0);

		questions[position].answer = inputField.value; 
	
		position--;

		hideQuestion();
		getQuestion();
	}
}


// All fields complete 
function formComplete() {
	console.log(questions);
	const h1 = document.createElement('h1');
	h1.classList.add('end');
	h1.appendChild(document.createTextNode(`Thanks ${questions[0].answer}, you're in our team now. We will mail your exciting ${questions[1].answer} goodies shortly!`));

	setTimeout(() => {
	    formBox.parentElement.appendChild(h1);
	    setTimeout(() => (h1.style.opacity = .9), 50);
  	}, 1000);
}