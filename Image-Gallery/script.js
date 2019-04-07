function imageGallery() {
	const highlight = document.querySelector('.gallery-highlight');
	const previews = document.querySelectorAll('.room-preview img');

	previews.forEach(preview => {
		preview.addEventListener('click', function(){
			const smallsrc = this.src;
			const bigsrc = smallsrc.replace("small", "big"); // change the text with replace method of string 
			highlight.src = bigsrc;
			previews.forEach(preview => preview.classList.remove('room-active'));
			preview.classList.add('room-active');
		})
	})
}

imageGallery();