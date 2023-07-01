// Get the modal element
const modal = document.querySelector('#simpleModal');

// Get modal open button
const modalBtn = document.querySelector('#modalBtn');

// Get close button
var closeBtn = document.querySelector('.closeBtn');


// Function to close the modal on clicking outside
const clickOutside = event => {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
}
// Listen for outside click
window.addEventListener('click', clickOutside);


// Function to open modal
const openModal = () => {
	modal.style.display = 'block';
}
// Listen for click
modalBtn.addEventListener('click', openModal);


// Function to close modal
const closeModal = () => {
	modal.style.display = 'none';
}
// Listen for click
closeBtn.addEventListener('click', closeModal);
