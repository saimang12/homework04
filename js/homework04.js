$(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('on');
        } else {
            $('.header').removeClass('on');
        };
    });

    $('.headIcon i:last-child()').on('click', function () {
        $('.header .gnb').toggleClass('on');
        if ($('.gnb').hasClass('on')) {
            $('.cover').addClass('on');
        } else {
            $('.cover').removeClass('on');
        };
    });

    $('.header .gnb>ul>li>a').on('click', function () {
        $(this).parent().toggleClass('on');
    });

    $('.header,.gnb').on('wheel', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
        }
    });

    $('.cover').on('wheel', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
        };
    });





    $('.mainVisual .arrow').click(function () {
        $('html, body').animate({ scrollTop: 800 }, 500);
    });

    $('.family_site').click(function () {
        $('.family_link').toggleClass("on");
    });

    $('.toTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });









});






