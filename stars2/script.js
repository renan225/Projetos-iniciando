function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg"
        document.querySelector('.principal').style.cssText = 'margin-top: 0px;'
    } else {
        document.querySelector('.principal').style.cssText = 'margin-top: 40%;'
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg"
    }
}

