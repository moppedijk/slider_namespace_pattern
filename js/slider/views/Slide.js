
/* Generate html (public) */
Slider.views.Slide = (function() {
	// Id
	var id = 0;

	// Generate Html
	var generateHtml = function(props) {
		var html = '';

		html += '<div id=\'' + props.htmlId + '\' class=\'slider__slide\'>';
		html += '<img class=\'slider__image\' src=\'' + props.url + '\' alt=\'image\' />';
		html += '</div>';

		return html;
	};

	// Show element
	var show = function(htmlId) {
		var target = document.getElementById(htmlId);
		target.style.display = "block";
	};

	// Hide element
	var hide = function(htmlId) {
		var target = document.getElementById(htmlId);
		target.style.display = "none";
	};

	// Return constructor
	return function(props) {
		var htmlId,
			url,
			title,
			link;

		// Increment id
		id++;

		htmlId = 'image_' + id;
		url = props.url;
		title = props.title;
		link = props.link;
		
		this.getHtml = function() {
			return generateHtml({
				htmlId: htmlId,
				url: url,
				title: title,
				link: link
			});
		};

		this.show = function() {
			show(htmlId);
		};

		this.hide = function() {
			hide(htmlId);
		};

		this.getId = function() {
			return id;
		};

		this.getHtmlId = function() {
			return htmlId;
		};

		this.getUrl = function() {
			return url;
		};
	};

}());