// change navbar background color

const scrollNav = $('#navbarNav');
const scrollNavAll = $('#navbarScroll');

$(window).ready(function() {
    let scrollY = 0;
    $(window).scroll(function() {
        scrollY = $(this).scrollTop();
        if (scrollY >= 600) {
            $(scrollNav).addClass('scroll__nav');
            $(scrollNavAll).addClass('scroll__navall')
        } else {
            $(scrollNav).removeClass('scroll__nav');
            $(scrollNavAll).removeClass('scroll__navall')
        }
    })
});
