const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu-toggle");
const scrollLink = document.querySelectorAll(".link");

function toggleMenu() {
    burger.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
    mobileMenu
        .querySelector(".menu-toggle__inner")
        .classList.toggle("is-active");
    document.body.classList.toggle("overflow");
}
burger.addEventListener("click", (e) => {
    toggleMenu();
});
scrollLink.forEach((element) => {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        let href = this.getAttribute("href");
        let elem = document.querySelector(href);
        let position = 0;
        toggleMenu();
        window.scroll({
            top: elem.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    });
});
wow = new WOW({
    mobile: false,
    live: false,
});
wow.init();