const LIST = [
    // Баннеры
    '.global-banner-2',
    '.global-banner',

    // Промо-карусели
    '.fanfic-promo-carousel',
    '.home-promo',

    // Скидки и премиум
    '.discount-sticky-container',
    '.main-discount',
    '.btn-on-book-background--premium',
    '.premium-button',
    '.webview-paid-content',
    '.premium-descriptions',
    '.primary-box-with-button.flex-column.align-items-start',

    // Реклама приложения
    'app-install-ads',
    '.page-footer-apps',
    '.app-card',
    '.install-link',
    '.android-smart-banner',
    '.open-in-reader',

    'wheel-of-fortune-modal'
];

document.querySelectorAll(LIST.join(',')).forEach(el => el.remove());

setTimeout(() => {
    document.querySelector('#notificationsSubscribeModal')?.remove();
    document.querySelector('.modal-backdrop')?.remove();
    document.body.classList.remove('modal-open');
}, 200);