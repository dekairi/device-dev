window.addEventListener("DOMContentLoaded", function () {
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

    btnSearch.addEventListener("focusout", function () {
        btnSearch.style.visibility = "hidden";
    });

    //menu focus
    let btnCatalogMenu = document.querySelector(".catalog-btn");
    let elSubCatalog = document.querySelector(".catalog-submenu");
    btnCatalogMenu.addEventListener("keydown", function (evt) {
        if (evt.key === "Enter") {
            evt.preventDefault();
            elSubCatalog.classList.add("subcatalog--show");
        }
    });

    let elDeliveryBtn = document.querySelector(".menu-item:nth-child(2) a");
    btnCatalogMenu.addEventListener("focus", function () {
        elSubCatalog.classList.remove("subcatalog--show");
    });
    elDeliveryBtn.addEventListener("focus", function () {
        elSubCatalog.classList.remove("subcatalog--show");
    });

    //checkboxes and radio
    let chboxes = document.querySelectorAll(".checkbox");

    for (let i = 0; i < chboxes.length; i++) {
        chboxes[i].addEventListener("keydown", function (evt) {
            if (evt.key === " ") {
                evt.preventDefault();
                changeCheckbox(chboxes[i], chboxes[i].querySelector("input"));
            }
        });

        chboxes[i].addEventListener("click", function () {
            changeCheckbox(chboxes[i], chboxes[i].querySelector("input"));
        });
    }

    function changeCheckbox(checkbox, input) {
        switch (checkbox.getAttribute("aria-checked")) {
            case "true":
                checkbox.setAttribute("aria-checked", "false");
                input.removeAttribute("checked");
                break;
            case "false":
                checkbox.setAttribute("aria-checked", "true");
                input.setAttribute("checked", "checked");
                break;
        }
    }

    let radios = document.querySelectorAll(".radio");

    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("keydown", function (evt) {
            if (evt.key === "ArrowDown") {
                evt.preventDefault();
                if (i !== radios.length - 1) {
                    changeCurrentRadioButton(radios[i], radios[i].querySelector("input"));
                    setFocusOnNextOrPreviousItem(radios[i + 1], radios[i + 1].querySelector("input"));
                }
            }
            if (evt.key === "ArrowUp") {
                evt.preventDefault();
                if (i !== 0) {
                    changeCurrentRadioButton(radios[i], radios[i].querySelector("input"));
                    setFocusOnNextOrPreviousItem(radios[i - 1], radios[i - 1].querySelector("input"));
                }
            }
        });

        radios[i].addEventListener("click", function () {
            for (let j = 0; j < radios.length; j++) {
                radios[j].setAttribute("tabindex", "-1");
                radios[j].setAttribute("aria-checked", "false");
                radios[j].querySelector("input").removeAttribute("checked");
            }
            radios[i].setAttribute("tabindex", "0");
            radios[i].setAttribute("aria-checked", "true");
            radios[i].querySelector("input").setAttribute("checked", "checked");
        });
    }

    function changeCurrentRadioButton(elRadioButton, elRadioInput) {
        elRadioButton.setAttribute("tabindex", "-1");
        elRadioButton.setAttribute("aria-checked", "false");
        elRadioInput.removeAttribute("checked");
    }

    function setFocusOnNextOrPreviousItem(elNext, elRadioInput) {
        elNext.setAttribute("tabindex", "0");
        elNext.setAttribute("aria-checked", "true");
        elNext.focus();
        elRadioInput.setAttribute("checked", "checked");
    }
});
