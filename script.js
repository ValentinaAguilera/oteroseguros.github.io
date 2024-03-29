const navLinks = document.querySelectorAll("header nav > ul > li > a");

function onNavClick(event) {
    event.preventDefault();

    if (event.target.classList.contains("active")) return false;

    document.querySelector("header nav > ul > li > a.active")?.classList.remove("active");
    event.target.classList.add("active");
}

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", onNavClick);
});

function onMobileNavClick(event) {
    event.preventDefault();

    document.querySelector("header nav")?.classList.toggle("nav-mobile-active");
}

document
    .querySelector("header .btn-open-mobile-nav")
    .addEventListener("click", onMobileNavClick);

document
    .querySelector("header .btn-close-mobile-nav")
    .addEventListener("click", onMobileNavClick);