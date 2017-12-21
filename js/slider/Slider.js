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

	/* Start slider (public). */
	Slider.start = function(props) {
		var slides = [],
			controller,
			btnPrev,
			btnNext;
		
		// Construct slides	
		for(var i = 0; i < props.images.length; i++) {
			slides.push(new Slider.views.Slide(props.images[i]));
		}

		// Construct Btns
		btnPrev = new Slider.views.Btn({
			label: 'left',
			type: 'prev'
		});
		
		btnNext = new Slider.views.Btn({
			label: 'right',
			type: 'next'
		});
		
		// Render HTML elements
		Slider.render({
			images: slides,
			btnPrev: btnPrev,
			btnNext: btnNext,
			target: props.target
		});

		// Construct controller
		controller = new Slider.controllers.SliderController({
			images: slides,
			btnPrev: btnPrev,
			btnNext: btnNext
		});

		// Start at index controller
		controller.startAt(0);
	};

	/* Render slider */
	Slider.render = function(props) {
		var target = document.getElementById(props.target),
			html = '';

		html += '<div class=\'slider\'>';
		html += props.btnPrev.getHtml();
		html += props.btnNext.getHtml();

		for(var i = 0; i < props.images.length; i++) {
			html+= props.images[i].getHtml();
		}

		html += '</div>';

		target.innerHTML = html;
	};

}());