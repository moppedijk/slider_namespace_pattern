
/* Generate html (public) */
Slider.views.Btn = (function() {
	
	// Id
	var id = 0;

	// Generate Html
	var generateHtml = function(props) {
		var html = '';

		// Opening tag
		switch(props.type) {
		case 'prev':
			html += '<div class=\'slider__btn slider__btn--prev\'>';
			break;
		case 'next':
			html += '<div class=\'slider__btn slider__btn--next\'>';
			break;
		default:
			html += '<div class=\'slider__btn\'>';
			break;
		}

		// Anker
		html += '<a class=\'slider__btnlink\' id=\'' + props.htmlId + '\' href=\'javascript:void(0);\'>' + props.label + '</a>';

		// Closing tag
		html += '</div>';

		return html;
	};

	// Return constructor
	return function(props) {
		var htmlId,
			type,
			label;

		// Increment id	
		id++;

		htmlId = 'btn_' + id;
		type = props.type;
		label = props.label;

		this.getHtml = function() {
			return generateHtml({
				htmlId: htmlId,
				type: type,
				label: label
			});
		};

		this.getId = function() {
			return id;
		};

		this.getHtmlId = function() {
			return htmlId;
		};

		this.gettype = function() {
			return type;
		};
	};

}());