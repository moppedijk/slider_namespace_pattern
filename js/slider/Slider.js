// Structure
// Clean up
// Optimization
// Simplify

var Slider = Slider || {};
Slider.views = Slider.views || {};
Slider.controllers = Slider.controllers || {};

(function(){

	/* Initialize (public). */
	Slider.init = function(props) {
		if(!props) {
			throw new Error('slider init has no props');
		}

		if(props.images && props.target) {
			Slider.start(props);
		}else {
			throw new Error('images or target are not defined in init');
		}
	};

	/* Render slider (public). */
	Slider.start = function(props) {
		var slides = [],
			controller,
			btnLeft,
			btnRight;
		
		// Construct slides
		for(var i = 0; i < props.images.length; i++) {
			slides.push(new Slider.views.Slide(props.images[i]));
		}

		// Construct Btns
		btnLeft = new Slider.views.Btn({
			label: 'left',
			orientation: 'left'
		});
		
		btnRight = new Slider.views.Btn({
			label: 'right',
			orientation: 'right'
		});
		
		// Render HTML elements
		Slider.render({
			images: slides,
			btnLeft: btnLeft,
			btnRight: btnRight,
			target: props.target
		});

		// Construct controller
		controller = new Slider.controllers.SliderController({
			images: slides,
			btnLeft: btnLeft,
			btnRight: btnRight,
			target: props.target
		});

		// Start at index controller
		controller.startAt(0);
	};

	Slider.render = function(props) {
		var target = document.getElementById(props.target),
			html = '';

		html += '<div class=\'slider\'>';
		html += props.btnLeft.html;
		html += props.btnRight.html;

		for(var i = 0; i < props.images.length; i++) {
			html+= props.images[i].html;
		}

		html += '</div>';

		target.innerHTML = html;
	};

}());