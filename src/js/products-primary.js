const initializeProductPrimarySlider = (element) => {
    let numberDesktop = parseInt(element.getAttribute('data-number-slides'));
    let swiper = new Swiper(element, {
        slidesPerView: numberDesktop,
        spaceBetween: 30,
        pagination: {
            el: '.products-primary__pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: numberDesktop,
                spaceBetween: 30
            }
        }
    });
};

const productsPrimary = () => {
    const products_primary = [...document.querySelectorAll('.products-primary')];
    products_primary.map(section => {
        let slider = section.querySelector('.products-primary__slider');
        initializeProductPrimarySlider(slider);
    });
};

document.addEventListener('DOMContentLoaded', function () {
    productsPrimary();
});