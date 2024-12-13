function toggleClass(element, className) {
    if (element.hasClass(className)) {
        element.removeClass(className);
    }
    else {
        element.addClass(className);
    }
}

$(document).ready(function() {
    let menuToggle = $('.menu-toggle');
    let nav = $('nav');
    let closeMenu = $('.close-menu');
    menuToggle.click(function() {
        toggleClass(nav, 'active');
    });
    closeMenu.click(function() {
        nav.removeClass('active');
    });

    let itemWidth = $(window).width() - 20 * 2;
    $('.carousel-item').each(function() {
        $(this).css('flex', `0 0 ${itemWidth}px`);
    });
    $(window).resize(function() {
        itemWidth = $(window).width() - 20 * 2;
        $('.carousel-item').each(function() {
            $(this).css('flex', `0 0 ${itemWidth}px`);
        });
    });
});