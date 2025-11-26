const swiper = new Swiper('.swiper', {
    loop: true,

    spaceBetween: 10,

    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        992: {
            slidesPerView: 3
        },
        867: {
            slidesPerView: 2
        },
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});