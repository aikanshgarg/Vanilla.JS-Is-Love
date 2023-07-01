function splitScroll() {
	const controller = new ScrollMagic.Controller();

// hook makes the trigger at top: start of about me
	new ScrollMagic.Scene({
		duration: '600%',
		triggerElement: '.about-title',
		triggerHook: 0
	})
	.setPin('.about-title')
	// .addIndicators()
	.addTo(controller);
}

splitScroll();