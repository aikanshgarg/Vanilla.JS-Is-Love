//paste this code under the head tag or in a separate js file.
  // Wait for window load
$(window).load(function() {
// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});



//When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}