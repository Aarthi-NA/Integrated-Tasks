
// Smooth scroll to sections
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        const target = $(this.getAttribute('href'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }

        // Close the menu after clicking a navigation link
        if ($('#menu').hasClass('show')) {
            $('#menu').removeClass('show');
        }
    });
});

// Highlight the active section in navigation
$(window).on('scroll', function() {
    const scrollDistance = $(window).scrollTop();

    $('section').each(function(index) {
        if ($(this).offset().top - 100 <= scrollDistance) {
            $('.navbar-nav a.active').removeClass('active');
            $('.navbar-nav a').eq(index).addClass('active');
        }
    });
});

if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded.');
}