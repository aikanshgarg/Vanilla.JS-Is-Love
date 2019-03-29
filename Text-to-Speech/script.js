// Init Speech Syth API
const synth = window.speechSynthesis;

// DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

// Init voices array
let voice = [];

const getVoices = () => {
	voices = synth.getVoices();

	// Loop through all voices and create an option element for each one
	voices.forEach(voice => {

		// create option element
		const option = document.createElement('option');

		// fill option with voice and language
		option.textContent = `${voice.name} (${voice.lang})`;

		// set data attributes
		option.setAttribute('data-lang', voice.lang);
		option.setAttribute('data-name', voice.name);	

		// add element to select list
		voiceSelect.appendChild(option);
	});
};
getVoices();

// https://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-of-chrome-web-speech-api
if (synth.onvoiceschanged !== undefined) {
	synth.onvoiceschanged = getVoices;
}


// Speak functionality
const speak = () => {

	// check if speaking
	if (synth.speaking) {
		console.log('Already speaking');
		return;
	}
	if (textInput.value !== '') {
		// Add background gif
		body.style.background = '#141414 url(wave.gif)';
		body.style.backgroundRepeat = 'repeat-x';
		body.style.backgroundSize = 'contain';


		// get speak text
		const speakText = new SpeechSynthesisUtterance(textInput.value);
		
		// speak end
		speakText.onend = e => {
			console.log('Done speaking...');
			body.style.background = '#141414';
		}

		// speak error
		speakText.onerror = e => {
			alert(`Something went wrong...${e}`);
		}

		// selected voice
		const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

		// loop through voices
		voices.forEach(voice => {
			if (voice.name === selectedVoice) {
				speakText.voice = voice;
			}
		});

		// set pitch and rate
		speakText.rate = rate.value;
		speakText.pitch = pitch.value;

		// speaking with speak method of api
		synth.speak(speakText);
	}
};

// Event Listeners

// Text form submit btn
textForm.addEventListener('submit', e => {
	e.preventDefault();
	speak();
	textInput.blur();
});

// Rate and pitch value change shown
rate.addEventListener('change', e => rateValue.textContent = rate.value);
pitch.addEventListener('change', e => pitchValue.textContent = pitch.value);

// speak on selecting a voice
voiceSelect.addEventListener('change', e => speak());