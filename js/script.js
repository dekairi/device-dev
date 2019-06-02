window.addEventListener('DOMContentLoaded', function () {
    let btnWriteUs = document.querySelector('#write-us-btn');
    let elFeedback = document.querySelector('#feedback');
    let btnCloseFeedback = document.querySelector("#btn-close-feedback");

    let map = document.querySelector('#small-map');
    let elMap = document.querySelector('#big-map');
    let btnCloseMap = document.querySelector('#btn-close-map');

    btnWriteUs.addEventListener('click', function (event) {
        event.preventDefault();
        elFeedback.classList.add('modal--show');
        elFeedback.classList.remove('modal--hide');
    });

    btnCloseFeedback.addEventListener('click', function () {
        elFeedback.classList.remove('modal--show');
        elFeedback.classList.add('modal--hide');
    });

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
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
});
