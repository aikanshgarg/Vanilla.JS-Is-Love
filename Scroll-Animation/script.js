// gsap bezier cdn 
const flightPath = {
	curviness: 1.25,
	autoRotate: true,
	values: [
		{x: 100, y: -20},
		{x: 300, y: 10},
		{x: 500, y: 100},
		{x: 750, y: -100},
		{x: 350, y: -50},
		{x: 600, y: 100},
		{x: 800, y: 0},
		{x: window.innerWidth, y: -250}
	]
}

// gsap TimelineLite cdn
const tween = new TimelineLite();

// object to be animated, duration of animation, properties to be animated
tween.add(
	TweenLite.to('.paper-plane', 1, {
		bezier: flightPath,
		ease: Power1.easeInOut
	})
);


// Scroll magic cdn
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
	triggerElement: '.animation',
	duration: 5000,
	triggerHook: 0 
})
.setTween(tween)
.setPin('.animation')
.addTo(controller);