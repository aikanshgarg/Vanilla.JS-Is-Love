/*
// Function Constructor
const TypeWriter = function (txtElement, words, wait = 3000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = ''; // whatever is being typed at moment
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	
	this.type(); // call type method 
	this.isDeleting = false;
}

// Type method
TypeWriter.prototype.type = function() {

	// Current index of word
	const current = this.wordIndex % this.words.length;

	// Get full text of current word
	const fullTxt = this.words[current];

	// Check if deleting
	if (this.isDeleting) {
		// Remove char
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		// Add char
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	// Inside txt into element
	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

	// Initial Type Speed
	let typeSpeed = 300; // in ms

	// Make deletion speed twice faster
	if (this.isDeleting) {
		typeSpeed /= 2;
	}

	// Check if word is complete
	if (!this.isDeleting && this.txt === fullTxt) {
		// pause at end
		typeSpeed = this.wait; 
		// set isDeleting to true
		this.isDeleting = true;

	// Check if word has been deleted fully, empty span
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		// Move to next word
		this.wordIndex++;
		// Pause before starting to type
		typeSpeed = 500;
	}

	// each time a character is being typed, this setTimeout is making it run
	setTimeout(() => this.type(), typeSpeed);
};
*/


// ES6 Class
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = ''; // whatever is being typed at moment
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		
		this.type(); // call type method 
		this.isDeleting = false;
	}

	type() {
		// Current index of word
		const current = this.wordIndex % this.words.length;

		// Get full text of current word
		const fullTxt = this.words[current];

		// Check if deleting
		if (this.isDeleting) {
			// Remove char
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			// Add char
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		// Inside txt into element
		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

		// Initial Type Speed
		let typeSpeed = 300; // in ms

		// Make deletion speed twice faster
		if (this.isDeleting) {
			typeSpeed /= 2;
		}

		// Check if word is complete
		if (!this.isDeleting && this.txt === fullTxt) {
			// pause at end
			typeSpeed = this.wait; 
			// set isDeleting to true
			this.isDeleting = true;

		// Check if word has been deleted fully, empty span
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			// Move to next word
			this.wordIndex++;
			// Pause before starting to type
			typeSpeed = 500;
		}

		// each time a character is being typed, this setTimeout is making it run
		setTimeout(() => this.type(), typeSpeed);
	}
}



// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init the app
function init() {
	const txtElement = document.querySelector('.txt-type'); // span element
	const words = JSON.parse(txtElement.getAttribute('data-words')); // convert to an array using json parse
	const wait = txtElement.getAttribute('data-wait');

	// Create a new object with TypeWriter function constructor
	new TypeWriter(txtElement, words, wait);
}
