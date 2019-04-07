const page2h1 = document.querySelector('.page2 h1');
const page2p = document.querySelector('.page2 p');

function bgChanger() {
	//console.log('works!');
	// 'this' is window object here
	
	// activate halfway through
	if (this.scrollY > this.innerHeight / 1.4) {
		document.body.classList.add('bg-active');
		page2h1.style.opacity = 1;
		page2p.style.opacity = 1;
	} else {
		document.body.classList.remove('bg-active');
		page2h1.style.opacity = 0;
		page2p.style.opacity = 0;		
	}
}

// every time we scroll 
window.addEventListener('scroll', bgChanger);