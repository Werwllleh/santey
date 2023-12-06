import {Swiper} from 'swiper'
// import 'swiper/css';

import {Navigation, Pagination, Scrollbar, Thumbs, Controller} from 'swiper/modules';

new Swiper('.section-orders__slider', {
    modules: [Navigation],

    // Optional parameters
    direction: 'horizontal',
	autoHeight: true,
    loop: false,

    // If we need pagination
    pagination: {
        enabled: false
    },
    // And if we need scrollbar
    scrollbar: {
        enabled: false,
        hide: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.section-orders__navigation-arrow-next',
        prevEl: '.section-orders__navigation-arrow-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        1024: {
			slidesPerView: 1.15,
			spaceBetween: 16,
        },
        // 1600: {
        //     slidesPerView: 5,
        //     spaceBetween: 24,
        // },
    },
});
