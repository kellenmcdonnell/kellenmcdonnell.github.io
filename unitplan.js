$(document).ready(function() {
    var element = $('.box');
    var originalY = element.offset().top;

    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > originalY) {
            $(element).css("top", scrollTop-originalY);
        }
    });
});