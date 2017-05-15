function dayClick(day) {
    $title = $(day).next();
    $title.slideToggle(500);
}

function buttonMove() {
    var element = $('.box'),
        originalY = element.offset().top;
    var topMargin = 20;

    $(window).on('scroll', function(event) {
        var scrollTop = $(window).scrollTop();
    
        element.stop(false, false).animate({
            top: scrollTop < originalY
                ? 0
                : scrollTop - originalY + topMargin
        }, 175);
    });
}

$(document).ready(function() {
    $(".title").on('click', function () {
        dayClick(this);
    });

    $('.box').on("click", function() { 
        $(".title").each(function(i) {
            dayClick(this);
        });
        if( $('.box').text() == "Expand All") {
            $('.box').text("Contract All");
        }
        else {
            $('.box').text("Expand All");
        }
    });

    buttonMove();
});