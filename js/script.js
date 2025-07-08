// Declare variables
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    navbar.classList.remove("active");
};

// Dark Mode and Light Mode

let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if(darkmode.classList.contains("bx-sun")) {
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.add("active");
    } else {
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.remove("active");
    }
};

// swiper library for slides 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    autoplay: {
        delay: 2000,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});