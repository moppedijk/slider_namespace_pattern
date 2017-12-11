(function(){

    /* Generate html (public) */
    Slider.views.Slide = (function(){

        // Id
        var id = 0;

        // Generate Html
        var generateHtml = function(image) {
            var html = '';

            html += '<div>';
            html += '<img src=\'' + image.url + '\'/>';
            html += '</div>';

            return html;
        }

        // Return constructor
        return function(image) {
            id++;

            return {
                id: id,
                html: generateHtml(image),
                visible: true
            }
        };

    }());

}());