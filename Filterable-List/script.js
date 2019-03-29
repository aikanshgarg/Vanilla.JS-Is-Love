const filterNames = () => {
	// Get value of input
	let filterValue = document.querySelector('#filter-input').value.toUpperCase();

	console.log(filterValue);

	// Get names ul
	let ul = document.querySelector('#names');
	// Get li from ul
	let li = ul.querySelectorAll('li.collection-item');

	// Loop through collection-item list
	for(let i = 0; i < li.length; i++) {
		let a = li[i].getElementsByTagName('a')[0];
		//console.log(a);
		
		// If matches
		if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none'; // hide when input value is not found
		}
	}
}

// Get input element
let filterInput = document.querySelector('#filter-input');
// Add event Listener
filterInput.addEventListener('keyup', filterNames);

