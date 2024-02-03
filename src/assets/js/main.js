/*
=========================================================
* Atomik - Multipurpose Bootstrap 5 Template
=========================================================
* Product Page: https://github.com/nextuidesign/atomik-multipurpose-bootstrap-template
* Copyright 2024 NEXT UI DESIGN (https://nextui.design/)
* Designed and coded by https://nextui.design/
========================================================= */

//
// Main js
//
'use strict';
(function() {

})();

var mySwiper1 = document.querySelector('.hero-swiper').slider;

mySwiper1 = new Swiper('.hero-swiper', {
    grabCursor: false,
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    autoplay: {
        delay: 1,
    },
    freeMode: true,
    speed: 5000,
});

