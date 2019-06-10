window.addEventListener('DOMContentLoaded', function () {
    let btnWriteUs = document.querySelector('#write-us-btn');
    let elFeedback = document.querySelector('#feedback');
    let btnCloseFeedback = document.querySelector("#btn-close-feedback");

    let map = document.querySelector('#small-map');
    let elMap = document.querySelector('#big-map');
    let btnCloseMap = document.querySelector('#btn-close-map');

    btnWriteUs.addEventListener('click', function (evt) {
        evt.preventDefault();
        elFeedback.classList.add('modal--show');
        elFeedback.classList.remove('modal--hide');
    });

    btnCloseFeedback.addEventListener('click', function () {
        elFeedback.classList.remove('modal--show');
        elFeedback.classList.add('modal--hide');
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.key === "Escape") {
            elFeedback.classList.remove('modal--show');
            elFeedback.classList.add('modal--hide');
            elMap.classList.remove('modal--show');
            elMap.classList.add('modal--hide');
        }
    });

    map.addEventListener('click', function () {
        elMap.classList.add('modal--show');
        elMap.classList.remove('modal--hide');
    });

    btnCloseMap.addEventListener('click', function () {
        elMap.classList.remove('modal--show');
        elMap.classList.add('modal--hide');
    });

    //slider
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".slider-dot-item");

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            removeActiveStatusFromDots();
            dots[i].classList.add("slider-dot-item--current");
            removeActiveStatusFromSlides();
            slides[i].classList.add("slide--active");
        });
    }

    function removeActiveStatusFromDots() {
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("slider-dot-item--current");
        }
    }

    function removeActiveStatusFromSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("slide--active");
        }
    }

    //search focus
    let inputSearch = document.querySelector(".search");
    let btnSearch = document.querySelector(".search-btn");

    inputSearch.addEventListener("keydown", function (evt) {
        if (evt.key === "Tab") {
            evt.preventDefault();
            btnSearch.style.visibility = "visible";
            btnSearch.focus();
        }
    });

    //slide-show information
    let lisInfo = document.querySelectorAll(".info-menu-item");
    let btnsInfo = document.querySelectorAll(".info-menu-item .btn");
    let infoSlides = document.querySelectorAll(".info-item");

    for (let i = 0; i < lisInfo.length; i++) {
        lisInfo[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            removeActiveStatusFromButtons();
            lisInfo[i].classList.add("info-menu--current");
            btnsInfo[i].classList.add("btn--current");
            removeActiveStatusFromInfoSlides();
            slides[i].classList.add("info--current");
        });
    }

    function removeActiveStatusFromButtons() {
        for (let i = 0; i < lisInfo.length; i++) {
            lisInfo[i].classList.remove("info-menu--current");
        }

        for (let i = 0; i < btnsInfo.length; i++) {
            btnsInfo[i].classList.remove("btn--current");
        }
    }

    function removeActiveStatusFromInfoSlides() {
        for (let i = 0; i < infoSlides.length; i++) {
            infoSlides[i].classList.remove("info--current");
        }
    }
});
