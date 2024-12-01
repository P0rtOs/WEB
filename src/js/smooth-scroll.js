$('a[href*="#"]').click(function (event) {
    const href = $(this).attr('href');
    const targetId = href.split('#')[1];
    const targetPage = href.split('#')[0];

    if (targetPage === '' || window.location.pathname === targetPage) {
        if ($('#' + targetId).length) {
            $('html, body').animate(
                {
                    scrollTop: $('#' + targetId).offset().top - 120,
                },
                500
            );
        }
    } else {
        event.preventDefault();
        sessionStorage.setItem('scrollToId', targetId);
        window.location.href = href.split('#')[0];
    }

    return false;
});


$(document).ready(function () {
    const scrollToId = sessionStorage.getItem('scrollToId');
    if (scrollToId && $('#' + scrollToId).length) {
        $('html, body').animate(
            {
                scrollTop: $('#' + scrollToId).offset().top - 120,
            },
            500
        );
        sessionStorage.removeItem('scrollToId');
    }
});
