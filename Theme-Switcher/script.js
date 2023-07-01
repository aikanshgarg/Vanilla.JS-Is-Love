const bodyFont = getComputedStyle(document.body).getPropertyValue('--body-font');
const backgroundColor = getComputedStyle(document.body).getPropertyValue('--background-color');
const textColor = getComputedStyle(document.body).getPropertyValue('--text-color');

const fontSelect = document.querySelector('.js-font-select');
const bgColorPicker = document.querySelector('.js-bg-color-picker');
const textColorPicker = document.querySelector('.js-text-color-picker');

const themeOptions = [fontSelect, bgColorPicker, textColorPicker];

themeOptions.forEach( option => {
	option.addEventListener('change', event => {
		console.log(option.dataset);
		
		document.body.style.setProperty(option.dataset.themeValue, event.target.value);
	});
});



/*
- Lines:1,2,3 => We used css variables(in the root) to get the value of css ppty in js
- Line:15 => We used same data-set for the select and 2 inputs in our HTML file, so it can read and set for each of them in the loop 
*/