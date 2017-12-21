// Namespace
var slider = slider || {};
slider.views = slider.views || {};
slider.controllers = slider.controllers || {};

/* IIFE */
(function(){

	/** 
	 * Initialize function 
	 * @public
	 * @param {object} props - Slide init properties
	 */
	slider.init = function init (props) {

		// Check if props is true
		if(!props) {
			throw new Error('Slider init has no props');
		}

		// Check if props has images and target
		if(props.images && props.target) {
			
			// Start slider
			slider.start(props);
		}else {
			throw new Error('Images or target are not defined in init');
		}
	};

	/** 
	 * Start slider function. 
	 * @public
	 * @param {object} props - Same props as init
	 */
	slider.start = function start (props) {

		// Var declarations
		var slides = [],
			controller,
			btnPrev,
			btnNext;
		
		// Construct slides	
		for(var i = 0; i < props.images.length; i++) {
			slides.push(new slider.views.Slide(props.images[i]));
		}

		// Construct Btn prev
		btnPrev = new slider.views.Btn({
			label: 'left',
			type: 'prev'
		});
		
		// Contruct Btn next
		btnNext = new slider.views.Btn({
			label: 'right',
			type: 'next'
		});
		
		// Render HTML elements in target
		slider.render({
			images: slides,
			btnPrev: btnPrev,
			btnNext: btnNext,
			target: props.target
		});

		// Construct controller
		controller = new slider.controllers.SliderController({
			images: slides,
			btnPrev: btnPrev,
			btnNext: btnNext
		});

		// Start at controller index
		controller.startAt(0);
	};

	/** 
	 * Render slider function 
	 * @public
	 * @param {object} props - The html render props
	 */
	slider.render = function render (props) {

		// Var declarations
		var target = document.getElementById(props.target),
			html = '';

		// Start html
		html += '<div class=\'slider\'>';

		// Add buttons
		html += props.btnPrev.getHtml();
		html += props.btnNext.getHtml();

		// Loop trough images
		for(var i = 0; i < props.images.length; i++) {
			html+= props.images[i].getHtml();
		}

		// End html
		html += '</div>';

		// Add html to target
		target.innerHTML = html;
	};

}());