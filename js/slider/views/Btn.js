
/* Generate html (public) */
Slider.views.Btn = (function() {
	// Id
	var id = 0;

	// Generate Html
	var generateHtml = function(props) {
		var html = '';

		html += '<div>';
		html += '<a href=\'javascript:void(0);\'>' + props.label + '<a/>';
		html += '</div>';

		return html;
	};

	// Return constructor
	return function(props) {
		id++;

		if(!props.label) {
			throw new Error('Label is not defined in btn');
		}

		return {
			id: id,
			html: generateHtml(props),
			visible: true
		};
	};

}());