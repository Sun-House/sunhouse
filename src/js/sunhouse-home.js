"use strict";
$(document).ready(function () {
    if (window.innerWidth < 1200) {
        $(".highlight, #banner_mobile").slick({
            dots: true,
            arrows: false,
            autoplay: true,
            pauseOnHover: false
        });

        $(".highlights__content-slide").slick({
            dots: true,
            arrows: false,
            autoplay: false
        });
    } else {
        $(".highlight").slick({
            dots: true,
            arrows: true,
            autoplay: true,
            pauseOnHover: false
        });

        $(".highlights__content-slide").slick({
            dots: false,
            arrows: true,
            autoplay: false
        });

        // SmartHint ?? - VER
        //$(".bestSellers .shelf ul, .shelfNews .shelf ul").slick({
            //slidesToShow: 4,
            //slidesToScroll: 4,
            //dots: false,
            //arrows: true,
            //autoplay: false
        //});
    }
});