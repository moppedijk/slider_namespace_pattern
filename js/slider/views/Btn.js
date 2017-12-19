
/* Generate html (public) */
Slider.views.Btn = (function() {
	
	// Id
	var id = 0;

	// Generate Html
	var generateHtml = function(props) {
		var html = '';

		// Opening tag
		switch(props.orientation) {
		case 'left':
			html += '<div class=\'slider__btn slider__btn--left\'>';
			break;
		case 'right':
			html += '<div class=\'slider__btn slider__btn--right\'>';
			break;
		default:
			html += '<div class=\'slider__btn\'>';
			break;
		}

		// Anker
		html += '<a class=\'slider__btnlink\' id=\'btn_' + id + '\' href=\'javascript:void(0);\'>' + props.label + '</a>';

		// Closing tag
		html += '</div>';

		return html;
	};

	// Return constructor
	return function(props) {
		if(!props.label) {
			throw new Error('Label is not defined in btn');
		}

		if(!props.orientation) {
			throw new Error('Define btn orientation left (string) or right (string)');
		}

		id++;

		return {
			id: 'btn_' + id,
			html: generateHtml(props),
			visible: true,
			type: 'btn',
			orientation: props.orientation
		};
	};

}());