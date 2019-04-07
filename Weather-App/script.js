const key = 'bb51ae3a9ae130145d391a907325638e';
const proxy = 'https://cors-anywhere.herokuapp.com/';

window.addEventListener('load', () => {
	let long;
	let lat;
	let temperatureDescription = document.querySelector('.temperature-description');
	let temperatureDegree = document.querySelector('.temperature-degree');
	let locationTimezone = document.querySelector('.location-timezone');
	let degreeSection = document.querySelector('.degree-section');
	let degreeSpan = document.querySelector('.degree-section span');


	// if geolocation is allowed in browser
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
				long = position.coords.longitude;
				lat = position.coords.latitude; 

				const api = `${proxy}https://api.darksky.net/forecast/${key}/${lat},${long}`;

				fetch(api)
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data);
						const { temperature, summary, icon } = data.currently; // ES6 => DESTRUCTURING

						// Set DOM elements from the API
						temperatureDegree.textContent = temperature;
						temperatureDescription.textContent = summary;
						locationTimezone.textContent = data.timezone;

						let celcius = ((temperature - 32) * (5 / 9)).toFixed(2);

						// set icon
						setIcons(icon, document.querySelector('.icon'));

						// change scales (C-F)
						degreeSection.addEventListener('click', () => {
							if (degreeSpan.textContent === 'F') {
								degreeSpan.textContent = 'C';
								temperatureDegree.textContent = celcius;
							} else {
								degreeSpan.textContent = 'F';
								temperatureDegree.textContent = temperature;
							}
						})


					})
				});
	}

	function setIcons(icon, iconID) {
		const skycons = new Skycons({color: "white"});
		const currentIcon = icon.replace(/-/g, '_').toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}
});