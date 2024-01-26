"use strict";

$(document).ready(function () {
    if (window.innerWidth < 1200) {
        $(".highlight, #banner_mobile").slick({
            dots: true,
            arrows: false,
            autoplay: true,
            pauseOnHover: false
        });

        // Slick das categorias em destaque - desativado e usando
        // carrosel nativo html e css
        //$(".highlightBanners__content").slick({
            //slidesToShow: 2,
            //slidesToScroll: 1,
            //infinite: true,
            //autoplay: true,
            //autoplaySpeed: 3800,
            //arrows: false,
            //dots: true
        //});

        //setTimeout(function () {
            $(".slick-it").each(function () { $(this).slick('unslick'); });
            
            $(".slick-it").each(function () {
                $(this).slick({
                    slidesToShow: 2,
                    dots: true,
                    arrows: true,
                    prevArrow: "<i id='prev_arrow__custom' class='fa-solid fa-circle-chevron-left arrow-custom'></i>",
                    nextArrow: "<i id='next_arrow__custom' class='fa-solid fa-circle-chevron-right arrow-custom'></i>",
                    autoplay: false
                });
            });
        //}, 3000);

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

        $(".bestSellers .shelf ul, .shelfNews .shelf ul").slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            arrows: true,
            autoplay: false
        });
    }
});