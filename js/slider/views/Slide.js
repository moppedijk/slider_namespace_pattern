
/* Generate html (public) */
Slider.views.Slide = (function() {
	// Id
	var id = 0;

	// Generate Html
	var generateHtml = function(props) {
		var html = '';

		html += '<div id=\'image_' + id + '\' class=\'slider__slide\'>';
		html += '<img class=\'slider__image\' src=\'' + props.url + '\' alt=\'image\' />';
		html += '</div>';

		return html;
	};

	// Return constructor
	return function(props) {
		id++;

		return {
			id: 'image_' + id,
			html: generateHtml(props),
			visible: true,
			type: 'image'
		};
	};

}());