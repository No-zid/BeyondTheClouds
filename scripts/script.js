function hamburger() {
    var mobileLogo = document.querySelector(".mobile-logo");
    var mobileNav = document.querySelector(".mobile-nav");

    if(mobileNav.classList.contains('active')){
        mobileLogo.style.display = "block";
        mobileNav.classList.remove('active');
    } else {
        mobileLogo.style.display = "block";
        mobileNav.classList.add('active');
    }
}