const app = () => {
	
	// DOM
	const song = document.querySelector('.song');
	const play = document.querySelector('.play');
	const outline = document.querySelector('.moving-outline circle');
	const video = document.querySelector('.video-container video');

	// SOUNDS
	const sounds = document.querySelectorAll('.sound-picker button')
	
	// TIME DISPLAY
	const timeDisplay = document.querySelector('.time-display');
	
	// TIME SELECT
	const timeSelect = document.querySelectorAll('.time-select button')
	
	// GET LENGTH OF OUTLINE - SVG
	const outlineLength = outline.getTotalLength();
	
	// DURATION
	let fakeDuration = 600;

	// ANIMATE THE CIRCULAR SVG
	outline.style.strokeDasharray = outlineLength;
	outline.style.strokeDashoffset = outlineLength;

	// SELECT SOUNDS
	sounds.forEach(option => {
		option.addEventListener('click', function() {
			song.src = this.getAttribute('data-sound');
			video.src = this.getAttribute('data-video');
			checkPlaying(song);
		});
	});

	// PLAY SOUND
	play.addEventListener('click', () => {
		checkPlaying(song);
	});

	// SELECT TIME
	timeSelect.forEach(option => {
		option.addEventListener('click', function () {
			fakeDuration = this.getAttribute("data-time");	
			if (fakeDuration % 60 === 0) {
				timeDisplay.textContent = `${Math.floor(fakeDuration / 60)} : 00`;
			} else {
				timeDisplay.textContent = `${Math.floor(fakeDuration / 60)} : ${Math.floor(fakeDuration % 60)}`;
			}
		});
	});

	// PLAY/PAUSE SOUNDS
	const checkPlaying = song => {
		if (song.paused) {
			song.play();
			video.play();
			play.src = './svg/pause.svg';
		} else {
			song.pause();
			video.pause();
			play.src = './svg/play.svg';
		}
	};

	// Tip: The ontimeupdate event is often used together with the currentTime property of the Audio/Video Object, which returns the current position of the audio/video playback, in seconds.
	// ANIMATE THE CIRCLE SVG
	song.ontimeupdate = () => {
		let currentTime = song.currentTime;
		let elapsed = fakeDuration - currentTime;
		
		// calculating time text
		let seconds = Math.floor(elapsed % 60);
		let minutes = Math.floor(elapsed / 60);

		// animating circle
		let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
		outline.style.strokeDashoffset = progress;

		// displaying time text
		if (seconds === 0) {
			timeDisplay.textContent = `${minutes} : 00`;	
		} else {
			timeDisplay.textContent = `${minutes} : ${seconds}`;
		}

		if (currentTime >= fakeDuration) {
			song.pause();
			video.pause();
			song.currentTime = 0; // reset the song
			play.src = './svg/play.svg'; // reset the icon to play
		}

	}


};

app();