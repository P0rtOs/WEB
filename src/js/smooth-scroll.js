document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const button = document.querySelector('.cta-button');
    const closeIcon = document.querySelector('.cross');
    const header_logo = document.querySelector('.logo');

    // Обробник для кнопки відкриття меню
    burgerMenu.addEventListener('click', () => {
        toggleNav();
    });

    // Обробник для кнопки закриття меню
    closeIcon.addEventListener('click', () => {
        toggleNav();
    });

    // Обробник для посилань у меню
    document.querySelectorAll('.nav a[href*="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            if (nav.classList.contains('open')) {
                event.preventDefault();

                const href = link.getAttribute('href');
                const targetId = href.split('#')[1];
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Плавний скрол до секції
                    window.scrollTo({
                        top: targetElement.offsetTop - 120,
                        behavior: 'smooth',
                    });

                    // Закриваємо меню після переходу
                    setTimeout(() => {
                        toggleNav();
                    }, 500); // Затримка синхронізована з анімацією
                }
            }
        });
    });

    // Функція для відкриття/закриття меню
    function toggleNav() {
        const isOpen = nav.classList.toggle('open');
        const isOpenLogo = header_logo.classList.toggle('open');
        button.style.display = isOpen ? 'none' : 'block';
        burgerMenu.style.display = isOpen ? 'none' : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
    }
});

// Скрипт для плавного переходу між секціями на десктоп-версії
$(document).ready(function () {
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
