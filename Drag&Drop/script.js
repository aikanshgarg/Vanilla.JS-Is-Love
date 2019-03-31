const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


// Loop through empties and call drag events
for(const i of empties) {
	i.addEventListener('dragover', dragOver);
	i.addEventListener('dragenter', dragEnter);
	i.addEventListener('dragleave', dragLeave);
	i.addEventListener('drop', dragDrop);
}


// Drag Functions
function dragStart() {
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
	// console.log('start');
}

function dragEnd() {
	this.className = 'fill';

	// console.log('end');
}

function dragOver(e) {
	e.preventDefault();
	// console.log('over');
}

function dragEnter(e) {
	e.preventDefault();
	this.className += ' hovered'; 
	// console.log('enter');
}

function dragLeave() {
	this.className = 'empty'; 
	// console.log('leave');
}

function dragDrop() {
	// console.log('drop');
	this.className = 'empty';
	this.append(fill); // this is the empty div as it's the one which called dragDrop from line no 14 
}