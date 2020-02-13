window.onload = (function() {

    // change navbar background color

    const scrollNav = document.getElementById('navbarNav');
    const scrollNavAll = document.getElementById('navbarScroll');
    let scrollY = 0;

    window.addEventListener('scroll', () => {
        scrollY = window.pageYOffset;
        if (scrollY >= 600) {
            scrollNav.classList.add('scroll__nav');
            scrollNavAll.classList.add('scroll__navall');
        } else {
            $(scrollNav).removeClass('scroll__nav');
            $(scrollNavAll).removeClass('scroll__navall');
        }
    });

    //add year in copyright
    const copyYear = document.getElementById('copyYear');
    const date = new Date();
    const year = date.getFullYear();
    copyYear.innerText = year.toString();
});
