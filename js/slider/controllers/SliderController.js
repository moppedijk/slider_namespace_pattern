
/* SliderController IIFE */
slider.controllers.SliderController = (function() {

	// Var declarations
	var slideIndex,
		slides,
		onBtnPrevClick,
		onBtnNextClick,
		showSlide,
		next,
		prev;

	/**
	 * On Btn Prev Click handler
	 * @private
	 */
	onBtnPrevClick = function() {
		prev();
	};

	/**
	 * On Btn Click handler
	 * @private
	 */
	onBtnNextClick = function() {
		next();
	};

	/**
	 * Show slide function
	 * @private
	 */
	showSlide = function(index) {
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

	/**
	 * Next slide function
	 * @private
	 */
	next = function() {
		if(slideIndex >= (slides.length - 1)) {
			showSlide(0);
			slideIndex = 0;
		}else {
			slideIndex++;
			showSlide(slideIndex);
		}
	};

	/**
	 * Prev slide function
	 * @private
	 */
	prev = function() {
		if(slideIndex <= 0) {
			showSlide((slides.length -1));
			slideIndex = (slides.length - 1);
		}else {
			slideIndex--;
			showSlide(slideIndex);
		}
	};

	/**
	 * Slide Controller constructor
	 * @constructor
	 * @param {object} props - SLide Controller properties
	 */
	return function SlideController (props) {
		var btnNext,
			btnPrev;

		// Slides
		slides = props.images || false;

		// Buttons
		btnPrev = document.getElementById(props.btnPrev.getHtmlId());
		btnNext = document.getElementById(props.btnNext.getHtmlId());
		btnPrev.addEventListener('click', onBtnPrevClick);
		btnNext.addEventListener('click', onBtnNextClick);

		/**
		 * Start at function
		 * @public
		 * @param {number} index 
		 */
		this.startAt = function(index) {
			slideIndex = index || 0;
			showSlide(slideIndex);
		};
	};

}());