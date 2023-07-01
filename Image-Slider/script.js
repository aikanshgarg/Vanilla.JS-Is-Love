// Variables
let sliderImages = document.querySelectorAll('.slide'),
	arrowRight = document.querySelector('#arrow-right'),
	arrowLeft = document.querySelector('#arrow-left'),
	current = 0;

// each time we press the arrow, we clear all images (display set to none)
function reset() {
	for(let i = 0; i < sliderImages.length; i++) {
		sliderImages[i].style.display = 'none';
	}
}

// Initialises the slider
function startSlide() {
	reset();
	sliderImages[0].style.display = 'block';
}

// Show previous
function slideLeft() {
	reset();
	sliderImages[current - 1].style.display = 'block';
	current--;
}

// Show next
function slideRight() {
	reset();
	sliderImages[current + 1].style.display = 'block';
	current++;
}

// Left Arrow click
arrowLeft.addEventListener('click', function() {
	if (current === 0) {
		current = sliderImages.length;
	}
	slideLeft();
});

// Right Arrow click
arrowRight.addEventListener('click', function() {
	if (current === sliderImages.length - 1) {
		current = -1;
	}
	slideRight();
});


startSlide();