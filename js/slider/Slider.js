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
		var target,
			images = props.images,
			i,
			slides = [],
			controller,
			btnLeft,
			btnRight;

		// Target
		target = document.getElementById(props.target);
		
		// Construct slides
		for(i = 0; i < images.length; i++) {
			slides.push(new Slider.views.Slide(images[i]));
		}

		// Construct Btns
		btnLeft = new Slider.views.Btn({
			label: 'left'
		});
		btnRight = new Slider.views.Btn({
			label: 'right'
		});

		// Construct controller
		controller = new Slider.controllers.SliderController({
			images: slides,
			btnLeft: btnLeft,
			btnRight: btnRight,
			target: target
		});

		// controller.yolo();
	};

}());