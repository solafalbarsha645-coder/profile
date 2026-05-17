
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(scrollY >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }

    });

});