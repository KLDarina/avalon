import { LANGUAGES } from "./constants.js";

let handleLanguages = () => {
    if (LANGUAGES.parentNode.classList.contains("open")) {
        LANGUAGES.parentNode.classList.remove("open");
    } else {
        LANGUAGES.parentNode.classList.add("open");
    }
    $(document).mouseup(function (event) {
        if ($(".languages").has(event.target).length === 0) {
            LANGUAGES.parentNode.classList.remove("open");
        }
    });
}

LANGUAGES.addEventListener("click", handleLanguages);