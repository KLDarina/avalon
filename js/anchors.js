import { closeMenu } from "./popup.js";

$(document).on("scroll", {
    passive: true
}, onScroll);

function anchorLink(elem, value, bool) {
    if (bool) {
        $(elem).click(function () {
            closeMenu();
            setTimeout(() => {
                $(document).off("scroll");

                let navLink = $(this).attr("href"),
                    dest = $(navLink).offset().top - value;
                $('html,body').stop().animate({
                    scrollTop: dest
                }, 800, function () {
                    $(document).on("scroll", {
                        passive: true
                    }, onScroll);
                });



            }, 800);
            $(elem).each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
            return false;
        });
    } else {
        $(elem).click(function () {
            $(document).off("scroll");

            let navLink = $(this).attr("href"),
                dest = $(navLink).offset().top - value;
            $('html,body').stop().animate({
                scrollTop: dest
            }, 800, function () {
                $(document).on("scroll", {
                    passive: true
                }, onScroll);
            });

            $(elem).each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            return false;
        });
    }

}

function onScrollElem(elem, value) {
    let scrollPos = $(document).scrollTop() + value;
    $(elem).each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
        if (refElement.offset().top - value <= scrollPos) {
            $(elem).removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

if (document.documentElement.clientWidth > 767) {
    anchorLink('.header__navigation a', 200, false);
} else {
    anchorLink('.menu__navigation a', 100, true);
}

function onScroll() {
    if (document.documentElement.clientWidth > 767) {
        onScrollElem('.header__navigation a', 500, document);
    } else {
        onScrollElem('.menu__navigation a', 100, document);
    }
}