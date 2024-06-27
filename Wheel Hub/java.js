$(function () {

    var $slider = $('.sliderr')
    var $sliderContainer = $('.carousel')
    var $slides = $sliderContainer.find('.carousel-image')

    var slideWidth = $slides.width()
    var slideHeight = $slides.height()
    var slideCount = $slides.length
    var totalWidth = slideCount * slideWidth

    //bikin frame
    $slider.css({
        width:slideWidth,
        height: slideHeight
    })
    // Ensure the slider container width is correctly set
    $sliderContainer.css({
        width:totalWidth,
        marginLeft:-slideWidth,
        transition: "margin 0.5s ease-in-out"
    });

    var currIndex = 0

    function moveSlider() {
        currIndex++;
        if (currIndex >= slideCount) {
            currIndex = 0
        }

        var newMarginLeft = currIndex * -slideWidth

        $sliderContainer.css({
            marginLeft:newMarginLeft
        });
    }

    setInterval(() =>{
        moveSlider()
    }, 4000);
});
