import {Swiper} from 'swiper'
// import 'swiper/css';

import {Navigation, Pagination, Scrollbar, Thumbs, Controller} from 'swiper/modules';

new Swiper('.section-orders__slider', {
    modules: [Navigation],
    slidesPerView: 1.15,
	spaceBetween: 16,
    // Optional parameters
    direction: 'horizontal',
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
    // breakpoints: {
    //     320: {
    //         slidesPerView: 1.05,
    //         spaceBetween: 8,
    //     },
    //     1024: {
    //         slidesPerView: 3,
    //         spaceBetween: 24,
    //     },
    //     1600: {
    //         slidesPerView: 5,
    //         spaceBetween: 24,
    //     },
    // },
});
//
// new Swiper('.stocks__slider', {
//     modules: [Navigation, Pagination, Scrollbar],
//     slidesPerView: 4,
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     // If we need pagination
//     pagination: {
//         enabled: false
//     },
//     // Navigation arrows
//     navigation: {
//         enabled: false
//     },
//     // And if we need scrollbar
//     scrollbar: {
//         enabled: false,
//         hide: true
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1.05,
//             spaceBetween: 8,
//         },
//         1024: {
//             slidesPerView: 3,
//             spaceBetween: 24,
//         },
//         1600: {
//             slidesPerView: 4,
//             spaceBetween: 24,
//         },
//     },
// });
//
// new Swiper('.main-page__banner-slider', {
//     modules: [Navigation, Pagination, Scrollbar],
//     slidesPerView: 1,
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: '.main-page__banner-arrow-next',
//         prevEl: '.main-page__banner-arrow-prev',
//     },
//     // And if we need scrollbar
//     scrollbar: {
//         enabled: false,
//         hide: true
//     },
// });
//
// new Swiper('.products__slider', {
//     modules: [Navigation, Pagination, Scrollbar],
//     // slidesPerView: 4,
//     // spaceBetween: 40,
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     // If we need pagination
//     pagination: {
//         enabled: false,
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: '.products__slider-arrow-next',
//         prevEl: '.products__slider-arrow-prev',
//     },
//     // And if we need scrollbar
//     scrollbar: {
//         enabled: false,
//         hide: true
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1.2,
//             spaceBetween: 10,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         1025: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1600: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//     },
// });
//
// new Swiper('.product__compare-slider', {
//     modules: [Navigation, Pagination, Scrollbar],
//     // slidesPerView: 4,
//     // spaceBetween: 40,
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     // If we need pagination
//     pagination: {
//         enabled: false,
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: '.product__compare-slider-arrow-next',
//         prevEl: '.product__compare-slider-arrow-prev',
//     },
//     // And if we need scrollbar
//     scrollbar: {
//         enabled: false,
//         hide: true
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1.2,
//             spaceBetween: 10,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         1025: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1600: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//     },
// });
//
// new Swiper('.product__viewed-slider', {
//     modules: [Navigation, Pagination, Scrollbar],
//     // slidesPerView: 4,
//     // spaceBetween: 40,
//     // Optional parameters
//     direction: 'horizontal',
//     loop: false,
//     // If we need pagination
//     pagination: {
//         enabled: false,
//     },
//     // Navigation arrows
//     navigation: {
//         nextEl: '.product__viewed-slider-arrow-next',
//         prevEl: '.product__viewed-slider-arrow-prev',
//     },
//     // And if we need scrollbar
//     scrollbar: {
//         enabled: false,
//         hide: true
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1.2,
//             spaceBetween: 10,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         1025: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1600: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//         },
//     },
// });
//
// const productGalleryThumbs = new Swiper('.product__gallery-thumbs', {
//     slidesPerView: '4',
//     spaceBetween: "16",
//     freeMode: "true",
//     watchSlidesProgress: true,
// });
//
// const productGallery = new Swiper('.product__gallery-slider', {
//     modules: [Navigation, Pagination, Scrollbar, Thumbs],
//     slidesPerView: 'auto',
//     // spaceBetween: 40,
//     // Optional parameters
//     direction: 'horizontal',
//     autoHeight: true,
//     loop: false,
//     thumbs: {
//         swiper: productGalleryThumbs,
//     },
//     // If we need pagination
//
//     navigation: true,
//     // Navigation arrows
//     // navigation: {
//     // 	nextEl: '.product__viewed-slider-arrow-next',
//     // 	prevEl: '.product__viewed-slider-arrow-prev',
//     // },
//     scrollbar: {
//         enabled: false,
//         hide: true
//     },
//     breakpoints: {
//         320: {
//             pagination: {
//                 enabled: true,
//                 el: '.swiper-pagination',
//                 clickable: true,
//             }
//         },
//         564: {
//             pagination: {
//                 enabled: false,
//             },
//         },
//     },
// });
