import { BURGER, BUTTONS_FOR_POPUP, DROP_ITEMS, INPUT_CURRENT, INPUT_SELECT, MENU, MENU_CLOSE, POPUP, POPUP_CLOSE, POPUP_CONTENT, POPUP_WRAP } from "./constants.js";

window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

const openPopup = () => {
    POPUP_WRAP.classList.remove("fade-out");
    POPUP.classList.add("open");
    POPUP_WRAP.classList.add("fade-in");
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
}

const closePopup = () => {
    POPUP_WRAP.classList.remove("fade-in");
    POPUP_WRAP.classList.add("fade-out");
    setTimeout(() => {
        POPUP.classList.remove("open");
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, 800);

    if (INPUT_SELECT.classList.contains("open")) {
        INPUT_SELECT.classList.remove("open");
    }
}

const openMenu = () => {
    MENU.classList.remove("fade-out");
    MENU.classList.add("open");
    MENU.classList.add("fade-in");
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
}

const closeMenu = () => {
    MENU.classList.remove("fade-in");
    MENU.classList.add("fade-out");
    setTimeout(() => {
        MENU.classList.remove("open");
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, 800);
}

for (let i = 0; i < BUTTONS_FOR_POPUP.length; i++) {
    BUTTONS_FOR_POPUP[i].addEventListener("click", openPopup);
}

POPUP_CLOSE.addEventListener("click", closePopup);

const handleInput = () => {
    if (INPUT_SELECT.classList.contains("open")) {
        INPUT_SELECT.classList.remove("open");
    } else {
        INPUT_SELECT.classList.add("open");
    }
}

INPUT_CURRENT.addEventListener("click", handleInput);

BURGER.addEventListener("click", openMenu);
MENU_CLOSE.addEventListener("click", closeMenu);

DROP_ITEMS.forEach(item => {
    item.addEventListener("click", function() {
        INPUT_CURRENT.innerText = item.innerText;
        handleInput();
    })
})

export { closeMenu };