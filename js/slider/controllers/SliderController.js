
/* Slider Controller */
Slider.controllers.SliderController = (function() {

	// Slide Index
	var slideIndex;

	var slides;
	
	// Btn left
	var btnLeft = false;

	// Btn right
	var btnRight = false;

	// On Btn Click Handler
	var onBtnLeftClick = function(e) {
		next();
	};

	// On Btn Click Handler
	var onbtnRightClick = function(e) {
		prev();
	};

	var showSlide = function(index) {

	};

	var next = function() {

	};

	var prev = function() {

	};

	// Return constructor
	return function(props) {

		// Slides
		slides = props.images;

		// Buttons
		btnLeft = document.getElementById(props.btnLeft.id);
		btnRight = document.getElementById(props.btnRight.id);
		btnLeft.addEventListener('click', onBtnLeftClick);
		btnRight.addEventListener('click', onbtnRightClick);

		// Start Controller
		this.startAt = function(index) {
			slideIndex = index || 0;
			showSlide(slideIndex);
		};

		this.nextSlide = function() {
			next();
		};

		this.prevSlide = function() {
			prev();
		};

	};

}());