// $('.wrapper').addclass('loaded');

$('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

function ibg(){
    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
} 
ibg();


$(document).ready(function () {
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        speed: 800,
        waitForAnimate: true,
    });
});

// $(document).ready(function() {
//     $('subscribe__form').submit(function(e) {
//         e.preventDefault();
//         var email = $('.input').val();

//         $(".error").remove();

//         if (email.length< 1) {
//             $('.input').after('<span class="error">This field is required</span>');
//         } else {
//             var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/;
//             var validEmail = regEx.test(email);
//             if (!validEmail) {
//                 $('.input').after('<span class="error">Enter a valid email</span>');
//             }
//         }
//     });
// });



