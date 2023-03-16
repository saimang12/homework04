$(function () {
    $('.mainVisual .arrow').click(function () {
        $('html, body').animate({ scrollTop: 800 }, 500);
    });


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        };
    });

    $('.family_site').click(function () {
        $('.family_link').toggleClass("on");
    });

    $('.toTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });









});






