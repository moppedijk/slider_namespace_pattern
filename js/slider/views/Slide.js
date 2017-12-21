
/* Slide IIFE */
slider.views.Slide = (function() {
	
	// Var declarations
	var id = 0,
		generateHtml,
		show,
		hide;

	/** 
	 * Generate Html function
	 * @private
	 * @param {object} props - The html props
	 */
	generateHtml = function(props) {
		var html = '';

		html += '<div id=\'' + props.htmlId + '\' class=\'slider__slide\'>';
		html += '<img class=\'slider__image\' src=\'' + props.url + '\' alt=\'image\' />';
		html += '</div>';

		return html;
	};

	/** 
	 * Show function 
	 * @private
	 * @param {object} htmlId - The id of the slide
	 */
	show = function(htmlId) {
		var target = document.getElementById(htmlId);
		target.style.display = 'block';
	};

	/** 
	 * Hide function 
	 * @private
	 * @param {object} htmlId - The id of the slide
	 */
	hide = function(htmlId) {
		var target = document.getElementById(htmlId);
		target.style.display = 'none';
	};

	/** 
	 * Return Slide constructor 
	 * @constructor
	 * @param {object} props - Slide properties
	 */
	return function Slide (props) {

		// Var declarations
		var htmlId,
			url,
			title,
			link;

		// Increment constructor id
		id++;

		// Define props
		htmlId = 'image_' + id;
		url = props.url || false;
		title = props.title || 'Unknown';
		link = props.link || false;
		
		/**
		 * Get html function
		 * @public
		 */
		this.getHtml = function() {
			return generateHtml({
				htmlId: htmlId,
				url: url,
				title: title,
				link: link
			});
		};

		/**
		 * Show function
		 * @public
		 */
		this.show = function() {
			show(htmlId);
		};

		/**
		 * Hide function
		 * @public
		 */
		this.hide = function() {
			hide(htmlId);
		};

		/**
		 * Get id function
		 * @public
		 */
		this.getId = function() {
			return id;
		};

		/**
		 * Get html id
		 * @public
		 */
		this.getHtmlId = function() {
			return htmlId;
		};

		/**
		 * Get url function
		 * @public
		 */
		this.getUrl = function() {
			return url;
		};
	};

}());