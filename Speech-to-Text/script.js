window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // checking which is available and setting it to SpeechRegonition anyway

const recognition = new SpeechRecognition();
recognition.interimResults = true; // checks for pauses in our speech

// create new para for each pause and add it to words div
let p = document.createElement('p');
let words = document.querySelector('.words'); 
words.appendChild(p);

recognition.addEventListener('result', e => {
	//console.log(e.results);
	const transcript = Array.from(e.results)
					   .map(result => result[0])
					   .map(result => result.transcript).join('');
	//console.log(transcript);
	p.textContent = transcript; // render on DOM

	// Add a new paragraph when a pause is taken
	if (e.results[0].isFinal) {
		p = document.createElement('p');
		words.appendChild(p);
	}

	// let span;
	// if(transcript.includes('hey')) {
	// 	span = document.createElement('span');
	// 	span.innerHTML = 'coooool';
	// 	span.classList.add("blue-txt");
	// 	words.appendChild(span);
	// }

});

recognition.addEventListener('end', recognition.start);


recognition.start();


