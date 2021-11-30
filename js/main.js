const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".menu-toggle");
const scrollLink = document.querySelectorAll(".link");
const serviceItems = document.querySelectorAll(".services__item")

burger.addEventListener("click", (e) => {
    burger.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
    mobileMenu.querySelector(".menu-toggle__inner").classList.toggle("is-active");
    document.body.classList.toggle("overflow");
});
scrollLink.forEach((element) => {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        burger.classList.remove("is-active");
        mobileMenu.classList.remove("is-active");
        mobileMenu.querySelector(".menu-toggle__inner").classList.remove("is-active");
        document.body.classList.remove("overflow");
        let href = this.getAttribute("href");
        let elem = document.querySelector(href);
        window.scroll({
            top: elem.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    });
});
for (const serviceItem of serviceItems) {
    serviceItem.addEventListener('click', () => {
        clearActiveClasses();
        serviceItem.classList.add('active')
    })
}

function clearActiveClasses() {
    serviceItems.forEach((serviceItem) => {
        serviceItem.classList.remove('active')
    })
}
wow = new WOW({
    mobile: false,
    live: false,
});
wow.init();