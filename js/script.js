window.addEventListener('DOMContentLoaded', function () {
    let btnWriteUs = document.getElementById('write-us-btn');
    let elFeedback = document.getElementById('feedback');
    let elForm = elFeedback.querySelector(".feedback-form");
    let btnCloseFeedback = document.getElementById("btn-close-feedback");

    let elName = elFeedback.querySelector(".feedback-name");
    let elEmail = elFeedback.querySelector(".feedback-email");
    let elMessage = elFeedback.querySelector(".feedback-message");

    let isStorageSupport = true;
    let storage = {};

    let map = document.querySelector('#small-map');
    let elMap = document.querySelector('#big-map');
    let btnCloseMap = document.querySelector('#btn-close-map');

    try {
        storage["name"] = localStorage.getItem("name");
        storage["email"] = localStorage.getItem("email");
    } catch (err) {
        isStorageSupport = false;
    }

    btnWriteUs.addEventListener('click', function (evt) {
        evt.preventDefault();
        elFeedback.classList.add('modal--show');
        emptyFields();
        if (storage) {
            elName.value = storage["name"];
            elEmail.value = storage["email"];
            elMessage.focus();
        } else {
            elName.focus();
        }
    });

    btnCloseFeedback.addEventListener('click', function (evt) {
        evt.preventDefault();
        elFeedback.classList.remove('modal--show');
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.key === "Escape") {
            if (elFeedback.classList.contains("modal--show")) {
                elFeedback.classList.remove("modal--show");
                elFeedback.classList.remove("modal--error");
                elName.classList.remove("input--error");
                elEmail.classList.remove("input--error");
                elMessage.classList.remove("textarea--error");
            }

            elMap.classList.remove('modal--show');
        }
    });

    elForm.addEventListener("submit", function (evt) {
        if (!elName.value || !elEmail.value || !elMessage.value) {
            evt.preventDefault();
            elFeedback.classList.remove("modal--error");
            elFeedback.offsetWidth = elFeedback.offsetWidth;
            elFeedback.classList.add("modal--error");
            if (!elName.value) {
                elName.focus();
                elName.classList.add("input--error");
            }
            if (!elEmail.value) {
                elEmail.focus();
                elEmail.classList.add("input--error");
            }
            if (!elMessage.value) {
                elMessage.focus();
                elMessage.classList.add("textarea--error");
            }
        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", elName.value);
                localStorage.setItem("email", elEmail.value);
            }
        }
    });

    let emptyFields = function() {
        elName.value = "";
        elEmail.value = "";
        elMessage.value = "";
    };

    //map
    map.addEventListener('click', function (evt) {
        evt.preventDefault();
        elMap.classList.add('modal--show');
    });

    btnCloseMap.addEventListener('click', function (evt) {
        evt.preventDefault();
        elMap.classList.remove('modal--show');
    });

    ymaps.ready(init);
    function init() {
        let elMap = document.querySelector(".map-image--wrap");
        elMap.classList.toggle("map-image--hide");
        let elInteractiveMap = document.querySelector(".interactive-map");
        elInteractiveMap.classList.toggle("interactive-map--show");

        let myMap = new ymaps.Map("map", {
                center: [55.686980, 37.529654],
                zoom: 17,
                controls: []
            }, {
                searchControlProvider: "yandex#search"
            }),

            MyIconContentLayout = new ymaps.templateLayoutFactory.createClass(
                "<div style='color: #FFFFFF; font-weight: bold;'>$[properties.iconContent]</div>"
            ),

            myPlacemark = new ymaps.Placemark([55.686980, 37.529654], {
                hintContent: "",
                balloonContent: ""
            });

        myMap.geoObjects.add(myPlacemark);
    }

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
            infoSlides[i].classList.add("info--current");
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
