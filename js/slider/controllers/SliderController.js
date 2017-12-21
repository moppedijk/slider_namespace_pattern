
/* Slider Controller */
Slider.controllers.SliderController = (function() {

	// Slide Index
	var slideIndex;

	// Slides
	var slides;

	// On Btn Click Handler
	var onBtnLeftClick = function(e) {
		prev();
	};

	// On Btn Click Handler
	var onbtnRightClick = function(e) {
		next();
	};

	var showSlide = function(index) {
		if(index > slides.length) {
			throw new Error('Show Slide index is to large! It needs to be smaller or equal to: ' + slides.length);
		}else {
			for(var i = 0; i < slides.length; i++) {
				if(slides.indexOf(slides[i]) === index) {
					slides[i].show();
				}else {
					slides[i].hide();
				}
			}
		}
	};

	// Btn right
	var next = function() {
		if(slideIndex >= (slides.length - 1)) {
			showSlide(0);
			slideIndex = 0;
		}else {
			slideIndex++;
			showSlide(slideIndex);
		}
	};

	// Btn left
	var prev = function() {
		if(slideIndex <= 0) {
			showSlide((slides.length -1));
			slideIndex = (slides.length - 1);
		}else {
			slideIndex--;
			showSlide(slideIndex);
		}
	};

	// Return constructor
	return function(props) {

		// Slides
		slides = props.images;

		// Buttons
		var btnLeft = document.getElementById(props.btnLeft.id);
		var btnRight = document.getElementById(props.btnRight.id);
		btnLeft.addEventListener('click', onBtnLeftClick);
		btnRight.addEventListener('click', onbtnRightClick);

		// Start Controller
		this.startAt = function(index) {
			slideIndex = index || 0;
			showSlide(slideIndex);
		};
	};

}());