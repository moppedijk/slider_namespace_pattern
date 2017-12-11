// Structure
// Clean up
// Optimization

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
        slides = [];

        // Construct slides
        for(i = 0; i < images.length; i++) {
            var Slide = Slider.views.Slide;
            slides.push(new Slide(images[i]));
        }

        // Add to controller

    };

}());