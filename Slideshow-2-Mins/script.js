let i = 0; // start point
const images = [];
const time = 3000;

// Images arrays
images[0] = 'image0.jpg'
images[1] = 'image1.jpg'
images[2] = 'image2.jpeg'
images[3] = 'image3.jpeg'
images[4] = 'image4.jpeg'

// Change Image
const changeImg = () => {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0 ;
	}

	setTimeout(changeImg, time);
} 

window.onload = changeImg;